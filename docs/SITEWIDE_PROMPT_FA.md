# پرامپت جامع تحلیل و بهینه‌سازی تمام صفحات سایت

## خلاصه ساختار فعلی سایت
این پرامپت بر اساس ساختار روت‌های فعلی پروژه تنظیم شده است:
- `/` خانه
- `/products` و `/polymer-products` لیست محصولات
- `/products/:id` جزئیات محصول
- `/polymer-products/:categorySlug`
- `/polymer-products/:categorySlug/:subcategorySlug`
- `/polymer-products/:categorySlug/:subcategorySlug/:typeSlug` صفحات دسته‌بندی سلسله‌مراتبی
- `/about` درباره ما
- `/sustainability` پایداری
- `/services` خدمات
- `/resources` منابع (TDS/SDS/COA)
- `/blog` بلاگ
- `/blog/:id` مقاله
- `/faq` سوالات متداول
- `/contact` تماس با ما
- `*` صفحه 404

---

## پرامپت آماده (کپی/پیست)

```txt
تو یک تیم کامل «مشاور رشد دیجیتال + UX Researcher + UI Designer + SEO Strategist + CRO Specialist + Frontend Architect + Content Strategist» هستی.

من یک سایت B2B در حوزه پلیمر دارم (چندزبانه EN/AR و پشتیبانی RTL). می‌خواهم کل سایت را صفحه‌به‌صفحه بررسی کنی و یک برنامه اجرایی دقیق برای بهبود تجربه کاربری، نرخ تبدیل، سئو و ساختار محتوا بدهی.

### 1) ابتدا این صفحات را مبنا قرار بده:
- Home (/)
- Products Listing (/products و /polymer-products)
- Product Detail (/products/:id)
- Category Pages (/polymer-products/:categorySlug/...)
- About (/about)
- Sustainability (/sustainability)
- Services (/services)
- Resources (/resources)
- Blog Listing (/blog)
- Blog Article (/blog/:id)
- FAQ (/faq)
- Contact (/contact)
- 404

### 2) خروجی را در 5 لایه بده:

#### لایه A: Site Audit (صفحه‌به‌صفحه)
برای هر صفحه این موارد را در جدول بده:
- هدف صفحه (Primary Goal)
- پرسونای اصلی
- اکشن مطلوب کاربر
- پیام اصلی
- CTA اصلی و CTA ثانویه
- نقاط اصطکاک (UX Friction)
- ایرادهای احتمالی اعتمادسازی
- فرصت‌های سریع بهبود (Quick Wins)

#### لایه B: UX/UI و CRO
برای هر صفحه پیشنهاد عملیاتی بده:
- ساختار سکشن‌ها به ترتیب نمایش
- پیشنهاد تیتر (H1) و ساب‌تیتر جدید
- جای‌گذاری CTAها (بالای صفحه، میانی، انتهایی)
- الگوی کارت/جدول/اکاردئون مناسب همان صفحه
- پیشنهاد المان‌های اعتماد (آمار، گواهی، لوگوی مشتری، کیس استادی)
- بهبود فرم‌ها (خصوصا Contact و RFQ)
- پیشنهاد A/B Test (حداقل 3 تست برای Home، Product، Contact)

#### لایه C: SEO + Content
برای تک‌تک صفحات بده:
- Keyword اصلی + 3 Keyword فرعی + 2 Long-tail
- Meta Title و Meta Description پیشنهادی
- ساختار H1-H2-H3
- پیشنهاد Internal Linking (از/به چه صفحاتی لینک شود)
- نوع Schema مناسب (Organization, Product, FAQ, Breadcrumb, Article)
- گپ‌های محتوایی و موضوعات بلاگ پشتیبان

#### لایه D: Technical + Performance
یک چک‌لیست فنی دقیق بده:
- Core Web Vitals (LCP/CLS/INP) به تفکیک اولویت
- بهینه‌سازی لود تصاویر و lazy loading
- بهبود کداسپلیت و مسیرهای سنگین
- Accessibility (کنتراست، فوکوس، aria-label، skip links)
- i18n/RTL QA checklist (دو زبان EN/AR)
- رویدادهای آنالیتیکس مورد نیاز (CTA clicks, form submit, search, WhatsApp click)

#### لایه E: Roadmap اجرایی
- برنامه 30 روزه در 4 اسپرینت هفتگی
- هر تسک با: Owner (SEO/Dev/Design/Content)، زمان تقریبی، Impact (High/Med/Low)
- اولویت‌بندی ICE یا RICE
- خروجی قابل تحویل پایان هر اسپرینت

### 3) بخش ویژه صفحه‌ها (الزامی)
برای صفحات زیر خروجی عمیق‌تر بده:
- Home: بازنویسی کامل Hero + Value Proposition + اعتمادسازی + CTA
- Product Detail: ساختار فنی دیتاشیت‌محور + RFQ conversion blocks
- Contact: فرم بهینه B2B + سوالات پیش‌نیاز فروش + کاهش فیلدهای مزاحم
- Blog: استراتژی Topic Cluster سه‌ماهه برای جذب لید صنعتی
- Resources: تبدیل این صفحه به «Lead Magnet Engine» (دانلود فایل در ازای لید)

### 4) قالب خروجی
- پاسخ را با Markdown ساختاریافته بده.
- از جدول استفاده کن.
- برای هر پیشنهاد، دلیل (Why) + روش اجرا (How) + معیار موفقیت (Metric) بنویس.
- از کلی‌گویی پرهیز کن؛ عدد و مثال واقعی پیشنهاد بده.

### 5) محدودیت‌ها و هدف تجاری
- بازار هدف: B2B جهانی با هاب دبی
- هدف اصلی: افزایش RFQ و تماس فروش
- هدف ثانویه: رشد ترافیک ارگانیک و اعتبار تخصصی برند
- لحن برند: تخصصی، قابل اعتماد، شفاف

اگر داده‌ای کم بود، قبل از خروجی نهایی فقط «5 سوال حیاتی» بپرس و بعد نسخه نهایی را ارائه کن.
```

---

## نسخه کوتاه (اگر بخوای سریع استفاده کنی)

```txt
کل سایت B2B پلیمر من را صفحه‌به‌صفحه (Home, Products, Product Detail, Categories, About, Sustainability, Services, Resources, Blog, FAQ, Contact, 404) از نظر UX, CRO, SEO, Content, Technical Audit بررسی کن. برای هر صفحه: هدف، CTA، مشکلات، Quick Wins، Meta + Heading + Schema + Internal Links + A/B Tests بده. در پایان یک Roadmap 30 روزه با اولویت High/Med/Low و KPIهای قابل اندازه‌گیری ارائه کن.
```
