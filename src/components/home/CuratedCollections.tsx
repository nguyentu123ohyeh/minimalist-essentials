import { Link } from "react-router-dom";
import collectionPortrait from "@/assets/collection-portrait.jpg";
import collectionSquare from "@/assets/collection-square.jpg";

export function CuratedCollections() {
  return (
    <section className="container-page section-spacing">
      {/* Header: Căn giữa để tạo sự sang trọng */}
      <div className="text-center mb-24">
        <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
          Curated with Care
        </p>
        <h2 className="font-serif text-5xl md:text-7xl text-foreground italic">
          The Collections
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
        
        {/* Collection 01: Artisan Ceramics (Bên Trái - Cao) */}
        <div className="md:col-span-6 space-y-8">
          <div className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
            <img
              src={collectionPortrait}
              alt="Artisan Ceramics"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Overlay label khi hover */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="space-y-4 pr-12">
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">01 / Ceramics</span>
            <h3 className="font-serif text-3xl text-foreground">Artisan Vessels</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Hand-thrown vessels shaped by master artisans. Each piece carries 
              the subtle imperfections that make it uniquely yours.
            </p>
            <Link
              to="/products"
              className="text-xs uppercase tracking-[0.2em] text-foreground link-underline inline-block pt-2"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        {/* Collection 02: Timeless Textiles (Bên Phải - Thấp hơn) */}
        <div className="md:col-span-5 md:col-start-8 md:mt-40 space-y-8">
          <div className="relative group overflow-hidden rounded-2xl aspect-square">
            <img
              src={collectionSquare}
              alt="Timeless Textiles"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">02 / Textiles</span>
            <h3 className="font-serif text-3xl text-foreground">Timeless Fabrics</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Luxurious natural fabrics, handwoven with intention. Each piece tells a story of 
              craftsmanship passed down through generations.
            </p>
            <Link
              to="/products"
              className="text-xs uppercase tracking-[0.2em] text-foreground link-underline inline-block pt-2"
            >
              Explore Collection
            </Link>
          </div>
          
          {/* Magazine Quote: Thay vì dùng absolute lơ lửng, ta đặt nó làm điểm kết thúc cho cụm ảnh bên phải */}
          <div className="pt-12 border-t border-border mt-12">
            <p className="font-serif text-xl text-foreground/40 italic leading-relaxed">
              "Where form meets function, beauty finds its home."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}