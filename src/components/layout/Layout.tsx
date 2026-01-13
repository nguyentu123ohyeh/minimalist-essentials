import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer"; // Import Footer mới

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      {/* Footer sẽ tự động xuất hiện ở cuối mỗi trang dùng Layout */}
      <Footer />
    </div>
  );
};