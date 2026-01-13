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
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-secondary mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <button
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-background shadow-elevated flex items-center justify-center opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary hover:text-primary-foreground"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-2">
          {category && (
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              {category}
            </p>
          )}
          <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
}
