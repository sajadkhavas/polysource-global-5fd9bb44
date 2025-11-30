import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { RFQProvider } from "./contexts/RFQContext";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { SkipToContent } from "./components/SkipToContent";
import WhatsAppButton from "./components/WhatsAppButton";
import { useDirection } from "./hooks/useDirection";
import { useTranslation } from "react-i18next";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const About = lazy(() => import("./pages/About"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
  </div>
);

// Component to sync language with URL
const LanguageSync = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const isArabicRoute = location.pathname.startsWith('/ar');
    const currentLang = i18n.resolvedLanguage || i18n.language || 'en';
    const shouldBeArabic = isArabicRoute;
    
    if (shouldBeArabic && !currentLang.startsWith('ar')) {
      i18n.changeLanguage('ar');
    } else if (!shouldBeArabic && currentLang.startsWith('ar')) {
      i18n.changeLanguage('en');
    }
  }, [location.pathname, i18n]);
  
  return null;
};

const App = () => {
  const { dir } = useDirection();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", currentLanguage);

    if (dir === "rtl") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [dir, currentLanguage]);

  return (
    <QueryClientProvider client={queryClient}>
      <RFQProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <LanguageSync />
            <SkipToContent />
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main id="main-content" className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* English Routes (default) */}
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sustainability" element={<Sustainability />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogArticle />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/services" element={<Services />} />
                    
                    {/* Arabic Routes */}
                    <Route path="/ar" element={<Home />} />
                    <Route path="/ar/products" element={<Products />} />
                    <Route path="/ar/products/:id" element={<ProductDetail />} />
                    <Route path="/ar/about" element={<About />} />
                    <Route path="/ar/sustainability" element={<Sustainability />} />
                    <Route path="/ar/contact" element={<Contact />} />
                    <Route path="/ar/resources" element={<Resources />} />
                    <Route path="/ar/blog" element={<Blog />} />
                    <Route path="/ar/blog/:id" element={<BlogArticle />} />
                    <Route path="/ar/faq" element={<FAQ />} />
                    <Route path="/ar/services" element={<Services />} />
                    
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </RFQProvider>
    </QueryClientProvider>
  );
};

export default App;
