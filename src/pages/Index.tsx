import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Truck } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Quality Materials",
    description: "Every product is crafted from premium, sustainable materials built to last.",
  },
  {
    icon: Shield,
    title: "Thoughtful Design",
    description: "Minimalist aesthetics meet functionality in every piece we curate.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on all orders over $75. Delivered with care.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
            {/* Hero Text */}
            <div className="py-16 lg:py-0 space-y-8 animate-fade-in">
              <div className="space-y-4">
                <p className="text-sm font-medium text-primary uppercase tracking-wider">
                  Modern Living Essentials
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                  Simplify Your Life with{" "}
                  <span className="text-primary">Essence</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Discover modern minimalist essentials designed for everyday living. 
                  Quality craftsmanship meets timeless design.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/products">
                    Shop Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="hero-outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:h-[calc(100vh-4rem)] animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent lg:hidden" />
              <img
                src={heroImage}
                alt="Modern minimalist living room with elegant home accessories"
                className="w-full h-full object-cover lg:rounded-l-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-background">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in creating products that bring simplicity and elegance to your everyday life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-secondary/50 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="section-spacing bg-secondary">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-2">Trending Now</h2>
              <p className="text-muted-foreground">Our most loved pieces this season</p>
            </div>
            <Button asChild variant="link" className="p-0">
              <Link to="/products" className="flex items-center gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of design enthusiasts who have simplified their homes with our curated collection.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/products">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
