# TECHNICAL AUDIT REPORT - PolySource Global

## Executive Summary
The project has a modern React/Vite foundation with clear route-level code splitting, i18n support, and reusable UI primitives. However, several production-readiness risks remain: a broken ThemeToggle component, duplicate QueryClient providers, heavy dependence on mock data, missing automated coverage pipeline, and incomplete security/SEO hardening. Current architecture is suitable for iterative development, but not yet fully hardened for high-confidence B2B production workloads.

---

## 1. Architecture Score (0-10)
**Score: 6.5 / 10**

### Strengths
- Route-level lazy loading implemented for all top-level pages in `App.tsx`.
- React Query is used for async data state (`Products`, `Blog`) with loading/error branches.
- i18n foundation (English/Arabic) and RTL support exist and are wired to document direction/lang.
- Reusable component-based structure (`components`, `pages`, `lib`, `data`, `hooks`).

### Weaknesses
- **QueryClient is initialized twice**: once in `main.tsx` and once in `App.tsx`, creating architecture inconsistency and possible cache fragmentation.
- `ThemeToggle` component is functionally broken (`return;`), so theme UX is effectively disabled.
- Data access layer is still mock-first (`mockData.ts`, static search index), limiting backend readiness.
- Generated SEO dataset (`src/data/pageSeo.ts`) is not integrated into rendering flow.

### Recommendations
1. Keep a **single QueryClientProvider** at app root.
2. Restore ThemeToggle behavior and add component-level tests.
3. Introduce API service layer (`/services/api`) with typed DTOs and runtime validation.
4. Integrate central SEO model directly into page SEO calls.

---

## 2. Bug Report (Critical → Low Priority)

### Critical (P0)
1. **Theme toggle is broken**
   - Impact: High (theme switching inaccessible)
   - Steps: open any page; no theme toggle action is rendered.
   - Suggested fix: render an actionable button, wire to `setTheme(theme === 'dark' ? 'light' : 'dark')`.
   - Files: `src/components/ThemeToggle.tsx`

2. **Duplicate React Query providers**
   - Impact: High (possible duplicate caches and hard-to-debug data behavior)
   - Steps: inspect root composition (`main.tsx` + `App.tsx` both wrapping with QueryClientProvider).
   - Suggested fix: remove provider from `App.tsx` and keep only one in `main.tsx`.
   - Files: `src/main.tsx`, `src/App.tsx`

### High Priority (P1)
1. **RFQ basket lacks explicit persistence implementation**
   - Impact: Medium/High for B2B workflow continuity.
   - Evidence: RFQ state is plain `useState` in context; no localStorage hydration/save logic.
   - Suggested fix: add `useEffect` hydration + persistence with schema versioning.
   - Files: `src/contexts/RFQContext.tsx`

2. **Contact form submission is simulated (console only)**
   - Impact: High (no real lead capture in production).
   - Steps: submit RFQ on Contact page; logic logs payload and shows success toast.
   - Suggested fix: integrate actual API endpoint with retry/error handling.
   - Files: `src/pages/Contact.tsx`, `src/lib/analytics.ts`

3. **WhatsApp button uses placeholder number**
   - Impact: High (lost leads / wrong contact target).
   - Suggested fix: move number to environment config and validate format.
   - Files: `src/components/WhatsAppButton.tsx`

### Medium Priority (P2)
1. **Product detail image category is hardcoded to recycled**
   - Impact: Medium (incorrect imagery for many SKUs).
   - Suggested fix: map image category from actual product taxonomy.
   - Files: `src/pages/ProductDetail.tsx`

2. **Global search is mock-index based**
   - Impact: Medium (incomplete discoverability and stale search results).
   - Suggested fix: use server-backed search endpoint or build-time index pipeline.
   - Files: `src/lib/searchIndex.ts`, `src/components/GlobalSearch.tsx`

3. **Potential cleanup issue in LazyImage observer effect**
   - Impact: Medium/Low (possible stale ref cleanup warning).
   - Suggested fix: capture `containerRef.current` in local variable for cleanup.
   - Files: `src/components/LazyImage.tsx`

