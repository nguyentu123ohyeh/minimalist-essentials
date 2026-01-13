import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Leaf, Eye, Palette } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We're committed to responsible sourcing and sustainable practices. Every product in our collection is designed with environmental consciousness in mind.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe in honest communication and clear practices. From pricing to materials, we share everything openly with our customers.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Good design is timeless. We focus on creating pieces that are both beautiful and functional, standing the test of time in both quality and style.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="section-spacing bg-secondary">
        <div className="container-page text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 animate-fade-in">
            Our Story
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Founded on the belief that less is more, we curate thoughtful products for modern living.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutTeamImage}
                  alt="Our team working in a bright, modern studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-semibold text-foreground">
                Simplifying Spaces, Enriching Lives
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Essence was born from a simple observation: our homes had become cluttered with things that didn't bring us joy. In 2020, we set out to change that by curating a collection of products that combine beauty with purpose.
                </p>
                <p>
                  We work directly with artisans and small manufacturers who share our values of quality and sustainability. Every item in our collection has been carefully selected for its craftsmanship, materials, and ability to enhance everyday life.
                </p>
                <p>
                  Our mission is to help you create spaces that feel calm, intentional, and truly yours. We believe that by owning fewer, better things, we can focus on what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product selection to customer care.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background p-8 rounded-2xl shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-background">
        <div className="container-page text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Explore Our Collection?
          </h2>
          <p className="text-muted-foreground mb-6">
            Discover products designed to simplify and beautify your everyday life.
          </p>
          <Link
            to="/products"
            className="text-primary font-medium link-underline"
          >
            Browse Products →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
