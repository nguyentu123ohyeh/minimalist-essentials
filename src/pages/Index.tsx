import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CursorFollowButton } from "@/components/ui/CursorFollowButton";
import { BentoGrid } from "@/components/home/BentoGrid";
import { CuratedCollections } from "@/components/home/CuratedCollections";
import { ProductMarquee } from "@/components/home/ProductMarquee";
import heroFashion from "@/assets/hero-fashion.jpg";

export default function Index() {
  const bentoRef = useRef<HTMLDivElement>(null);

  const scrollToBento = () => {
    bentoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-on-scroll").forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero Section - Typography Led */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container-wide w-full">
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* Large Typography */}
            <div className="col-span-12 lg:col-span-7 z-10">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground animate-fade-in">
                  Modern Avant-Garde Living
                </p>
                <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight text-foreground">
                  <span className="block animate-fade-in-up">THE ART</span>
                  <span className="block animate-fade-in-up animation-delay-100">OF</span>
                  <span className="block text-primary animate-fade-in-up animation-delay-200">ORTIZ</span>
                </h1>
                <p className="text-muted-foreground max-w-md text-lg leading-relaxed mt-8 animate-fade-in-up animation-delay-300">
                  Curating modern minimalist essentials for those who appreciate 
                  the beauty in simplicity.
                </p>
                <div className="flex items-center gap-8 mt-8 animate-fade-in-up animation-delay-400">
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

            {/* Hero Image - Asymmetric */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:h-[90vh] lg:w-[50vw]">
              <div className="relative h-[60vh] lg:h-full rounded-2xl lg:rounded-l-3xl lg:rounded-r-none overflow-hidden">
                <img
                  src={heroFashion}
                  alt="Elegant minimalist fashion"
                  className="w-full h-full object-cover"
                />
                {/* Cursor Follow Button */}
                <CursorFollowButton onClick={scrollToBento} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in animation-delay-500">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
        </div>
      </section>

      {/* Bento Grid Showcase */}
      <div ref={bentoRef}>
        <BentoGrid />
      </div>

      {/* Curated Collections */}
      <div className="fade-on-scroll">
        <CuratedCollections />
      </div>

      {/* Product Marquee */}
      <div className="fade-on-scroll">
        <ProductMarquee />
      </div>

      {/* Contact Section */}
      <section className="container-page section-spacing fade-on-scroll">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Joel Ortiz
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <a 
                  href="mailto:NealJoseph8878@outlook.com" 
                  className="hover:text-primary transition-colors"
                >
                  NealJoseph8878@outlook.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+14045339184" 
                  className="hover:text-primary transition-colors"
                >
                  +1 (404) 533-9184
                </a>
              </p>
              <p>
                Owen Drive 1761<br />
                Clearwater, Florida 33759
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-8 text-xs uppercase tracking-[0.2em] text-foreground link-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