### Low Priority (P3)
1. **SEO domain mismatch** (`testwebs.lovable.app` vs `polysource.global` dataset)
2. **robots.txt lacks sitemap directive**
3. **No explicit CSP/security headers in dev server response**

---

## 3. Performance Analysis

### Lighthouse Scores
- Could not execute Lighthouse CLI due registry/network policy restriction (`npm E403` while resolving `lighthouse`).

### Core Web Vitals (measured with Playwright PerformanceObserver, local dev)
- LCP ≈ **2112 ms**
- CLS ≈ **0.492** (high; target < 0.1)
- TTFB ≈ **13.2 ms** (local dev, non-production indicative only)
- FID: not directly measurable in this headless scripted run.

### Bundle Analysis Results
- `npm run build` succeeded; main JS chunk ~**638.86 kB** (gzip ~207.48 kB), flagged by Vite as large chunk.
- Bundle analyzer install/run was blocked (`vite-bundle-analyzer` via npm E403).

### Optimization Opportunities
1. Reduce monolithic entry chunk with deeper dynamic imports/manual chunking.
2. Audit heavy deps (framer-motion, lucide usage breadth, UI primitives) and tree-shake.
3. Preload critical hero image and stabilize layout dimensions to reduce CLS.

---

## 4. Security Findings

### Vulnerabilities Found
- `npm audit` could not complete due registry policy (`403 Forbidden` audit endpoint), so vulnerability inventory is inconclusive.

### Security Recommendations
1. Add strong headers at hosting/CDN level:
   - `Content-Security-Policy`
   - `X-Frame-Options`
   - `Strict-Transport-Security`
   - `Referrer-Policy`
2. Move all contact channels and external URLs (WhatsApp number etc.) to env config.
3. Add client-side output encoding review for any future user-generated HTML rendering.

### Compliance Gaps
- No visible evidence of CSRF strategy for future form API.
- Supabase client exists, but no live table schema/RLS policies are represented in generated types (empty `public` schema).

---

## 5. SEO & Accessibility Status

### SEO Strengths
- Reusable SEO component supports title, description, canonical, OG, Twitter, and JSON-LD.
- Breadcrumb/Product/FAQ/Article schema helper utilities exist.

### SEO Issues
1. `src/data/pageSeo.ts` is comprehensive but not connected to page runtime SEO flow.
2. Canonical and alternate URLs in SEO component point to `testwebs.lovable.app` not production domain.
3. `robots.txt` does not reference sitemap; no `sitemap.xml` exists in public assets.

### Accessibility Violations / Risks
1. Theme toggle missing (keyboard/screen-reader discoverability loss for theme preference).
2. Search desktop trigger uses clickable `<div>` instead of semantic `<button>`.
3. Dialog content passes `aria-describedby={undefined}` (likely workaround, should provide valid description).
4. High CLS suggests focus/context instability risk during load.

---

## 6. Data Layer & Backend Readiness

### Current State Analysis
- Product/blog/resources/search currently rely heavily on static/mock sources.
- Supabase client scaffold exists, but typed DB model has no domain tables.
- API error handling is mostly UI-level and not backed by robust request abstraction.

### Migration Plan (Mock → Real)
1. Introduce service modules:
   - `services/products.ts`, `services/blog.ts`, `services/rfq.ts`
2. Add environment-aware adapter:
   - mock adapter for dev
   - supabase/rest adapter for prod
3. Replace direct `mockData` imports in pages/components with service hooks.
4. Add optimistic cache invalidation strategy with React Query keys.

### API Integration Strategy
- Use typed schemas (e.g., Zod) for request/response validation.
- Add global query/mutation error boundary + toast mapping.
- Implement retry/backoff only for idempotent requests.

### Proposed Database Schema
**products**
- id (uuid PK), slug (unique), name_en, name_ar, grade, polymer_type, category, recycled_percentage, mfi, color, in_stock, created_at, updated_at
- Indexes: `(slug)`, `(category, in_stock)`, `(polymer_type)`

