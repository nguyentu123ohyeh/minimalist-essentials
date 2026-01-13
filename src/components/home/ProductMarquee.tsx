import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import productVase from "@/assets/product-vase.jpg";
import productCandle from "@/assets/product-candle.jpg";
import productBlanket from "@/assets/product-blanket.jpg";
import productOrganizer from "@/assets/product-organizer.jpg";

const products = [
  { name: "Ceramic Minimal Vase", image: productVase },
  { name: "Lake Scented Candle", image: productCandle },
  { name: "Chunky Knit Throw", image: productBlanket },
  { name: "Oak Desk Organizer", image: productOrganizer },
  { name: "Ceramic Minimal Vase", image: productVase },
  { name: "Lake Scented Candle", image: productCandle },
  { name: "Chunky Knit Throw", image: productBlanket },
  { name: "Oak Desk Organizer", image: productOrganizer },
];

export function ProductMarquee() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const hoveredImage = products.find((p) => p.name === hoveredProduct)?.image;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-16 border-y border-border"
      onMouseMove={handleMouseMove}
    >
      {/* Hover Image Preview */}
      {hoveredProduct && hoveredImage && (
        <div
          className="fixed pointer-events-none z-50 w-48 h-64 rounded-lg overflow-hidden shadow-elevated transition-opacity duration-200"
          style={{
            left: mousePosition.x + (containerRef.current?.getBoundingClientRect().left || 0) + 20,
            top: mousePosition.y + (containerRef.current?.getBoundingClientRect().top || 0) - 100,
          }}
        >
          <img
            src={hoveredImage}
            alt={hoveredProduct}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Marquee */}
      <div className="animate-marquee flex whitespace-nowrap">
        {[...products, ...products].map((product, index) => (
          <Link
            key={index}
            to="/products"
            className="inline-block mx-12"
            onMouseEnter={() => setHoveredProduct(product.name)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <span className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground/20 hover:text-primary transition-colors duration-500 cursor-pointer">
              {product.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
