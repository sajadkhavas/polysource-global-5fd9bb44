import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
          {/* Company */}
          <div className="pt-8 lg:pt-0 lg:pr-8 first:pt-0">
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="pt-8 lg:pt-0 lg:px-8">
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=recycled" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Recycled Polymers
                </Link>
              </li>
              <li>
                <Link to="/products?category=virgin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Virgin Polymers
                </Link>
              </li>
              <li>
                <Link to="/products?category=compounds" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Compounds & Masterbatches
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="pt-8 lg:pt-0 lg:px-8">
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  TDS & SDS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="pt-8 lg:pt-0 lg:pl-8">
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Dubai, UAE</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:hello@polysource.global" className="hover:text-foreground transition-colors">
                  hello@polysource.global
                </a>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>+971 4 XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PolySource Global. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
