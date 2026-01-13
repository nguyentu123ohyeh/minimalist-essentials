import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 500]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, priceRange]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setPriceRange([0, 100]);
  };

  const hasActiveFilters = selectedCategory !== "All" || priceRange[0] > 0 || priceRange[1] < 100;

  return (
    <Layout>
      {/* Hero Header */}
      <section className="min-h-[40vh] flex items-end pt-32 pb-12">
        <div className="container-page w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Collection
              </p>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground">
                All Products
              </h1>
            </div>
            <p className="text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container-page py-8 border-y border-border">
        <div className="flex flex-wrap items-center gap-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-colors rounded-full ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Price Range */}
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              ${priceRange[0]} — ${priceRange[1]}
            </span>
            <div className="w-32">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={500}
                step={5}
              />
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs uppercase tracking-widest"
            >
              <X className="h-3 w-3 mr-2" />
              Clear
            </Button>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="container-page section-spacing">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-serif text-xl">No products found</p>
            <Button variant="link" onClick={clearFilters} className="mt-4">
              Clear all filters
            </Button>
          </div>
        )}
      </section>
    </Layout>
  );
}
