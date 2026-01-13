import { Link } from "react-router-dom";
// Nếu bạn dùng thư viện icon (ví dụ lucide-react), hãy import icon giỏ hàng ở đây
// import { ShoppingBag } from "lucide-react";

export const Header = () => {
  return (
    // Header được cố định (fixed) ở trên cùng, có nền trong suốt và nằm trên các phần tử khác (z-50)
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent py-6 transition-all duration-300">
      <div className="container-wide flex items-center justify-between px-4 md:px-8">
        {/* Left Navigation (Home, Products) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors">
            Products
          </Link>
        </nav>

        {/* Logo (Centered) */}
        {/* Sử dụng absolute để căn giữa logo tuyệt đối so với header */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-foreground">
            ORTIZ
          </Link>
        </div>

        {/* Right Navigation (About, Contact, Cart) */}
        <nav className="flex items-center space-x-6 md:space-x-8">
          <Link to="/about" className="hidden md:block text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="hidden md:block text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors">
            Contact
          </Link>

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative group p-1">
            {/* Bạn có thể thay thế thẻ svg này bằng icon từ thư viện */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:text-primary transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {/* Số lượng sản phẩm trong giỏ (Badge) */}
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] text-white">
              0
            </span>
          </Link>

          {/* Nút Menu cho Mobile (Nếu cần) */}
          {/* <button className="md:hidden">...</button> */}
        </nav>
      </div>
    </header>
  );
};