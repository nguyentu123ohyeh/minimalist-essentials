import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "All Products", path: "/products" },
    { name: "New Arrivals", path: "/products" },
    { name: "Best Sellers", path: "/products" },
  ],
  company: [
    { name: "Our Story", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "#" },
  ],
  support: [
    { name: "FAQ", path: "#" },
    { name: "Shipping", path: "#" },
    { name: "Returns", path: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Top Section with Links */}
      <div className="container-page pt-24 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6 opacity-50">Contact</h4>
            <div className="space-y-4 text-sm">
              <a
                href="mailto:NealJoseph8878@outlook.com"
                className="flex items-start gap-3 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>NealJoseph8878@outlook.com</span>
              </a>
              <a
                href="tel:+14045339184"
                className="flex items-start gap-3 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+1 (404) 533-9184</span>
              </a>
              <div className="flex items-start gap-3 opacity-70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Owen Drive 1761<br />Clearwater, Florida 33759</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6 opacity-50">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6 opacity-50">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6 opacity-50">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 mb-20">
          <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Bottom Section with Large Brand Name */}
      <div className="border-t border-background/10">
        <div className="container-wide py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs opacity-50 order-2 md:order-1">
              © 2026 Joel Ortiz. All rights reserved.
            </p>
            <div className="order-1 md:order-2">
              <span className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] opacity-20">
                ORTIZ
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
