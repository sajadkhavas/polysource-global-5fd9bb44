import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

export function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-border/60",
          isRTL && "lg:divide-x-reverse"
        )}>
          {/* Company */}
          <div className={cn("pt-8 lg:pt-0", isRTL ? "lg:pl-8" : "lg:pr-8", "first:pt-0")}>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.sustainability')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.services')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className={cn("pt-8 lg:pt-0 lg:px-8")}>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">{t('footer.products')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=recycled" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.recycledPolymers')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=virgin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.virginPolymers')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=compounds" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.compoundsMasterbatches')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className={cn("pt-8 lg:pt-0 lg:px-8")}>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.tdsSds')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.requestQuote')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={cn("pt-8 lg:pt-0", isRTL ? "lg:pr-8" : "lg:pl-8")}>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className={cn("flex items-start text-sm text-muted-foreground", isRTL && "flex-row-reverse text-right")}>
                <MapPin className={cn("h-4 w-4 mt-0.5 flex-shrink-0", isRTL ? "ml-2" : "mr-2")} />
                <span>{isRTL ? 'دبي، الإمارات' : 'Dubai, UAE'}</span>
              </li>
              <li className={cn("flex items-center text-sm text-muted-foreground", isRTL && "flex-row-reverse")}>
                <Mail className={cn("h-4 w-4 flex-shrink-0", isRTL ? "ml-2" : "mr-2")} />
                <a href="mailto:hello@polysource.global" className="hover:text-foreground transition-colors">
                  hello@polysource.global
                </a>
              </li>
              <li className={cn("flex items-center text-sm text-muted-foreground", isRTL && "flex-row-reverse")}>
                <Phone className={cn("h-4 w-4 flex-shrink-0", isRTL ? "ml-2" : "mr-2")} />
                <span>+971 4 XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className={cn(
            "flex flex-col md:flex-row justify-between items-center",
            isRTL && "md:flex-row-reverse"
          )}>
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className={cn("flex mt-4 md:mt-0", isRTL ? "space-x-reverse space-x-6" : "space-x-6")}>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
