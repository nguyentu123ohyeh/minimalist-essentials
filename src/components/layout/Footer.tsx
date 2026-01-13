import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-8 mb-20">
          {/* Brand Info */}
          <div className="col-span-12 lg:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-widest mb-6 block">
              ORTIZ
            </Link>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              Curating modern minimalist essentials for those who appreciate the beauty in simplicity.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-6 lg:col-span-2 lg:col-start-6">
            <p className="text-xs uppercase tracking-[0.2em] mb-6 font-bold">Shop</p>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">All Products</Link></li>
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">Lighting</Link></li>
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">Furniture</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-6 lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] mb-6 font-bold">Company</p>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">Our Story</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-12 lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] mb-6 font-bold">Inquiries</p>
            <div className="space-y-4 text-sm opacity-60 leading-relaxed">
              <p>NealJoseph8878@outlook.com</p>
              <p>+1 (404) 533-9184</p>
              <p>Owen Drive 1761, Clearwater, Florida 33759</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            © 2026 ORTIZ ESSENTIALS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-40">
          </div>
        </div>
      </div>
    </footer>
  );
};