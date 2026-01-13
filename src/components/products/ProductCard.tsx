import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="group">
      <Link to={`/products/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <button
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background shadow-card flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary hover:text-primary-foreground"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-1">
          {category && (
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{category}</p>
          )}
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
}
