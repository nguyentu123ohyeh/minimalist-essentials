import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Cần thêm cái này để dùng cho phần Contact
import { Layout } from "@/components/layout/Layout";
import { BentoGrid } from "@/components/home/BentoGrid";
import { CuratedCollections } from "@/components/home/CuratedCollections";
import { ProductMarquee } from "@/components/home/ProductMarquee";
import { Hero } from "@/components/home/Hero";

export default function Index() {
  const bentoRef = useRef<HTMLDivElement>(null);

  const scrollToBento = () => {
    bentoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
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
      el.classList.add("opacity-0", "transition-all", "duration-1000");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* 1. Hero Section */}
      <Hero onScrollClick={scrollToBento} />

      {/* 2. Bento Grid */}
      <div ref={bentoRef} className="fade-on-scroll">
        <BentoGrid />
      </div>

      {/* 3. Collections */}
      <div className="fade-on-scroll">
        <CuratedCollections />
      </div>

      {/* 4. Marquee */}
      <div className="fade-on-scroll">
        <ProductMarquee />
      </div>
    </Layout>
  );
}