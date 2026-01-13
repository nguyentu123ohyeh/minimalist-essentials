import { Link } from "react-router-dom";
import { CursorFollowButton } from "@/components/ui/CursorFollowButton";
import heroFashion from "@/assets/hero-fashion.jpg";

interface HeroProps {
  onScrollClick: () => void;
}

export const Hero = ({ onScrollClick }: HeroProps) => {
  return (
    // Tăng padding-top (pt-32) để không bị dính vào Header
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:pt-40">
      <div className="container-wide w-full">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Large Typography */}
          <div className="col-span-12 lg:col-span-7 z-10">
            <div className="space-y-8"> {/* Tăng khoảng cách giữa các dòng */}
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground animate-fade-in">
                Modern Avant-Garde Living
              </p>
              <h1 className="font-serif text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.85] tracking-tight text-foreground">
                <span className="block animate-fade-in-up">THE ART</span>
                <span className="block animate-fade-in-up animation-delay-100">OF</span>
                <span className="block text-primary animate-fade-in-up animation-delay-200">ORTIZ</span>
              </h1>
              <p className="text-muted-foreground max-w-sm text-lg leading-relaxed mt-10 animate-fade-in-up animation-delay-300">
                Curating modern minimalist essentials for those who appreciate 
                the beauty in simplicity.
              </p>
              <div className="flex items-center gap-10 mt-12 animate-fade-in-up animation-delay-400">
                <Link
                  to="/products"
                  className="text-xs uppercase tracking-[0.2em] text-foreground link-underline font-medium"
                >
                  Shop Collection
                </Link>
                <Link
                  to="/about"
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Image - Căn chỉnh lại để không đè Logo */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:h-[85vh] lg:w-[45vw]">
            <div className="relative h-[60vh] lg:h-full rounded-2xl lg:rounded-l-3xl lg:rounded-r-none overflow-hidden shadow-2xl">
              <img
                src={heroFashion}
                alt="Elegant minimalist fashion"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <CursorFollowButton onClick={onScrollClick} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-12 hidden lg:flex flex-col items-center gap-3 animate-fade-in animation-delay-500">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground vertical-text mb-2">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
};