**users**
- id (uuid PK), email (unique), full_name, company, role, created_at
- Indexes: `(email)`

**rfq_requests**
- id (uuid PK), user_id (nullable FK users), company, email, phone, country, application, timeline, notes, status, created_at
- Indexes: `(status, created_at)`

**rfq_items**
- id (uuid PK), rfq_id (FK rfq_requests), product_id (FK products), quantity, unit, requirements
- Indexes: `(rfq_id)`, `(product_id)`

**blog_posts**
- id (uuid PK), slug (unique), title_en, title_ar, excerpt_en, excerpt_ar, body_en, body_ar, category, published_at
- Indexes: `(slug)`, `(published_at DESC)`

RLS suggestion:
- Public read for `products`, `blog_posts`.
- Authenticated insert for `rfq_requests`/`rfq_items` via controlled policy + rate limit.

---

## 7. Development Roadmap (Priority Order)

### Phase 1: Critical Fixes (Week 1)
1. Fix ThemeToggle component and add component test.
2. Remove duplicate QueryClientProvider.
3. Replace placeholder WhatsApp number with env-driven verified contact.
4. Connect Contact form to real API endpoint and error states.

### Phase 2: Core Features (Week 2-3)
1. Implement RFQ persistence with localStorage + migration version key.
2. Replace mock search/resources/products with service-layer data sources.
3. Integrate central `pageSeo` model with runtime pages.
4. Add sitemap generation and robots sitemap directive.

### Phase 3: Optimizations (Week 4)
1. Bundle chunking strategy and dependency pruning.
2. CLS remediation for hero/content shifts.
3. Add CI pipeline for lint/test/build/a11y/security checks.

---

## 8. Technical Debt Assessment

### Short-term Debt (fix now)
- Broken ThemeToggle.
- Placeholder production contacts.
- Simulated form submission without backend.
- Duplicate QueryClient providers.

### Medium-term Debt (fix in 1 month)
- Mock data coupling in multiple pages/components.
- SEO model drift between static dataset and rendered metadata.
- Accessibility semantics in search/dialog flows.

### Long-term Debt (refactor later)
- Introduce domain-driven modular architecture for data + UI.
- Strong observability (Sentry, web-vitals, analytics pipeline).

---

## 9. Recommended Tech Stack Enhancements
- Add: `@vitest/coverage-v8`, `axe-core`/`@axe-core/playwright`, `eslint-plugin-jsx-a11y`, `vite-plugin-compression`, `rollup-plugin-visualizer`.
- Upgrade process: monthly dependency review via Renovate/Dependabot.
- Implement CI quality gates:
  - lint + typecheck + test + coverage threshold
  - accessibility smoke test
  - build size budget check

---

## Appendix: Test Results

### Commands Executed
1. `npm test -- --coverage` → failed (no `test` script)
2. `npx vitest run --coverage` → failed (missing `@vitest/coverage-v8`)
3. `npx vitest run` → passed (3 files, 11 tests)
4. `npm run build` → passed
5. `npm run lint` → failed (pre-existing lint errors/warnings)
6. `npm audit --json` → blocked by npm registry policy (403)
7. `npm outdated` → blocked by npm registry policy (403)
8. `npx lighthouse ...` → blocked by npm registry policy (403)
9. `npx vite-bundle-analyzer` → blocked by npm registry policy (403)
10. Manual route sweep via Playwright across 12 paths → all navigated and rendered h1 content.

### Integration Checks (Requested Known Issues)
- ThemeToggle broken? **Yes** (code-level confirmation).
- RFQ Basket localStorage persistence? **No explicit implementation found**.
- Contact Form submission only console simulation? **Yes**.
- WhatsApp placeholder number? **Yes**.
- Product images placeholder/hardcoded behavior? **Partially yes** (product detail uses fixed category mapping).
- Search functionality using mock data? **Yes**.
