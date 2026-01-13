import productVase from "@/assets/product-vase.jpg";
import productCandle from "@/assets/product-candle.jpg";
import productBlanket from "@/assets/product-blanket.jpg";
import productOrganizer from "@/assets/product-organizer.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  details: string;
  colors: string[];
  sizes?: string[];
  images: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ceramic Minimal Vase",
    price: 49.00,
    image: productVase,
    category: "Decor",
    description: "Hand-crafted ceramic vase with a smooth matte finish. Perfect for dried flowers or as a standalone decorative piece.",
    details: "Material: High-quality ceramic | Dimensions: 8\" H x 4\" W | Care: Wipe with dry cloth",
    colors: ["Cream", "White", "Sand"],
    images: [productVase, productVase, productVase],
  },
  {
    id: "2",
    name: "Lake Scented Candle",
    price: 32.00,
    image: productCandle,
    category: "Home Fragrance",
    description: "A calming blend of fresh water, eucalyptus, and subtle woody notes. Burns for up to 45 hours.",
    details: "Weight: 8 oz | Burn Time: 45 hours | Ingredients: Natural soy wax, essential oils",
    colors: ["Amber", "Clear"],
    images: [productCandle, productCandle, productCandle],
  },
  {
    id: "3",
    name: "Chunky Knit Throw",
    price: 89.00,
    image: productBlanket,
    category: "Textiles",
    description: "Luxuriously soft chunky knit throw blanket. Adds warmth and texture to any living space.",
    details: "Material: 100% Cotton | Dimensions: 50\" x 60\" | Care: Machine wash cold",
    colors: ["Ivory", "Oatmeal", "Grey"],
    sizes: ["Standard", "Large"],
    images: [productBlanket, productBlanket, productBlanket],
  },
  {
    id: "4",
    name: "Oak Desk Organizer",
    price: 65.00,
    image: productOrganizer,
    category: "Organization",
    description: "Beautifully crafted desk organizer in natural oak. Features multiple compartments for a tidy workspace.",
    details: "Material: Solid Oak | Dimensions: 6\" H x 10\" W x 4\" D | Care: Dust regularly",
    colors: ["Natural Oak", "Walnut"],
    images: [productOrganizer, productOrganizer, productOrganizer],
  },
];

export const categories = ["All", "Decor", "Home Fragrance", "Textiles", "Organization"];

export const colorOptions = ["Cream", "White", "Sand", "Amber", "Ivory", "Oatmeal", "Grey", "Natural Oak", "Walnut"];
