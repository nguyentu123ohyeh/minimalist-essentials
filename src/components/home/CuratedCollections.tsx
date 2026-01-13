import { Link } from "react-router-dom";
import collectionPortrait from "@/assets/collection-portrait.jpg";
import collectionSquare from "@/assets/collection-square.jpg";

export function CuratedCollections() {
  return (
    <section className="container-page section-spacing">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Curated with Care
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground max-w-2xl">
          Collections
        </h2>
      </div>

      {/* Asymmetrical Layout */}
      <div className="relative grid grid-cols-12 gap-4 md:gap-8 min-h-[800px]">
        {/* Left Portrait Image */}
        <div className="col-span-12 md:col-span-5 md:col-start-1">
          <div className="aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-2xl">
            <img
              src={collectionPortrait}
              alt="Curated ceramics collection"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Square Image - Offset Lower */}
        <div className="col-span-12 md:col-span-5 md:col-start-7 md:mt-32">
          <div className="aspect-square overflow-hidden rounded-2xl mb-8">
            <img
              src={collectionSquare}
              alt="Natural textiles collection"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Text in the whitespace */}
          <div className="max-w-sm">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Timeless Textiles
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Luxurious natural fabrics, handwoven with intention. Each piece tells a story of 
              craftsmanship passed down through generations.
            </p>
            <Link
              to="/products"
              className="text-xs uppercase tracking-[0.2em] text-foreground link-underline inline-block"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        {/* Floating Text - Magazine Style */}
        <div className="hidden lg:block absolute left-[40%] top-[15%] max-w-[200px]">
          <p className="font-serif text-lg text-foreground/60 italic leading-relaxed">
            Where form meets function, beauty finds its home.
          </p>
        </div>

        {/* Bottom Left Text */}
        <div className="col-span-12 md:col-span-4 md:col-start-1 mt-8 md:-mt-32">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Artisan Ceramics
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Hand-thrown vessels shaped by master artisans. Each piece carries 
            the subtle imperfections that make it uniquely yours.
          </p>
          <Link
            to="/products"
            className="text-xs uppercase tracking-[0.2em] text-foreground link-underline inline-block"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
