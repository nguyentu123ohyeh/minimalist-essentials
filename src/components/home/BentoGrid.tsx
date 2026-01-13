import { Link } from "react-router-dom";
import bentoTexture from "@/assets/bento-texture.jpg";
import bentoCategory from "@/assets/bento-category.jpg";

export function BentoGrid() {
  return (
    <section className="container-page section-spacing">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
        {/* Cell 1 - Large Video/Image */}
        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            poster={bentoCategory}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-making-a-clay-pot-24092-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs text-background/70 uppercase tracking-widest mb-2">Crafted by Hand</p>
            <h3 className="font-serif text-2xl md:text-3xl text-background">The Art of Making</h3>
          </div>
        </div>

        {/* Cell 2 - Quote */}
        <div className="col-span-1 row-span-1 bg-foreground text-background rounded-2xl p-6 flex flex-col justify-center">
          <blockquote className="font-serif text-lg md:text-xl italic leading-relaxed">
            "Simplicity is the ultimate sophistication."
          </blockquote>
          <cite className="text-xs mt-4 opacity-50 not-italic uppercase tracking-widest">
            — Our Philosophy
          </cite>
        </div>

        {/* Cell 3 - Featured Category */}
        <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl group">
          <img
            src={bentoCategory}
            alt="Ceramics Collection"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs text-background/70 uppercase tracking-widest mb-2">Featured</p>
            <h3 className="font-serif text-xl text-background mb-3">Ceramics</h3>
            <Link
              to="/products"
              className="text-xs text-background uppercase tracking-widest link-underline-accent inline-block"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        {/* Cell 4 - Texture */}
        <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group">
          <img
            src={bentoTexture}
            alt="Material texture close-up"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </div>

        {/* Cell 5 - New Arrivals Badge */}
        <div className="col-span-1 row-span-1 bg-primary text-primary-foreground rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-primary/90 transition-colors">
          <span className="text-xs uppercase tracking-[0.3em] mb-2 opacity-70">Just Dropped</span>
          <span className="font-serif text-2xl md:text-3xl">New Arrivals</span>
          <div className="w-8 h-[1px] bg-primary-foreground/30 mt-4 group-hover:w-16 transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}
