import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import aboutTeamImage from "@/assets/about-team.jpg";
import collectionPortrait from "@/assets/collection-portrait.jpg";

const values = [
  {
    number: "01",
    title: "Sustainability",
    description:
      "We believe in responsible sourcing and sustainable practices. Every product is designed with environmental consciousness in mind.",
  },
  {
    number: "02",
    title: "Transparency",
    description:
      "Honest communication and clear practices. From pricing to materials, we share everything openly.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Good design is timeless. We create pieces that are both beautiful and functional, standing the test of time.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="min-h-[60vh] flex items-end pt-32 pb-20">
        <div className="container-page">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Our Story
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground max-w-4xl leading-[1.1]">
            Curating beauty for modern living
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="container-page pb-32">
        <div className="grid grid-cols-12 gap-8">
          {/* Image */}
          <div className="col-span-12 lg:col-span-6">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={aboutTeamImage}
                alt="Our team in the studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-foreground text-xl font-serif">
                ORTIZ was born from a simple observation: our homes had become cluttered 
                with things that did not bring us joy.
              </p>
              <p>
                In 2020, we set out to change that by curating a collection of products 
                that combine beauty with purpose. We work directly with artisans and 
                small manufacturers who share our values of quality and sustainability.
              </p>
              <p>
                Every item in our collection has been carefully selected for its 
                craftsmanship, materials, and ability to enhance everyday life.
              </p>
              <p>
                Our mission is to help you create spaces that feel calm, intentional, 
                and truly yours. We believe that by owning fewer, better things, 
                we can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-foreground text-background py-32">
        <div className="container-page">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-4">
              What We Stand For
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.number} className="group">
                <span className="text-xs text-primary font-medium">{value.number}</span>
                <h3 className="font-serif text-2xl mt-4 mb-4">{value.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{value.description}</p>
                <div className="w-12 h-[1px] bg-background/30 mt-6 group-hover:w-24 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Joel Ortiz Section */}
      <section className="container-page section-spacing">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={collectionPortrait}
                alt="Joel Ortiz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Founder
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
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
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
