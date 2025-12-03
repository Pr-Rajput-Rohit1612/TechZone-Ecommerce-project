const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const Product = require('../models/Product');
const Product = require("./models/Product");

const connectDB = require('./config/db');


dotenv.config();
connectDB();

const products = [
  // ELECTRONICS - 40 Products
  {
    id: 1,
    title: "Samsung Galaxy S23 Ultra 5G",
    price: 1199.99,
    description: "Premium flagship smartphone with 200MP camera, S Pen support, and powerful Snapdragon processor. Features a stunning 6.8-inch Dynamic AMOLED display.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
    rating: { rate: 4.8, count: 543 }
  },
  {
    id: 2,
    title: "Apple MacBook Pro 14-inch M3",
    price: 1999.99,
    description: "Revolutionary laptop with M3 chip, Liquid Retina XDR display, and up to 22 hours battery life. Perfect for professionals and creators.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    rating: { rate: 4.9, count: 892 }
  },
  {
    id: 3,
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: 399.99,
    description: "Industry-leading noise canceling headphones with exceptional sound quality, 30-hour battery life, and premium comfort for all-day wear.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    rating: { rate: 4.7, count: 1203 }
  },
  {
    id: 4,
    title: "Canon EOS R6 Mark II Camera",
    price: 2499.99,
    description: "Professional mirrorless camera with 24.2MP full-frame sensor, 40fps continuous shooting, and advanced autofocus system for stunning photography.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    rating: { rate: 4.9, count: 387 }
  },
  {
    id: 5,
    title: "iPad Pro 12.9-inch M2",
    price: 1099.99,
    description: "Ultimate iPad experience with M2 chip, stunning Liquid Retina XDR display, and support for Apple Pencil and Magic Keyboard.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    rating: { rate: 4.8, count: 675 }
  },
  {
    id: 6,
    title: "Dell XPS 15 Laptop",
    price: 1799.99,
    description: "Premium laptop with Intel Core i7, NVIDIA RTX graphics, 15.6-inch 4K display, and sleek aluminum design for professionals.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
    rating: { rate: 4.6, count: 432 }
  },
  {
    id: 7,
    title: "Bose QuietComfort Earbuds II",
    price: 299.99,
    description: "Premium wireless earbuds with world-class noise cancellation, personalized sound, and secure comfortable fit for all-day listening.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1590658165737-15a047b7a4e8?w=500",
    rating: { rate: 4.5, count: 789 }
  },
  {
    id: 8,
    title: "LG 55-inch OLED Smart TV",
    price: 1499.99,
    description: "Stunning 4K OLED TV with perfect blacks, vibrant colors, webOS platform, and support for Dolby Vision and Atmos for cinematic experience.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    rating: { rate: 4.8, count: 521 }
  },
  {
    id: 9,
    title: "Google Pixel 8 Pro",
    price: 999.99,
    description: "AI-powered smartphone with exceptional camera system, Google Tensor G3 chip, and pure Android experience with guaranteed updates.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    rating: { rate: 4.7, count: 634 }
  },
  {
    id: 10,
    title: "Nintendo Switch OLED",
    price: 349.99,
    description: "Enhanced gaming console with vibrant 7-inch OLED screen, improved audio, and play anywhere versatility for the ultimate gaming experience.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500",
    rating: { rate: 4.8, count: 1456 }
  },
  {
    id: 11,
    title: "Amazon Echo Dot 5th Gen",
    price: 49.99,
    description: "Compact smart speaker with Alexa, improved sound quality, and smart home control for a connected lifestyle.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500",
    rating: { rate: 4.4, count: 2341 }
  },
  {
    id: 12,
    title: "Logitech MX Master 3S Mouse",
    price: 99.99,
    description: "Premium wireless mouse with precision tracking, customizable buttons, and ergonomic design for professional productivity.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    rating: { rate: 4.7, count: 876 }
  },
  {
    id: 13,
    title: "Samsung 32-inch 4K Monitor",
    price: 449.99,
    description: "Professional display with UHD resolution, HDR10 support, and USB-C connectivity for creators and professionals.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    rating: { rate: 4.6, count: 543 }
  },
  {
    id: 14,
    title: "Kindle Paperwhite Signature Edition",
    price: 189.99,
    description: "Premium e-reader with 6.8-inch glare-free display, wireless charging, adjustable warm light, and waterproof design.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500",
    rating: { rate: 4.8, count: 1234 }
  },
  {
    id: 15,
    title: "DJI Mini 3 Pro Drone",
    price: 759.99,
    description: "Compact drone with 4K camera, intelligent flight modes, extended battery life, and obstacle avoidance for stunning aerial photography.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
    rating: { rate: 4.7, count: 432 }
  },
  {
    id: 16,
    title: "Asus ROG Gaming Laptop",
    price: 1899.99,
    description: "High-performance gaming laptop with RTX 4070, AMD Ryzen 9, 165Hz display, and advanced cooling for intense gaming sessions.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    rating: { rate: 4.8, count: 567 }
  },
  {
    id: 17,
    title: "Fitbit Charge 6",
    price: 159.99,
    description: "Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and 7-day battery life for comprehensive health insights.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
    rating: { rate: 4.5, count: 923 }
  },
  {
    id: 18,
    title: "GoPro HERO12 Black",
    price: 399.99,
    description: "Rugged action camera with 5.3K video, HyperSmooth stabilization, waterproof design, and voice control for adventure enthusiasts.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?w=500",
    rating: { rate: 4.7, count: 678 }
  },
  {
    id: 19,
    title: "Razer BlackWidow V4 Keyboard",
    price: 229.99,
    description: "Premium mechanical gaming keyboard with customizable RGB, programmable keys, and tactile switches for competitive gaming.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
    rating: { rate: 4.6, count: 432 }
  },
  {
    id: 20,
    title: "Anker PowerCore 26800mAh",
    price: 65.99,
    description: "High-capacity portable charger with fast charging, multiple USB ports, and enough power to charge phones multiple times.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    rating: { rate: 4.5, count: 1876 }
  },
  {
    id: 21,
    title: "Apple AirPods Pro 2nd Gen",
    price: 249.99,
    description: "Premium wireless earbuds with active noise cancellation, spatial audio, and MagSafe charging case for Apple ecosystem users.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
    rating: { rate: 4.8, count: 2134 }
  },
  {
    id: 22,
    title: "Roku Streaming Stick 4K",
    price: 49.99,
    description: "Compact streaming device with 4K HDR support, voice remote, and access to thousands of channels for endless entertainment.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500",
    rating: { rate: 4.6, count: 1543 }
  },
  {
    id: 23,
    title: "Sony PlayStation 5",
    price: 499.99,
    description: "Next-gen gaming console with ultra-fast SSD, ray tracing, 4K gaming at 120fps, and exclusive game titles.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500",
    rating: { rate: 4.9, count: 3421 }
  },
  {
    id: 24,
    title: "Nikon Z6 III Mirrorless Camera",
    price: 2499.99,
    description: "Professional full-frame camera with 24.5MP sensor, 4K video, advanced autofocus, and weather-sealed body.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
    rating: { rate: 4.8, count: 234 }
  },
  {
    id: 25,
    title: "Microsoft Surface Pro 9",
    price: 1299.99,
    description: "Versatile 2-in-1 laptop with Intel Core i7, 13-inch PixelSense display, and all-day battery for mobile professionals.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500",
    rating: { rate: 4.6, count: 543 }
  },
  {
    id: 26,
    title: "JBL Flip 6 Bluetooth Speaker",
    price: 129.99,
    description: "Portable waterproof speaker with powerful sound, 12-hour battery, and durable design for outdoor adventures.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    rating: { rate: 4.7, count: 1234 }
  },
  {
    id: 27,
    title: "Wacom Intuos Pro Tablet",
    price: 379.99,
    description: "Professional graphics tablet with 8192 pressure levels, multi-touch support, and wireless connectivity for digital artists.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500",
    rating: { rate: 4.7, count: 432 }
  },
  {
    id: 28,
    title: "TP-Link WiFi 6 Router",
    price: 199.99,
    description: "High-speed mesh router with WiFi 6 technology, gigabit ports, and coverage for large homes up to 3000 sq ft.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=500",
    rating: { rate: 4.5, count: 876 }
  },
  {
    id: 29,
    title: "Ring Video Doorbell Pro 2",
    price: 249.99,
    description: "Smart doorbell with 1536p HD video, 3D motion detection, and two-way talk for enhanced home security.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500",
    rating: { rate: 4.6, count: 1098 }
  },
  {
    id: 30,
    title: "Seagate 5TB External Hard Drive",
    price: 129.99,
    description: "High-capacity portable storage with USB 3.0, automatic backup software, and compact design for data protection.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
    rating: { rate: 4.6, count: 2341 }
  },
  {
    id: 31,
    title: "Oculus Quest 3 VR Headset",
    price: 499.99,
    description: "Advanced VR headset with mixed reality capabilities, improved graphics, and wireless freedom for immersive experiences.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500",
    rating: { rate: 4.7, count: 876 }
  },
  {
    id: 32,
    title: "Fujifilm Instax Mini 12",
    price: 79.99,
    description: "Instant camera with automatic exposure, selfie mode, and fun filters for capturing memories instantly.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    rating: { rate: 4.5, count: 1543 }
  },
  {
    id: 33,
    title: "Sonos Beam Gen 2 Soundbar",
    price: 449.99,
    description: "Compact smart soundbar with Dolby Atmos, voice control, and seamless integration with streaming services.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500",
    rating: { rate: 4.8, count: 654 }
  },
  {
    id: 34,
    title: "HP OfficeJet Pro 9025e Printer",
    price: 279.99,
    description: "All-in-one wireless printer with fast printing, scanning, copying, and mobile printing for home offices.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500",
    rating: { rate: 4.4, count: 432 }
  },
  {
    id: 35,
    title: "Elgato Stream Deck",
    price: 149.99,
    description: "Customizable control panel with LCD keys for streamers, creators, and professionals to boost productivity.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500",
    rating: { rate: 4.7, count: 567 }
  },
  {
    id: 36,
    title: "Corsair K95 RGB Gaming Keyboard",
    price: 199.99,
    description: "Premium mechanical keyboard with Cherry MX switches, per-key RGB, and dedicated media controls for gamers.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    rating: { rate: 4.6, count: 789 }
  },
  {
    id: 37,
    title: "Tile Pro Bluetooth Tracker",
    price: 34.99,
    description: "Powerful Bluetooth tracker with 400ft range, replaceable battery, and water resistance to find your belongings.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500",
    rating: { rate: 4.3, count: 1876 }
  },
  {
    id: 38,
    title: "Garmin Forerunner 265",
    price: 449.99,
    description: "Advanced GPS running watch with AMOLED display, training metrics, and long battery life for serious athletes.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
    rating: { rate: 4.8, count: 543 }
  },
  {
    id: 39,
    title: "Belkin 3-in-1 Wireless Charger",
    price: 149.99,
    description: "MagSafe charging station for iPhone, Apple Watch, and AirPods with sleek design and fast charging.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1591290619762-c588f3e1c0da?w=500",
    rating: { rate: 4.6, count: 876 }
  },
  {
    id: 40,
    title: "Synology 2-Bay NAS DiskStation",
    price: 299.99,
    description: "Network storage solution with RAID support, cloud backup, and multimedia streaming for home and office.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
    rating: { rate: 4.7, count: 321 }
  },

  // MEN'S CLOTHING - 40 Products
  {
    id: 41,
    title: "Levi's 511 Slim Fit Jeans",
    price: 69.99,
    description: "Classic slim fit jeans with stretch denim, timeless style, and comfortable fit for everyday wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    rating: { rate: 4.7, count: 1543 }
  },
  {
    id: 63,
    title: "Speedo Swim Trunks",
    price: 39.99,
    description: "Quick-dry swim shorts with elastic waistband, mesh lining, and chlorine-resistant fabric for pool or beach.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500",
    rating: { rate: 4.5, count: 876 }
  },
  {
    id: 64,
    title: "Sperry Boat Shoes",
    price: 89.99,
    description: "Classic deck shoes with leather upper, non-marking rubber outsole, and 360-degree lacing system.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500",
    rating: { rate: 4.6, count: 654 }
  },
  {
    id: 65,
    title: "J.Crew Cable Knit Sweater",
    price: 98.99,
    description: "Classic wool sweater with cable knit pattern, ribbed trim, and comfortable crew neck design.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
    rating: { rate: 4.5, count: 432 }
  },
  {
    id: 66,
    title: "Fossil Leather Belt",
    price: 44.99,
    description: "Genuine leather belt with metal buckle, classic design, and durable construction for everyday wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583c2?w=500",
    rating: { rate: 4.4, count: 1098 }
  },
  {
    id: 67,
    title: "New Balance 574 Sneakers",
    price: 84.99,
    description: "Retro running shoes with ENCAP midsole, suede and mesh upper, and comfortable all-day wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500",
    rating: { rate: 4.6, count: 1876 }
  },
  {
    id: 68,
    title: "Arc'teryx Beta Jacket",
    price: 549.99,
    description: "Premium waterproof shell jacket with Gore-Tex fabric, helmet-compatible hood, and mountain-ready features.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=500",
    rating: { rate: 4.9, count: 321 }
  },
  {
    id: 69,
    title: "Old Navy Henley Shirt",
    price: 24.99,
    description: "Casual henley with button placket, soft cotton fabric, and relaxed fit for everyday comfort.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=500",
    rating: { rate: 4.3, count: 2341 }
  },
  {
    id: 70,
    title: "Reebok Classic Leather Sneakers",
    price: 74.99,
    description: "Timeless sneakers with soft garment leather, lightweight EVA midsole, and retro styling.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500",
    rating: { rate: 4.5, count: 1234 }
  },
  {
    id: 71,
    title: "Express Slim Fit Dress Pants",
    price: 88.99,
    description: "Modern dress pants with stretch fabric, flat front design, and tailored slim fit for professional wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
    rating: { rate: 4.4, count: 543 }
  },
  {
    id: 72,
    title: "Quicksilver Board Shorts",
    price: 54.99,
    description: "Performance surf shorts with quick-dry fabric, secure pocket, and comfortable stretch fit.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
    rating: { rate: 4.6, count: 876 }
  },
  {
    id: 73,
    title: "Guess Denim Jacket",
    price: 118.99,
    description: "Classic denim jacket with button closure, chest pockets, and vintage wash for casual style.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=500",
    rating: { rate: 4.5, count: 654 }
  },
  {
    id: 74,
    title: "Dockers Comfort Stretch Shirt",
    price: 49.99,
    description: "Wrinkle-free dress shirt with stretch fabric, button-down collar, and professional styling.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
    rating: { rate: 4.4, count: 765 }
  },
  {
    id: 75,
    title: "Skechers Memory Foam Shoes",
    price: 64.99,
    description: "Comfortable walking shoes with air-cooled memory foam, mesh fabric, and slip-on design.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    rating: { rate: 4.5, count: 1987 }
  },
  {
    id: 76,
    title: "Lacoste Croc Logo Polo",
    price: 98.99,
    description: "Premium polo shirt with iconic crocodile logo, petit piqué cotton, and ribbed collar.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
    rating: { rate: 4.7, count: 876 }
  },
  {
    id: 77,
    title: "Wrangler Cargo Shorts",
    price: 39.99,
    description: "Durable cargo shorts with multiple pockets, relaxed fit, and comfortable cotton blend fabric.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
    rating: { rate: 4.4, count: 1234 }
  },
  {
    id: 78,
    title: "Kenneth Cole Dress Shoes",
    price: 124.99,
    description: "Formal leather oxford shoes with cushioned insole, classic cap toe, and polished finish.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500",
    rating: { rate: 4.5, count: 432 }
  },
  {
    id: 79,
    title: "Uniqlo Heattech Long Sleeve",
    price: 29.99,
    description: "Thermal base layer with heat-generating fabric, moisture-wicking properties, and slim fit.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=500",
    rating: { rate: 4.6, count: 2134 }
  },
  {
    id: 80,
    title: "Oakley Sport Sunglasses",
    price: 178.99,
    description: "Performance sunglasses with Prizm lens technology, lightweight frame, and secure grip for sports.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
    rating: { rate: 4.7, count: 654 }
  },

  // WOMEN'S CLOTHING - 40 Products
  {
    id: 81,
    title: "Lululemon Align Leggings",
    price: 98.99,
    description: "Buttery-soft yoga leggings with high waist, four-way stretch, and naked sensation fabric for ultimate comfort.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500",
    rating: { rate: 4.8, count: 3214 }
  },
  {
    id: 82,
    title: "Zara Floral Midi Dress",
    price: 79.99,
    description: "Elegant midi dress with floral print, flowing fabric, and flattering silhouette for special occasions.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    rating: { rate: 4.6, count: 1876 }
  },
  {
    id: 83,
    title: "Nike Air Max 270 Women's",
    price: 159.99,
    description: "Stylish sneakers with visible Air cushioning, breathable mesh upper, and all-day comfort.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    rating: { rate: 4.7, count: 2134 }
  },
  {
    id: 84,
    title: "Free People Oversized Sweater",
    price: 128.99,
    description: "Cozy oversized sweater with ribbed knit, dropped shoulders, and boho-chic styling.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500",
    rating: { rate: 4.5, count: 876 }
  },
  {
    id: 85,
    title: "Madewell High-Rise Jeans",
    price: 128.99,
    description: "Classic denim jeans with high waist, vintage wash, and comfortable stretch fit.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    rating: { rate: 4.6, count: 1543 }
  },
  {
    id: 86,
    title: "Athleta Sports Bra",
    price: 54.99,
    description: "High-support sports bra with moisture-wicking fabric, adjustable straps, and breathable design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=500",
    rating: { rate: 4.7, count: 1234 }
  },
  {
    id: 87,
    title: "Anthropologie Embroidered Blouse",
    price: 118.99,
    description: "Bohemian blouse with intricate embroidery, relaxed fit, and feminine details.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500",
    rating: { rate: 4.5, count: 654 }
  },
  {
    id: 88,
    title: "Steve Madden Ankle Boots",
    price: 99.99,
    description: "Trendy ankle boots with block heel, side zipper, and versatile design for any outfit.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    rating: { rate: 4.6, count: 1987 }
  },
  {
    id: 89,
    title: "Reformation Wrap Dress",
    price: 218.99,
    description: "Sustainable wrap dress with flattering cut, flowy fabric, and eco-friendly materials.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    rating: { rate: 4.7, count: 876 }
  },
  {
    id: 90,
    title: "Victoria's Secret Push-Up Bra",
    price: 54.99,
    description: "Comfortable push-up bra with adjustable straps, underwire support, and smooth finish.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1583846112427-dac876a7ab90?w=500",
    rating: { rate: 4.5, count: 2341 }
  },
  {
    id: 91,
    title: "Patagonia Better Sweater Fleece",
    price: 139.99,
    description: "Cozy fleece jacket with quarter-zip, sweater-knit face, and eco-friendly construction.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500",
    rating: { rate: 4.8, count: 765 }
  },
  {
    id: 92,
    title: "Everlane The Day Heel",
    price: 145.99,
    description: "Comfortable pumps with cushioned insole, Italian leather, and timeless design for work or events.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    rating: { rate: 4.6, count: 543 }
  },
  {
    id: 93,
    title: "Aerie Offline Leggings",
    price: 54.99,
    description: "High-waisted workout leggings with pockets, squat-proof fabric, and comfortable compression.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500",
    rating: { rate: 4.7, count: 1876 }
  },
  {
    id: 94,
    title: "H&M Satin Cami Top",
    price: 24.99,
    description: "Silky camisole with adjustable straps, elegant drape, and versatile styling options.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
    rating: { rate: 4.4, count: 1234 }
  },
  {
    id: 95,
    title: "Columbia Rain Jacket",
    price: 89.99,
    description: "Waterproof rain jacket with breathable fabric, adjustable hood, and packable design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500",
    rating: { rate: 4.6, count: 876 }
  },
  {
    id: 96,
    title: "Spanx Faux Leather Leggings",
    price: 98.99,
    description: "Sleek faux leather leggings with high waist, comfortable stretch, and slimming design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500",
    rating: { rate: 4.7, count: 2134 }
  },
  {
    id: 97,
    title: "Gap Crewneck Sweatshirt",
    price: 44.99,
    description: "Classic sweatshirt with soft fleece lining, ribbed trim, and relaxed comfortable fit.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    rating: { rate: 4.5, count: 1543 }
  },
  {
    id: 98,
    title: "Adidas Cloudfoam Slides",
    price: 29.99,
    description: "Comfortable slides with contoured footbed, soft cushioning, and quick-dry design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500",
    rating: { rate: 4.6, count: 2341 }
  },
  {
    id: 99,
    title: "Banana Republic Trench Coat",
    price: 198.99,
    description: "Classic trench coat with water-resistant fabric, belt tie, and timeless sophisticated style.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
    rating: { rate: 4.7, count: 654 }
  },
  {
    id: 100,
    title: "Levi's 501 Original Jeans",
    price: 98.99,
    description: "Iconic straight-leg jeans with button fly, classic fit, and authentic denim styling.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    rating: { rate: 4.6, count: 1987 }
  },
  {
    id: 101,
    title: "Puma Training Shorts",
    price: 34.99,
    description: "Athletic shorts with moisture-wicking fabric, elastic waistband, and comfortable fit for workouts.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
    rating: { rate: 4.5, count: 876 }
  },
  {
    id: 102,
    title: "Forever 21 Crop Top",
    price: 14.99,
    description: "Trendy crop top with ribbed fabric, stretchy material, and casual everyday style.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
    rating: { rate: 4.3, count: 1234 }
  },
  {
    id: 103,
    title: "Sam Edelman Loraine Loafers",
    price: 119.99,
    description: "Classic loafers with gold-tone hardware, cushioned insole, and sophisticated preppy style.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    rating: { rate: 4.6, count: 765 }
  },
  {
    id: 104,
    title: "J.Crew V-Neck Sweater",
    price: 89.99,
    description: "Soft merino wool sweater with classic v-neck, ribbed trim, and versatile styling.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500",
    rating: { rate: 4.5, count: 543 }
  },
  {
    id: 105,
    title: "Target Universal Thread Jeans",
    price: 29.99,
    description: "Affordable high-rise jeans with stretch denim, comfortable fit, and modern styling.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    rating: { rate: 4.4, count: 2134 }
  },
  {
    id: 106,
    title: "Outdoor Voices Exercise Dress",
    price: 98.99,
    description: "Versatile athletic dress with built-in shorts, moisture-wicking fabric, and sporty design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    rating: { rate: 4.6, count: 432 }
  },
  {
    id: 107,
    title: "Coach Leather Tote Bag",
    price: 295.99,
    description: "Luxury tote bag with pebbled leather, multiple compartments, and iconic brand styling.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
    rating: { rate: 4.8, count: 654 }
  },
  {
    id: 108,
    title: "Vans Slip-On Sneakers",
    price: 59.99,
    description: "Classic canvas slip-on shoes with elastic side accents, padded collar, and iconic styling.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    rating: { rate: 4.7, count: 1876 }
  },
  {
    id: 109,
    title: "Ann Taylor Blazer",
    price: 149.99,
    description: "Professional blazer with tailored fit, notched lapels, and sophisticated work-ready design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500",
    rating: { rate: 4.5, count: 765 }
  },
  {
    id: 110,
    title: "Under Armour Tank Top",
    price: 29.99,
    description: "Performance tank with HeatGear fabric, racerback design, and moisture-wicking technology.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
    rating: { rate: 4.6, count: 1234 }
  },
  {
    id: 111,
    title: "Tory Burch Miller Sandals",
    price: 228.99,
    description: "Designer sandals with iconic logo medallion, leather upper, and comfortable cushioned footbed.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500",
    rating: { rate: 4.7, count: 1543 }
  },
  {
    id: 112,
    title: "Mango Linen Pants",
    price: 59.99,
    description: "Breezy linen pants with relaxed fit, elastic waist, and effortless summer styling.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
    rating: { rate: 4.4, count: 876 }
  },
  {
    id: 113,
    title: "Express Portofino Shirt",
    price: 64.99,
    description: "Versatile button-up blouse with roll-tab sleeves, relaxed fit, and professional styling.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500",
    rating: { rate: 4.5, count: 1098 }
  },
  {
    id: 114,
    title: "Allbirds Tree Runners",
    price: 98.99,
    description: "Sustainable sneakers with eucalyptus tree fiber, comfortable fit, and eco-friendly design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    rating: { rate: 4.6, count: 1234 }
  },
  {
    id: 115,
    title: "Asos Satin Slip Dress",
    price: 54.99,
    description: "Elegant slip dress with cowl neckline, bias-cut design, and luxurious satin fabric.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    rating: { rate: 4.5, count: 876 }
  },
  {
    id: 116,
    title: "New Balance 327 Sneakers",
    price: 99.99,
    description: "Retro-inspired sneakers with oversized N logo, suede and nylon upper, and trail-inspired sole.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    rating: { rate: 4.7, count: 654 }
  },
  {
    id: 117,
    title: "Nordstrom Signature Cashmere Sweater",
    price: 298.99,
    description: "Luxurious pure cashmere sweater with crew neck, soft hand feel, and timeless design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500",
    rating: { rate: 4.8, count: 432 }
  },
  {
    id: 118,
    title: "Calvin Klein Underwear Set",
    price: 42.99,
    description: "Comfortable underwear set with cotton-blend fabric, elastic band, and modern logo design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1583846112427-dac876a7ab90?w=500",
    rating: { rate: 4.6, count: 1987 }
  },
  {
    id: 119,
    title: "Birkenstock Arizona Sandals",
    price: 99.99,
    description: "Classic two-strap sandals with contoured footbed, adjustable buckles, and all-day comfort.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500",
    rating: { rate: 4.7, count: 2341 }
  },
  {
    id: 120,
    title: "Uniqlo Heattech Leggings",
    price: 19.99,
    description: "Thermal leggings with heat-generating fabric, stretchy fit, and moisture-wicking properties.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500",
    rating: { rate: 4.5, count: 2134 }
  },

  // JEWELERY - 35 Products
  {
    id: 121,
    title: "Pandora Moments Charm Bracelet",
    price: 75.99,
    description: "Classic sterling silver bracelet with iconic clasp, perfect for collecting charms and creating personal stories.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500",
    rating: { rate: 4.7, count: 1876 }
  },
  {
    id: 122,
    title: "Swarovski Crystal Necklace",
    price: 119.99,
    description: "Elegant necklace featuring genuine Swarovski crystals, rhodium plating, and sparkling design for special occasions.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
    rating: { rate: 4.8, count: 1234 }
  },
  {
    id: 123,
    title: "14K Gold Stud Earrings",
    price: 149.99,
    description: "Classic round brilliant-cut cubic zirconia studs set in solid 14K yellow gold with screw backs.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
    rating: { rate: 4.9, count: 2341 }
  },
  {
    id: 124,
    title: "Tiffany & Co. Heart Tag Bracelet",
    price: 295.99,
    description: "Iconic sterling silver bracelet with heart tag charm, toggle clasp, and luxury brand craftsmanship.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500",
    rating: { rate: 4.8, count: 876 }
  },
  {
    id: 125,
    title: "Diamond Tennis Bracelet",
    price: 899.99,
    description: "Stunning tennis bracelet with lab-created diamonds, 18K white gold plating, and secure clasp.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500",
    rating: { rate: 4.9, count: 543 }
  },
  {
    id: 126,
    title: "Kate Spade Bow Earrings",
    price: 58.99,
    description: "Playful bow-shaped stud earrings with enamel coating, gold-tone finish, and signature styling.",
    category: "jewelery",
    image: "https://images.unsplash.com/://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    rating: { rate: 4.6, count: 1543 }
  },
  {
    id: 42,
    title: "Nike Dri-FIT Training T-Shirt",
    price: 29.99,
    description: "Performance athletic shirt with moisture-wicking fabric, comfortable fit, and breathable design for workouts.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    rating: { rate: 4.5, count: 2134 }
  },
  {
    id: 43,
    title: "Ralph Lauren Polo Shirt",
    price: 89.99,
    description: "Classic polo shirt with signature logo, premium cotton fabric, and timeless preppy style.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500",
    rating: { rate: 4.7, count: 876 }
  },
  {
    id: 44,
    title: "Adidas Ultraboost 23 Running Shoes",
    price: 189.99,
    description: "Premium running shoes with Boost cushioning, Primeknit upper, and continental rubber outsole for ultimate comfort.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    rating: { rate: 4.8, count: 1987 }
  },
  {
    id: 45,
    title: "The North Face Fleece Jacket",
    price: 149.99,
    description: "Warm fleece jacket with zip pockets, breathable fabric, and versatile design for outdoor activities.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    rating: { rate: 4.6, count: 654 }
  },
  {
    id: 46,
    title: "Calvin Klein Cotton Boxer Briefs 3-Pack",
    price: 42.99,
    description: "Comfortable underwear set with stretch cotton, elastic waistband, and classic logo design.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1617126406976-c1f0f5a27a45?w=500",
    rating: { rate: 4.5, count: 3214 }
  },
  {
    id: 47,
    title: "Tommy Hilfiger Bomber Jacket",
    price: 179.99,
    description: "Stylish bomber jacket with signature colors, ribbed cuffs, and comfortable fit for casual wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    rating: { rate: 4.4, count: 432 }
  },
  {
    id: 48,
    title: "Under Armour Athletic Shorts",
    price: 34.99,
    description: "Lightweight training shorts with moisture-wicking fabric, elastic waistband, and side pockets.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
    rating: { rate: 4.6, count: 1234 }
  },
  {
    id: 49,
    title: "Timberland Classic Work Boots",
    price: 189.99,
    description: "Durable waterproof boots with premium leather, padded collar, and rubber lug outsole for rugged wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500",
    rating: { rate: 4.7, count: 876 }
  },
  {
    id: 50,
    title: "Gap Essential Chinos",
    price: 59.99,
    description: "Classic chino pants with straight fit, soft cotton fabric, and versatile style for work or casual wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
    rating: { rate: 4.5, count: 1098 }
  },
  {
    id: 51,
    title: "Columbia Hiking Pants",
    price: 74.99,
    description: "Technical hiking pants with UPF 50 protection, water-resistant fabric, and multiple pockets for outdoor adventures.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
    rating: { rate: 4.6, count: 543 }
  },
  {
    id: 52,
    title: "H&M Slim Fit Suit Blazer",
    price: 129.99,
    description: "Modern suit blazer with notched lapels, two-button closure, and sleek silhouette for formal occasions.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
    rating: { rate: 4.3, count: 432 }
  },
  {
    id: 53,
    title: "Patagonia Down Sweater Jacket",
    price: 229.99,
    description: "Lightweight insulated jacket with recycled down, water-resistant shell, and packable design.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500",
    rating: { rate: 4.8, count: 765 }
  },
  {
    id: 54,
    title: "Carhartt Workwear Jacket",
    price: 99.99,
    description: "Rugged work jacket with heavy-duty canvas, multiple pockets, and reinforced stitching for durability.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1544923246-77307dd8aa14?w=500",
    rating: { rate: 4.7, count: 654 }
  },
  {
    id: 55,
    title: "Banana Republic Dress Shirt",
    price: 79.99,
    description: "Classic dress shirt with wrinkle-resistant fabric, tailored fit, and professional styling.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
    rating: { rate: 4.4, count: 876 }
  },
  {
    id: 56,
    title: "Vans Old Skool Sneakers",
    price: 64.99,
    description: "Iconic skate shoes with canvas and suede upper, padded collar, and signature side stripe design.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    rating: { rate: 4.6, count: 2341 }
  },
  {
    id: 57,
    title: "Puma Track Jacket",
    price: 69.99,
    description: "Retro-style track jacket with full zip, side pockets, and signature logo for athletic casual wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    rating: { rate: 4.5, count: 543 }
  },
  {
    id: 58,
    title: "Brooks Brothers Oxford Shirt",
    price: 98.99,
    description: "Premium button-down shirt with non-iron fabric, traditional fit, and timeless oxford weave.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
    rating: { rate: 4.6, count: 432 }
  },
  {
    id: 59,
    title: "Champion Reverse Weave Hoodie",
    price: 74.99,
    description: "Classic hoodie with heavyweight fleece, kangaroo pocket, and iconic C logo for comfort and style.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    rating: { rate: 4.7, count: 1876 }
  },
  {
    id: 60,
    title: "Docker's Khaki Pants",
    price: 54.99,
    description: "Versatile khaki pants with stain defender, comfort waistband, and classic straight fit.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
    rating: { rate: 4.4, count: 1234 }
  },
  {
    id: 61,
    title: "Ray-Ban Wayfarer Sunglasses",
    price: 153.99,
    description: "Iconic sunglasses with acetate frame, crystal lenses, and 100% UV protection in timeless design.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    rating: { rate: 4.8, count: 2134 }
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany({});

    await Product.insertMany(products);

    console.log("✅ Products Seeded Successfully!");
    process.exit(); 
  } catch (err) {
    console.error("❌ Error seeding products:", err);
    process.exit(1);
  }
}

seed();