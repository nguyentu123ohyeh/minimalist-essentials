import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container-page section-spacing text-center pt-32">
          <h1 className="font-serif text-3xl text-foreground mb-4">Product not found</h1>
          <Link to="/products" className="text-primary link-underline">
            Back to products
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== id).slice(0, 4);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} x${quantity} has been added to your cart.`,
    });
  };

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="pt-28 pb-8">
        <div className="container-page">
          <nav className="flex items-center text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="mx-3">/</span>
            <Link to="/products" className="hover:text-foreground transition-colors">
              Products
            </Link>
            <span className="mx-3">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="container-page pb-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Images */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-6 gap-4">
              {/* Thumbnails */}
              <div className="col-span-1 flex flex-col gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-foreground" : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="col-span-5 aspect-[3/4] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-3">
                  {product.category}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl text-foreground">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Color — {product.colors[selectedColor]}
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(index)}
                      className={`px-6 py-3 text-xs uppercase tracking-widest border transition-all ${
                        selectedColor === index
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              {product.sizes && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                    Size — {product.sizes[selectedSize]}
                  </p>
                  <div className="flex gap-3">
                    {product.sizes.map((size, index) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(index)}
                        className={`px-6 py-3 text-xs uppercase tracking-widest border transition-all ${
                          selectedSize === index
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-16 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button onClick={handleAddToCart} size="lg" className="w-full">
                <ShoppingBag className="h-5 w-5 mr-3" />
                Add to Cart
              </Button>

              {/* Details */}
              <div className="pt-8 border-t border-border">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Details
                </p>
                <p className="text-sm text-muted-foreground">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-secondary py-32">
        <div className="container-page">
          <h2 className="font-serif text-3xl text-foreground mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((product) => (
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
        </div>
      </section>
    </Layout>
  );
}
