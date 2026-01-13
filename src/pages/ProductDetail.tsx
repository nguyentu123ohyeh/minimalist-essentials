import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Minus, Plus, MessageSquare } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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

  // Chuyển hướng sang trang Contact
  const handleContactUs = () => {
    navigate("/contact");
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

      {/* Product Details Section */}
      <section className="container-page pb-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          
          {/* LEFT: Images */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-6 gap-4">
              {/* Thumbnails */}
              <div className="col-span-1 flex flex-col gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all bg-secondary/10 ${
                      selectedImage === index 
                        ? "border-foreground" 
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index}`}
                      className="w-full h-full object-contain p-1" 
                    />
                  </button>
                ))}
              </div>
              
              {/* Main Image - Fixed to contain full image */}
              <div className="col-span-5 aspect-[3/4] rounded-2xl overflow-hidden bg-secondary/20 flex items-center justify-center border border-border/50">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] mb-4">
                  {product.category}
                </p>
                <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-2xl font-medium text-foreground">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base">
                {product.description}
              </p>

              {/* Color Selection */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Color — <span className="text-foreground">{product.colors[selectedColor]}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(index)}
                      className={`px-5 py-2 text-[10px] uppercase tracking-[0.2em] border transition-all ${
                        selectedColor === index
                          ? "border-foreground bg-foreground text-background font-bold"
                          : "border-border text-muted-foreground hover:border-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Quantity</p>
                <div className="inline-flex items-center border border-border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* ACTION BUTTON: CONTACT US */}
              <div className="pt-4">
                <Button 
                  onClick={handleContactUs} 
                  size="lg" 
                  className="w-full h-14 rounded-full uppercase tracking-[0.2em] text-[10px] font-bold"
                >
                  <MessageSquare className="h-4 w-4 mr-3" />
                  Contact Us
                </Button>
                <p className="text-[10px] text-center text-muted-foreground mt-4 uppercase tracking-[0.15em]">
                  Secure Inquiry — Response within 24 hours
                </p>
              </div>

              {/* Product Specifications */}
              <div className="pt-8 border-t border-border">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Specifications
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  {product.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="bg-secondary/10 py-24 border-t border-border/50">
        <div className="container-page">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">You May Also Like</h2>
            <Link to="/products" className="text-xs uppercase tracking-widest link-underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
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