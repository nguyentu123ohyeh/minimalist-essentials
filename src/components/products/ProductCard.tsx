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
        <div className="aspect-[4/5] overflow-hidden rounded-xl bg-secondary/30">
          <img
              src={image}
              alt={name}
              className="h-full w-full object-contain p-4 transition-transform duration-500 hover:scale-110"
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
