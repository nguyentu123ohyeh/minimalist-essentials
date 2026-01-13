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

export const categories = ["All", "Lighting", "Cushions & Textiles", "Accents & Furniture", "Home Fragrance"];

export const products: Product[] = [
  {
    id: "1",
    name: "Long Spiral Crystal Chandelier",
    price: 332.00,
    image: "https://m.media-amazon.com/images/I/61FB8eIvv3L._AC_SX679_.jpg",
    category: "Lighting",
    description: "A breathtaking 12-light staircase chandelier designed for high ceilings. Features premium spiral crystals that create a stunning light play in foyers and grand entrances.",
    details: "Dimmable LED 2700K-6000K | Silver Chrome Finish | Adjustable Cable Length | High-Grade K9 Crystals",
    colors: ["Silver", "Clear"],
    images: [
      "https://m.media-amazon.com/images/I/61FB8eIvv3L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81QvUhZsdeL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71hRqxKNpGL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ltPbaeYiL._AC_SX679_.jpg"
    ]
  },
  {
    id: "2",
    name: "Modern LED Wall Sconce Set",
    price: 135.99,
    image: "https://m.media-amazon.com/images/I/61tRBDZjz5L._AC_SL1500_.jpg",
    category: "Lighting",
    description: "Set of two battery-powered wall sconces. Perfect for areas without hardwiring. Features remote control and timer functions for effortless ambiance.",
    details: "Battery Operated | Remote Control Included | Timer Function | Matte Black Finish | Easy Installation",
    colors: ["Black"],
    images: [
      "https://m.media-amazon.com/images/I/61tRBDZjz5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71QWM6Rx4bL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61TuG8Zm3dL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71yTAY9+yxL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "3",
    name: "Chrome Crystal Pendant Light",
    price: 232.16,
    image: "https://m.media-amazon.com/images/I/71X2DoDlOnL._AC_SL1500_.jpg",
    category: "Lighting",
    description: "Elegant 9-light chrome chandelier with brilliant crystals. Provides a 54W powerful dimmable glow, ideal for modern living rooms and luxury lobbies.",
    details: "54W LED | 6000K Color Temp | Dimmable | Chrome-Plated Stainless Steel | Dimensions: 24\" Diameter",
    colors: ["Chrome", "Clear"],
    images: [
      "https://m.media-amazon.com/images/I/71X2DoDlOnL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/711m2bAcYgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71wSonCrfSL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71glUSE1IHL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "4",
    name: "Natural Linen Ceiling Light",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/71zUWfk-kSL._AC_SL1500_.jpg",
    category: "Lighting",
    description: "A 15.7-inch recessed drum fixture featuring a high-quality natural linen shade. Softens light for a cozy atmosphere in bedrooms or hallways.",
    details: "UL-Certified | 3-Light Fixture | Natural Linen Material | Flush Mount Design | 15.7-inch Diameter",
    colors: ["Beige", "White"],
    images: [
      "https://m.media-amazon.com/images/I/71zUWfk-kSL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71BUqt9KGPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71laYlXMozL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71aR2+zA9WL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "5",
    name: "Smart RGBIC Floor Lamp 2",
    price: 159.99,
    image: "https://m.media-amazon.com/images/I/61X1OBENlqL._AC_SL1500_.jpg",
    category: "Lighting",
    description: "Next-gen smart floor lamp with RGBIC technology. Supports Matter and Alexa. Features music sync and 1725 lumens of customizable light for any scene.",
    details: "1725 Lumens | SmartThings & Matter Compatible | Music Sync Mode | Height: 60\" | Voice Control Enabled",
    colors: ["Black"],
    images: [
      "https://m.media-amazon.com/images/I/61X1OBENlqL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/614Ev4O7xFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71mPL-SVucL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71LcyAE9onL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "6",
    name: "Modern Gold Crystal Wall Sconce",
    price: 129.99,
    image: "https://m.media-amazon.com/images/I/71Ky0Q-0mGL._AC_SX679_.jpg",
    category: "Lighting",
    description: "An elegant vanity wall light fixture with a luxurious gold finish and precision-cut crystals. Transforms any hallway or bathroom into a royal space.",
    details: "Gold-Plated Base | Precision Cut Crystals | Indoor Rated | E26 Bulb Base | Elegant Vanity Design",
    colors: ["Gold", "Clear"],
    images: [
      "https://m.media-amazon.com/images/I/71Ky0Q-0mGL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71XgaVPJs1L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71YClNu5wVL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71JdpkPrISL._AC_SX679_.jpg"
    ]
  },
  {
    id: "7",
    name: "Matt Brass Track Lighting Kit",
    price: 36.99,
    image: "https://m.media-amazon.com/images/I/51PxIldFCXL._AC_SX679_.jpg",
    category: "Lighting",
    description: "Versatile 3-light track lighting kit with a sophisticated matte brass finish. Ideal for spotlighting art or task lighting in kitchens and living rooms.",
    details: "Matt Brass Finish | 3 Adjustable Spotlights | Flush Mount | Home Improvement Grade | Modern Design",
    colors: ["Brass"],
    images: [
      "https://m.media-amazon.com/images/I/51PxIldFCXL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/713NN+zv4BL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61DP89vXfyL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61m7FCxFOVL._AC_SX679_.jpg"
    ]
  },
  {
    id: "8",
    name: "Vintage Floral Linen Pillow Covers",
    price: 25.99,
    image: "https://m.media-amazon.com/images/I/81OuHu+uD3L._AC_SX679_.jpg",
    category: "Cushions & Textiles",
    description: "Set of two neutral floral vintage throw pillow covers. Adds a farmhouse boho touch to your sofa or bedroom with high-quality linen texture.",
    details: "18x18 Inches | Hidden Zipper | 100% Linen Blend | Machine Washable | Set of 2",
    colors: ["Light Brown", "Neutral"],
    sizes: ["18x18 Inch"],
    images: [
      "https://m.media-amazon.com/images/I/81OuHu+uD3L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/8197sBB9reL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91ZdlCOA6yL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81gjRkcs5uL._AC_SX679_.jpg"
    ]
  },
  {
    id: "9",
    name: "Brown Chenille Cushion Cases",
    price: 22.50,
    image: "https://m.media-amazon.com/images/I/81ceHto+n1L._AC_SX679_.jpg",
    category: "Cushions & Textiles",
    description: "Double-stitched brown chenille pillow covers. Modern and durable, these cases offer a soft, luxurious feel for any contemporary couch.",
    details: "18x18 Inches | Chenille Fabric | Double-Stitched Edges | Soft Texture | Modern Decor",
    colors: ["Brown"],
    sizes: ["18x18 Inch"],
    images: [
      "https://m.media-amazon.com/images/I/81ceHto+n1L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/710mF13zqyL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91CI8W36HsL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81C--uermOL._AC_SX679_.jpg"
    ]
  },
  {
    id: "10",
    name: "Olive Green Fringe Pillow Covers",
    price: 25.99,
    image: "https://m.media-amazon.com/images/I/91VW3YxqcoL._AC_SX679_.jpg",
    category: "Cushions & Textiles",
    description: "Boho farmhouse style cushion covers with elegant tassels. Made from soft linen, these olive green covers bring a cozy accent to your living space.",
    details: "18x18 Inches | Linen with Tassels | Boho Style | Hidden Zipper | Hand Wash Recommended",
    colors: ["Olive Green"],
    sizes: ["18x18 Inch"],
    images: [
      "https://m.media-amazon.com/images/I/91VW3YxqcoL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81lHWpNVJzL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91BPQxtfoJL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91TwukS5I2L._AC_SX679_.jpg"
    ]
  },
  {
    id: "11",
    name: "Ultra Soft Faux Fur Throw",
    price: 49.99,
    image: "https://m.media-amazon.com/images/I/81LF56IxupL._AC_SX679_.jpg",
    category: "Cushions & Textiles",
    description: "Thick bubble-textured luxury faux fur blanket. Extremely fluffy and warm, perfect for snuggling on the couch or adding texture to your bedding.",
    details: "50x60 Inches | Faux Fur Material | Plush Bubble Texture | Hypoallergenic | Cream White",
    colors: ["Cream White"],
    sizes: ["50x60 Inches"],
    images: [
      "https://m.media-amazon.com/images/I/81LF56IxupL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81+Nxnkd+7L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81mhkkG+MGL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ZRtUVV9wL._AC_SX679_.jpg"
    ]
  },
  {
    id: "12",
    name: "Natural Beige Check Pillow Covers",
    price: 20.99,
    image: "https://m.media-amazon.com/images/I/818lQdU5RUL._AC_SX679_.jpg",
    category: "Cushions & Textiles",
    description: "Set of two vintage-style check pattern pillow covers. Neutral natural beige tones that fit perfectly into farmhouse or modern boho homes.",
    details: "20x20 Inches | Linen-Look Fabric | Checked Pattern | Durable Zipper | Set of 2",
    colors: ["Natural Beige"],
    sizes: ["20x20 Inch"],
    images: [
      "https://m.media-amazon.com/images/I/818lQdU5RUL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81z7GUsp9tL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81X3vrMKhXL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81SBHe8evnL._AC_SX679_.jpg"
    ]
  },
  {
    id: "13",
    name: "Tufted Accent Chair with Ottoman",
    price: 168.99,
    image: "https://m.media-amazon.com/images/I/71CTwEOP-oL._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Luxury beige tufted lounge chair featuring an adjustable backrest and matching ottoman. The ultimate reading nook centerpiece for a modern living room.",
    details: "Beige Linen Upholstery | Adjustable Backrest | Footrest Included | Solid Wood Legs | High-Density Foam",
    colors: ["Beige"],
    images: [
      "https://m.media-amazon.com/images/I/71CTwEOP-oL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71shkhMuleL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81NwlTo2O3L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71-h4eEN+CL._AC_SX679_.jpg"
    ]
  },
  {
    id: "14",
    name: "6-Tier Tree Bookshelf Tower",
    price: 52.99,
    image: "https://m.media-amazon.com/images/I/71xZCVrnrYL._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "A narrow, space-saving tree-shaped bookcase with a built-in storage cabinet and integrated LED light. Perfect for organizing small spaces with a rustic flair.",
    details: "Rustic Brown Finish | 6-Tier Design | LED Light Feature | Narrow Tower Shape | MDF Wood & Metal",
    colors: ["Rustic Brown"],
    images: [
      "https://m.media-amazon.com/images/I/71xZCVrnrYL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71JUQJcVznL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Vq5v8HreL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/711Zj9EQ4VL._AC_SX679_.jpg"
    ]
  },
  {
    id: "15",
    name: "Mid-Century Modern Arm Chair",
    price: 149.99,
    image: "https://m.media-amazon.com/images/I/71S+SX4iA5L._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Classic mid-century modern lounge chair with a solid wood frame and soft beige linen cushions. Includes a matching throw pillow for extra comfort.",
    details: "Solid Oak Frame | Linen Fabric | Removable Cushions | Weight Capacity: 300 lbs | Easy Assembly",
    colors: ["Beige", "Natural Wood"],
    images: [
      "https://m.media-amazon.com/images/I/71S+SX4iA5L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/614nCpO8gmL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71cm31qrYhL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51F09GSuOvL._AC_SX679_.jpg"
    ]
  },
  {
    id: "16",
    name: "Industrial Round End Table",
    price: 23.99,
    image: "https://m.media-amazon.com/images/I/81TbO7iVVzL._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Compact 3-tier round accent table with a vintage industrial look. Fits perfectly as a bedside stand or side table in small living areas.",
    details: "3-Tier Storage | Industrial Metal Frame | Rustic Brown Top | Height: 24\" | Non-Slip Feet",
    colors: ["Rustic Brown", "Black"],
    images: [
      "https://m.media-amazon.com/images/I/81TbO7iVVzL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61J+oT8frSL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81gRwuFDWUL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81ruCRcMzoL._AC_SX679_.jpg"
    ]
  },
  {
    id: "17",
    name: "C-Shaped Couch Side Tables",
    price: 59.82,
    image: "https://m.media-amazon.com/images/I/61OEFfRH3+L._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Set of two C-shaped tray tables that slide under your sofa. Convenient for holding laptops, snacks, or coffee while relaxing on the couch.",
    details: "Set of 2 | C-Shaped Design | Slide-Under Feature | Steel Frame | Waterproof Top",
    colors: ["Rustic Brown"],
    images: [
      "https://m.media-amazon.com/images/I/61OEFfRH3+L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71kvVO2lHNL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81kxN7VRrAL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/8176MTjvEAL._AC_SX679_.jpg"
    ]
  },
  {
    id: "18",
    name: "Modern Metal Frame Armchair",
    price: 109.99,
    image: "https://m.media-amazon.com/images/I/71XATi8y8kL._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Sleek modern armchair featuring a robust metal frame and warm wooden armrests. The soft beige cushion provides a comfortable seat for reading.",
    details: "Black Metal Frame | Wood Armrests | Soft Linen Cushion | Modern Silhouette | Weight Capacity: 250 lbs",
    colors: ["Beige", "Black"],
    images: [
      "https://m.media-amazon.com/images/I/71XATi8y8kL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ixh6+S92L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81az+WCcXfL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Qbt-nJVEL._AC_SX679_.jpg"
    ]
  },
  {
    id: "19",
    name: "Green Velvet Lounge Chair Set",
    price: 168.99,
    image: "https://m.media-amazon.com/images/I/91vTSlmXsYL._AC_SX679_.jpg",
    category: "Accents & Furniture",
    description: "Vibrant olive green tufted lounge chair with a matching ottoman. Featuring an adjustable backrest for customized comfort and reclining.",
    details: "Olive Green Velvet | Tufted Design | Includes Ottoman | High-Strength Reclining Gear | Soft Touch",
    colors: ["Green"],
    images: [
      "https://m.media-amazon.com/images/I/91vTSlmXsYL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81j5y6zeklL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91bQUfi4U-L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81iysXjUDRL._AC_SX679_.jpg"
    ]
  },
  {
    id: "20",
    name: "Luxury Crystal Reed Diffuser",
    price: 39.90,
    image: "https://m.media-amazon.com/images/I/71yKQLQDS3L._AC_SY879_.jpg",
    category: "Home Fragrance",
    description: "Grand 700ml luxury reed diffuser housed in a stunning crystal bottle. Elegantly eliminates odors while serving as a high-end decorative piece.",
    details: "Volume: 700ml | Crystal Glass Bottle | Natural Fiber Reeds | Long-Lasting Scent | Gift Box Included",
    colors: ["Clear Crystal"],
    images: [
      "https://m.media-amazon.com/images/I/71yKQLQDS3L._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/612fPAMQZdL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71Qm3RVp16L._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/81KNrTX9BSL._AC_SY879_.jpg"
    ]
  },
  {
    id: "21",
    name: "Flower Scented Diffuser Set",
    price: 22.99,
    image: "https://m.media-amazon.com/images/I/61jA4+JFmCL._AC_SX679_.jpg",
    category: "Home Fragrance",
    description: "Fragrant floral reed diffuser set providing up to 120 days of continuous scent. Includes 7 premium sticks and a minimalist aesthetic bottle.",
    details: "Volume: 7.1 oz | 120 Days Duration | 7 Fiber Sticks | Floral Scent Notes | Minimalist Design",
    colors: ["Clear", "Natural Wood"],
    images: [
      "https://m.media-amazon.com/images/I/61jA4+JFmCL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71CuVOE3oLL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71M5ietXpwL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71EtwaSQ9CL._AC_SX679_.jpg"
    ]
  },
  {
    id: "22",
    name: "Day Dream Black Glass Diffuser",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/61sBMGUbRWL._AC_SX679_.jpg",
    category: "Home Fragrance",
    description: "Sophisticated black glass reed diffuser featuring the signature 'Day Dream' scent. A sleek addition to any modern office or bathroom.",
    details: "Volume: 100ml | Black Tinted Glass | Includes 120ml Refill | Premium Reed Sticks | Bold Aesthetic",
    colors: ["Black"],
    images: [
      "https://m.media-amazon.com/images/I/61sBMGUbRWL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71TN-+sVrgL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51YkvdXUhWL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71QP-pvTUFL._AC_SX679_.jpg"
    ]
  },
  {
    id: "23",
    name: "Masculine Hyacinth & Citrus Diffuser",
    price: 11.38,
    image: "https://m.media-amazon.com/images/I/81gDG50Q6eL._AC_SX679_.jpg",
    category: "Home Fragrance",
    description: "A unique blend of hyacinth, peony, and citrus with a deeper, more masculine profile. Perfect for offices and personal workspaces.",
    details: "Volume: 3.7 Oz (110ml) | 6 Reed Sticks | Aromatherapy Grade Oil | Compact Bottle | Fresh Citrus Notes",
    colors: ["Clear"],
    images: [
      "https://m.media-amazon.com/images/I/81gDG50Q6eL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71nq4uYwldL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Dqi0geckL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/8106ob1ii7L._AC_SX679_.jpg"
    ]
  },
  {
    id: "24",
    name: "Balsam Fir Scented Oil Diffuser",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/81KDm41PmML._AC_SL1500_.jpg",
    category: "Home Fragrance",
    description: "Bring the outdoors in with this Balsam Fir scented diffuser. Includes decorative flower-tipped sticks for a charming shelf-decor look.",
    details: "Volume: 4.0 fl oz | Balsam Fir Scent | Flower-Tipped Reeds | Essential Oil Blend | Forest Fresh",
    colors: ["Natural Wood", "Forest Green Accent"],
    images: [
      "https://m.media-amazon.com/images/I/81KDm41PmML._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61XXQ53E1EL._AC_SL1148_.jpg",
      "https://m.media-amazon.com/images/I/81acIPzPmgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/718MGEr4YqL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "25",
    name: "Satin Rose Reed Diffuser",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/816YUnUOpfL._AC_SX679_.jpg",
    category: "Home Fragrance",
    description: "A soft and romantic satin rose fragrance. This diffuser set is designed to provide a delicate floral aroma to bathrooms and bedrooms.",
    details: "Satin Rose Scent | High-Absorption Sticks | Decorative Glass Bottle | Ideal for Gifting | Shelf Decor Ready",
    colors: ["Pink Tinge", "Clear"],
    images: [
      "https://m.media-amazon.com/images/I/816YUnUOpfL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81DbqNAlgzL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71OlweagorL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71cNNnbdtBL._AC_SX679_.jpg"
    ]
  },
  {
    id: "26",
    name: "Lily & Jasmine Diffuser Trio",
    price: 17.89,
    image: "https://m.media-amazon.com/images/I/61q5bEjuqVL._AC_SX679_.jpg",
    category: "Home Fragrance",
    description: "Set of 3 mini diffusers including Lily & Jasmine, White Tea, and Amber. An amazing way to experience different high-end scents throughout your home.",
    details: "3 x 50ml Bottles | Includes 15 Sticks | Multiple Scents | Perfect for Travel or Small Rooms | Elegant Packaging",
    colors: ["Clear"],
    images: [
      "https://m.media-amazon.com/images/I/61q5bEjuqVL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81zZQb1ZNsL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ICd2xT7mL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71tKyD-2pnL._AC_SX679_.jpg"
    ]
  }
];

export const colorOptions = ["Cream", "White", "Sand", "Amber", "Ivory", "Oatmeal", "Grey", "Natural Oak", "Walnut"];
