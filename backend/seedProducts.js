const mongoose = require('mongoose');
const Product = require("./models/Product");
require("dotenv").config();



/*

const products = [
  // 👇  150+ products 
  
  // ---------- 1 to 10 ----------
  {
    title: "Mens Cotton Henley T-Shirt",
    price: 22.99,
    description: "Soft cotton henley t-shirt ideal for comfort.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    rating: { rate: 4.3, count: 420 }
  },
  {
    title: "Mens Slim Fit Hoodie",
    price: 34.99,
    description: "Lightweight hoodie with premium cotton fabric.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    rating: { rate: 4.4, count: 310 }
  },
  {
    title: "Mens Full Sleeve Stripe Shirt",
    price: 27.49,
    description: "Full sleeve shirt with elegant stripe pattern.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1520974735194-eecdfd6c1d1d",
    rating: { rate: 4.2, count: 275 }
  },
  {
    title: "Mens Khaki Chino Pants",
    price: 31.99,
    description: "Stylish chinos suitable for formal occasions.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8ba",
    rating: { rate: 4.4, count: 350 }
  },
  {
    title: "Mens Classic Jeans Jacket",
    price: 59.0,
    description: "Iconic denim jacket with rugged finishing.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    rating: { rate: 4.7, count: 510 }
  },
  {
    title: "Mens Basic Crew Neck Tee",
    price: 14.99,
    description: "High-quality crew-neck t-shirt.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
    rating: { rate: 4.1, count: 230 }
  },
  {
    title: "Mens Wool Sweatshirt",
    price: 38.5,
    description: "Warm sweatshirt made with blended wool.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1602810318383-e3a7d6a4f60d",
    rating: { rate: 4.5, count: 410 }
  },
  {
    title: "Mens Sleeveless Training Tank",
    price: 16.49,
    description: "Stretchable tank top ideal for workouts.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1594634732983-ea38c49d6065",
    rating: { rate: 4.3, count: 220 }
  },
  {
    title: "Mens Gym Shorts",
    price: 21.99,
    description: "Comfortable shorts with breathable fabric.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1620241585952-85f975f27f50",
    rating: { rate: 4.4, count: 310 }
  },
  {
    title: "Mens Winter Parka",
    price: 89.99,
    description: "Heavy-duty winter parka with insulated lining.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1546005363-9f6304aba0e1",
    rating: { rate: 4.8, count: 510 }
  },

  // ---------- 11 to 20 (Women's Clothing) ----------
  {
    title: "Women's Cotton Kurti",
    price: 24.99,
    description: "Elegant cotton kurti with floral design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1520975990871-2245f8c4e5c2",
    rating: { rate: 4.5, count: 450 }
  },
  {
    title: "Women's Sleeveless Top",
    price: 17.49,
    description: "Soft fabric sleeveless casual top.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1542038821-6c5a24cc6e8b",
    rating: { rate: 4.3, count: 230 }
  },
  {
    title: "Women's Wool Cardigan",
    price: 44.99,
    description: "Warm cardigan for winter comfort.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573",
    rating: { rate: 4.7, count: 540 }
  },
  {
    title: "Women's Capri Pants",
    price: 20.99,
    description: "Daily wear capri with modern fitting.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    rating: { rate: 4.3, count: 210 }
  },
  {
    title: "Women's High Waist Jeans",
    price: 34.99,
    description: "Slim-fit high waist denim jeans.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b09b52",
    rating: { rate: 4.4, count: 300 }
  },
  {
    title: "Women's Floral Maxi Dress",
    price: 48.5,
    description: "Beautiful floral maxi dress for casual events.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    rating: { rate: 4.7, count: 430 }
  },
  {
    title: "Women's Hoodie Jacket",
    price: 39.99,
    description: "Trendy hoodie jacket for winter wear.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    rating: { rate: 4.5, count: 390 }
  },
  {
    title: "Women's Summer Shorts",
    price: 18.49,
    description: "Lightweight shorts for summer comfort.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1582587225018-5a40a0b1a1e7",
    rating: { rate: 4.3, count: 260 }
  },
  {
    title: "Women's Classic Denim Jacket",
    price: 54.99,
    description: "Premium denim jacket with amazing fit.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1503342250614-ca440786c096",
    rating: { rate: 4.8, count: 530 }
  },
  {
    title: "Women's Cotton Leggings",
    price: 16.99,
    description: "Soft and stretchable leggings.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1612178995722-f1c36b0a02a5",
    rating: { rate: 4.2, count: 180 }
  },

  // ---------- 21 to 35 (Electronics) ----------
  {
    title: "Wireless Bluetooth Headset",
    price: 49.99,
    description: "Bluetooth headset with deep bass.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1518444021430-3f80d07b31f2",
    rating: { rate: 4.4, count: 640 }
  },
  {
    title: "Smart 4K LED TV",
    price: 399.99,
    description: "Ultra HD 4K television with smart features.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d4",
    rating: { rate: 4.7, count: 900 }
  },
  {
    title: "Gaming Keyboard RGB",
    price: 82.49,
    description: "Mechanical RGB keyboard for gamers.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    rating: { rate: 4.6, count: 760 }
  },
  {
    title: "Smart Fitness Band",
    price: 34.99,
    description: "Fitness band with heart rate monitor.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    rating: { rate: 4.3, count: 870 }
  },
  {
    title: "Wireless Portable Speaker",
    price: 26.99,
    description: "Mini Bluetooth speaker with high-quality sound.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
    rating: { rate: 4.4, count: 550 }
  },
  {
    title: "Noise Cancelling Earbuds",
    price: 55.99,
    description: "Earbuds with active noise cancellation.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf5f9d442b1",
    rating: { rate: 4.6, count: 780 }
  },
  {
    title: "1080p Security Camera",
    price: 45.99,
    description: "Full HD security camera with night mode.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598514982846-e7c1b757bc67",
    rating: { rate: 4.3, count: 410 }
  },
  {
    title: "Wireless Game Controller",
    price: 32.49,
    description: "Ergonomic controller for PC & Mobile.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648",
    rating: { rate: 4.6, count: 690 }
  },
  {
    title: "Smart Home Speaker",
    price: 44.99,
    description: "AI-powered smart home speaker.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1512445239394-7f0c2afbe7df",
    rating: { rate: 4.5, count: 630 }
  },
  {
    title: "LED Desk Lamp",
    price: 19.99,
    description: "Adjustable LED desk lamp.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1512445239394-7f0c2afbe7df",
    rating: { rate: 4.4, count: 320 }
  },
  {
    title: "Laptop Cooling Pad",
    price: 27.99,
    description: "Cooling pad with dual fans.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606811853554-e206575b44a5",
    rating: { rate: 4.3, count: 480 }
  },
  {
    title: "High Speed Router",
    price: 38.99,
    description: "WiFi router with dual band speed.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1619682814305-fbc1752c778d",
    rating: { rate: 4.4, count: 520 }
  },
  {
    title: "Computer Webcam HD",
    price: 25.49,
    description: "HD webcam with stereo mic.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598514982846-e7c1b757bc67",
    rating: { rate: 4.3, count: 330 }
  },
  {
    title: "Bluetooth Neckband",
    price: 19.99,
    description: "Bluetooth neckband with long battery.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1511391481032-96e5f2f2f9c5",
    rating: { rate: 4.2, count: 510 }
  },

  // ---------- 36 to 50 (Jewelry) ----------
  {
    title: "Gold Plated Necklace",
    price: 49.99,
    description: "Elegant gold plated necklace.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    rating: { rate: 4.7, count: 310 }
  },
  {
    title: "Silver Pendant Chain",
    price: 22.99,
    description: "Stylish silver pendant for daily wear.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643476790-2f34f79e3cfe",
    rating: { rate: 4.5, count: 280 }
  },
  {
    title: "Diamond Earrings",
    price: 129.99,
    description: "Premium diamond finish earrings.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7",
    rating: { rate: 4.9, count: 410 }
  },
  {
    title: "Silver Bracelet",
    price: 29.99,
    description: "Trendy bracelet with modern finish.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    rating: { rate: 4.6, count: 260 }
  },
  {
    title: "Diamond Choker",
    price: 189.99,
    description: "Premium diamond choker necklace.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    rating: { rate: 4.9, count: 540 }
  },
  {
    title: "Gold Finger Ring",
    price: 44.99,
    description: "Golden ring with stylish design.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10",
    rating: { rate: 4.7, count: 330 }
  },
  {
    title: "Silver Pearl Earrings",
    price: 26.49,
    description: "Elegant earrings with pearl design.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1516631642985-5a7b8dfd3ee8",
    rating: { rate: 4.6, count: 280 }
  },
  {
    title: "Gold Bangles Set",
    price: 54.49,
    description: "Traditional gold plated bangles.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1617030570812-395c8e94eacd",
    rating: { rate: 4.7, count: 310 }
  },
  {
    title: "Crystal Pendant",
    price: 32.99,
    description: "Beautiful crystal pendant for party wear.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a460f74c",
    rating: { rate: 4.5, count: 240 }
  },
  {
    title: "Silver Toe Ring",
    price: 14.99,
    description: "Minimalist silver toe ring.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1556228834-5ff1bd1d56c5",
    rating: { rate: 4.3, count: 210 }
  },

  // ---------- 51 to 99  (Mixed Products) ----------
  {
    title: "Mens Slim Fit Kurta",
    price: 28.99,
    description: "Elegant kurta for festive events.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1514315384763-ba401779410f",
    rating: { rate: 4.6, count: 380 }
  },
  {
    title: "Mens Track Pants",
    price: 22.99,
    description: "Daily wear track pants with soft fabric.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1552345387-249b0af1b63e",
    rating: { rate: 4.4, count: 310 }
  },
  {
    title: "Mens Printed Oversized Tee",
    price: 19.99,
    description: "Trendy oversized printed T-shirt.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
    rating: { rate: 4.5, count: 450 }
  },
  {
    title: "Women's Stylish Shrug",
    price: 27.49,
    description: "Lightweight shrug for layering.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1602810318144-683bbdf231a4",
    rating: { rate: 4.4, count: 290 }
  },
  {
    title: "Women's Cotton Anarkali",
    price: 52.99,
    description: "Beautiful anarkali for festive wear.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1615461066153-4313758863d8",
    rating: { rate: 4.7, count: 430 }
  },
  {
    title: "Women's Trendy Jeans",
    price: 33.49,
    description: "Slim-fit fashionable denim jeans.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b09b52",
    rating: { rate: 4.5, count: 350 }
  },
  {
    title: "Wireless Earbuds Pro",
    price: 69.99,
    description: "Premium wireless earbuds with ANC.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf5f9d442b1",
    rating: { rate: 4.8, count: 920 }
  },
  {
    title: "Bluetooth Soundbar",
    price: 119.99,
    description: "Powerful soundbar with subwoofer.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
    rating: { rate: 4.6, count: 760 }
  },
  {
    title: "Laptop Stand Adjustable",
    price: 29.49,
    description: "Ergonomic laptop stand.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1601288496920-3f5d76e95d85",
    rating: { rate: 4.5, count: 550 }
  },
  {
    title: "Silver Heart Necklace",
    price: 21.99,
    description: "Cute silver heart necklace.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    rating: { rate: 4.4, count: 230 }
  },
  {
    title: "Gold Designer Earrings",
    price: 28.49,
    description: "Designer earrings with gold finish.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a460f74c",
    rating: { rate: 4.6, count: 320 }
  },
  {
    title: "Silver Crown Ring",
    price: 14.99,
    description: "Minimal crown-shaped silver ring.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10",
    rating: { rate: 4.3, count: 200 }
  },
  {
    title: "Mens Stylish Sunglasses",
    price: 19.99,
    description: "UV-protected sunglasses for men.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1542038821-6c5a24cc6e8b",
    rating: { rate: 4.5, count: 410 }
  },
  {
    title: "Women's Fashion Sunglasses",
    price: 18.99,
    description: "Trendy sunglasses for daily use.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1580435125253-ac3b0f6b8d24",
    rating: { rate: 4.4, count: 310 }
  },
  {
    title: "Men’s Sports Watch",
    price: 45.99,
    description: "Digital sports watch with multiple features.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    rating: { rate: 4.7, count: 670 }
  },
  {
    title: "Women's Analog Watch",
    price: 39.99,
    description: "Elegant analog watch with leather strap.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1507682226856-1d1f61d23f60",
    rating: { rate: 4.6, count: 520 }
  },
  {
    title: "Gold Crystal Bracelet",
    price: 25.99,
    description: "Premium bracelet with crystal stones.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    rating: { rate: 4.6, count: 270 }
  },
  {
    title: "Silver Stud Earrings",
    price: 13.99,
    description: "Minimal silver stud earrings.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7",
    rating: { rate: 4.3, count: 230 }
  },
  {
    title: "Men’s Leather Belt",
    price: 21.49,
    description: "Genuine leather belt with metal buckle.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1620241585952-85f975f27f50",
    rating: { rate: 4.5, count: 330 }
  },
  {
    title: "Women's Leather Handbag",
    price: 59.49,
    description: "Premium handbag with ample storage.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    rating: { rate: 4.8, count: 520 }
  },
  {
    title: "Mini Bluetooth Speaker",
    price: 17.99,
    description: "Pocket-size speaker with clear sound.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
    rating: { rate: 4.3, count: 310 }
  }
,
  // 5th array 
  {
    title: "Mens Round Neck Cotton Tee",
    price: 17.99,
    description: "Soft round-neck t-shirt made from pure cotton.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1521572164169-1a1a1a1a1a1a",
    rating: { rate: 4.2, count: 320 }
  },
  {
    title: "Mens Full Sleeve Sweatshirt",
    price: 34.99,
    description: "Warm and stylish sweatshirt for casual outings.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    rating: { rate: 4.5, count: 480 }
  },
  {
    title: "Mens Office Wear Shirt",
    price: 29.99,
    description: "Classy office-wear shirt with wrinkle-free fabric.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1520974735194-eecdfd6c1d1d",
    rating: { rate: 4.3, count: 260 }
  },
  {
    title: "Mens Printed Summer Shirt",
    price: 24.49,
    description: "Casual printed shirt perfect for beach vibes.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00",
    rating: { rate: 4.4, count: 380 }
  },
  {
    title: "Mens Cargo Pants",
    price: 39.99,
    description: "Durable cargo pants with multiple pockets.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8ba",
    rating: { rate: 4.6, count: 540 }
  },

  {
    title: "Women's Elegant Maxi Dress",
    price: 43.99,
    description: "Flowy and elegant maxi dress perfect for events.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1520975990871-2245f8c4e5c2",
    rating: { rate: 4.7, count: 630 }
  },
  {
    title: "Women's Slim Fit Denim",
    price: 33.99,
    description: "Stretchable slim-fit blue denim.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b09b52",
    rating: { rate: 4.5, count: 320 }
  },
  {
    title: "Women's Party Wear Gown",
    price: 69.5,
    description: "Luxurious party gown with amazing fit.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    rating: { rate: 4.8, count: 500 }
  },
  {
    title: "Women's Casual Capri",
    price: 19.99,
    description: "Comfortable cotton capri for everyday wear.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    rating: { rate: 4.4, count: 210 }
  },
  {
    title: "Women's Stylish Hoodie",
    price: 37.99,
    description: "Trendy hoodie made with premium fleece.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    rating: { rate: 4.6, count: 410 }
  },

  {
    title: "Bluetooth Home Theater Speakers",
    price: 129.99,
    description: "High bass surround sound with Bluetooth support.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
    rating: { rate: 4.7, count: 930 }
  },
  {
    title: "USB Type-C Power Bank 20000mAh",
    price: 29.99,
    description: "Fast charging power bank with dual ports.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1586386470640-fd51a8070c4d",
    rating: { rate: 4.5, count: 780 }
  },
  {
    title: "Tablet 10-inch Full HD",
    price: 189.99,
    description: "Latest tablet with high-resolution display.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1519741497220-87f87b3d16c1",
    rating: { rate: 4.4, count: 640 }
  },
  {
    title: "Portable Bluetooth Speaker Mini",
    price: 17.99,
    description: "Handy pocket-sized speaker with deep bass.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
    rating: { rate: 4.3, count: 713 }
  },
  {
    title: "Wireless Charging Pad",
    price: 15.99,
    description: "Fast-charging wireless pad for all devices.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa7",
    rating: { rate: 4.4, count: 570 }
  },

  {
    title: "Gold Plated Pendant Necklace",
    price: 49.99,
    description: "Stylish pendant with gold plating.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1556228834-5ff1bd1d56c5",
    rating: { rate: 4.7, count: 310 }
  },
  {
    title: "Silver Pearl Ring",
    price: 25.99,
    description: "Beautiful silver ring with pearl gemstone.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10",
    rating: { rate: 4.5, count: 210 }
  },
  {
    title: "Gold Stud Earrings",
    price: 32.49,
    description: "Elegant gold stud earrings ideal for gifting.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a460f74c",
    rating: { rate: 4.6, count: 320 }
  },
  {
    title: "Silver Ankle Bracelet",
    price: 27.99,
    description: "Trendy ankle bracelet with silver finish.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    rating: { rate: 4.5, count: 198 }
  },
  {
    title: "Diamond Finish Necklace Set",
    price: 159.99,
    description: "Premium diamond-finish necklace set.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    rating: { rate: 4.9, count: 430 }
  },

  // --- Remaining 30 Products ---

  {
    title: "Mens Sports Vest",
    price: 14.99,
    description: "Breathable vest ideal for workouts.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1594634732983-ea38c49d6065",
    rating: { rate: 4.2, count: 260 }
  },
  {
    title: "Mens Winter Jacket",
    price: 69.99,
    description: "Warm winter jacket with soft lining.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1546005363-9f6304aba0e1",
    rating: { rate: 4.6, count: 440 }
  },
  {
    title: "Mens Polo T-Shirt",
    price: 23.49,
    description: "Classic polo tee with premium fabric.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    rating: { rate: 4.3, count: 330 }
  },
  {
    title: "Mens Casual Shorts",
    price: 19.49,
    description: "Comfortable casual shorts for daily wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8ba",
    rating: { rate: 4.4, count: 280 }
  },
  {
    title: "Mens Breathable Gym T-Shirt",
    price: 21.99,
    description: "Gym T-shirt with sweat-wicking technology.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
    rating: { rate: 4.5, count: 510 }
  },

  {
    title: "Women's Floral Shirt",
    price: 25.99,
    description: "Pretty floral shirt with soft fabric.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    rating: { rate: 4.6, count: 450 }
  },
  {
    title: "Women's Casual Midi Dress",
    price: 28.49,
    description: "Comfortable midi dress for casual outings.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1522336572461-4b24a0a506ed",
    rating: { rate: 4.3, count: 300 }
  },
  {
    title: "Women's Jeans Jacket",
    price: 52.99,
    description: "Trendy jeans jacket perfect for styling.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1519741497220-87f87b3d16c1",
    rating: { rate: 4.7, count: 420 }
  },
  {
    title: "Women's Yoga Leggings",
    price: 22.99,
    description: "Stretchable leggings ideal for yoga sessions.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
    rating: { rate: 4.5, count: 390 }
  },
  {
    title: "Women's Lightweight Raincoat",
    price: 33.99,
    description: "Portable lightweight raincoat for monsoon.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1581655352732-dc0c00aa9b51",
    rating: { rate: 4.4, count: 310 }
  },

  {
    title: "Portable Power Speaker",
    price: 49.99,
    description: "Portable stereo speaker with enhanced bass.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
    rating: { rate: 4.5, count: 780 }
  },
  {
    title: "USB-C Fast Charger",
    price: 14.99,
    description: "Fast charger compatible with all Type-C devices.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1589739901594-7d539ef7a7e0",
    rating: { rate: 4.3, count: 530 }
  },
  {
    title: "Wireless Game Controller",
    price: 29.99,
    description: "Ergonomic game controller for PC & Mobile.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648",
    rating: { rate: 4.6, count: 690 }
  },
  {
    title: "HD Web Camera 1080p",
    price: 32.49,
    description: "Webcam with noise-cancelling mic and clear video.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598514982846-e7c1b757bc67",
    rating: { rate: 4.4, count: 480 }
  },
  {
    title: "LED Desk Lamp",
    price: 18.99,
    description: "LED lamp with adjustable brightness.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1512445239394-7f0c2afbe7df",
    rating: { rate: 4.5, count: 310 }
  },

  {
    title: "Gold Pearl Pendant",
    price: 35.99,
    description: "Beautiful gold-plated pendant with pearl.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a460f74c",
    rating: { rate: 4.7, count: 280 }
  },
  {
    title: "Silver Minimalist Bracelet",
    price: 19.99,
    description: "Elegant minimalist bracelet for daily wear.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    rating: { rate: 4.5, count: 190 }
  },
  {
    title: "Gold Crystal Earrings",
    price: 27.99,
    description: "Shiny crystal earrings with gold accents.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1516631642985-5a7b8dfd3ee8",
    rating: { rate: 4.6, count: 260 }
  },
  {
    title: "Diamond Finish Bracelet",
    price: 85.99,
    description: "Premium bracelet with diamond finish stones.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1556228834-5ff1bd1d56c5",
    rating: { rate: 4.8, count: 370 }
  },
  {
    title: "Silver Stud Earrings",
    price: 14.99,
    description: "Cute silver studs suitable for everyday use.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7",
    rating: { rate: 4.3, count: 210 }
  },
  // 4th array 
  {
    title: "Mens Cotton Half Sleeve Shirt",
    price: 21.99,
    description: "Breathable cotton shirt perfect for summers.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
    rating: { rate: 4.2, count: 390 }
  },
  {
    title: "Mens Waterproof Windbreaker",
    price: 49.5,
    description: "Lightweight windbreaker suitable for trekking.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    rating: { rate: 4.6, count: 530 }
  },
  {
    title: "Mens Slim Fit Denim Jeans",
    price: 32.99,
    description: "Stylish slim-fit blue denim jeans.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
    rating: { rate: 4.3, count: 460 }
  },
  {
    title: "Mens Stylish Pullover",
    price: 34.99,
    description: "Warm pullover made with soft wool.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1602810318383-e3a7d6a4f60d",
    rating: { rate: 4.5, count: 240 }
  },
  {
    title: "Mens Rock Climbing Jacket",
    price: 69.99,
    description: "Durable jacket designed for outdoor sports.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1581655352732-dc0c00aa9b51",
    rating: { rate: 4.7, count: 680 }
  },

  {
    title: "Women's Sleeveless Cotton Top",
    price: 18.99,
    description: "Soft cotton sleeveless top for daily comfort.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1542038821-6c5a24cc6e8b",
    rating: { rate: 4.3, count: 370 }
  },
  {
    title: "Women's Checked Shirt",
    price: 27.5,
    description: "Classic checked shirt in soft fabric.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    rating: { rate: 4.5, count: 420 }
  },
  {
    title: "Women's Premium Winter Coat",
    price: 95.99,
    description: "Elegant long winter coat for extreme cold.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1514315384763-ba401779410f",
    rating: { rate: 4.8, count: 550 }
  },
  {
    title: "Women's Ribbed Sweater",
    price: 36.99,
    description: "Stylish ribbed sweater made of soft wool.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573",
    rating: { rate: 4.4, count: 291 }
  },
  {
    title: "Women's Linen Palazzo Pants",
    price: 25.99,
    description: "Loose and airy palazzo pants.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1612178995722-f1c36b0a02a5",
    rating: { rate: 4.3, count: 330 }
  },

  {
    title: "Smartphone 6.5 Inch AMOLED",
    price: 299.99,
    description: "Smooth performance smartphone with AMOLED display.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1510557880182-3bd9c1e7f49e",
    rating: { rate: 4.5, count: 940 }
  },
  {
    title: "Gaming Wireless Mouse",
    price: 24.99,
    description: "Ergonomic mouse with high DPI sensor.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1584270356314-5f3b6aea01dd",
    rating: { rate: 4.6, count: 620 }
  },
  {
    title: "Mechanical Keyboard (Blue Switch)",
    price: 75.0,
    description: "Clicky mechanical keyboard with RGB.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    rating: { rate: 4.7, count: 810 }
  },
  {
    title: "Wireless Security Camera",
    price: 54.99,
    description: "Full HD camera with night vision mode.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598514982846-e7c1b757bc67",
    rating: { rate: 4.4, count: 420 }
  },
  {
    title: "Smart Fitness Band",
    price: 39.99,
    description: "Heart rate & sleep tracking fitness band.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    rating: { rate: 4.3, count: 870 }
  },

  {
    title: "Diamond Gold Bracelet",
    price: 149.99,
    description: "Gold bracelet with diamond stones.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1556228834-5ff1bd1d56c5",
    rating: { rate: 4.9, count: 430 }
  },
  {
    title: "Silver Chain Pendant",
    price: 22.99,
    description: "Elegant silver chain with pendant.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643476790-2f34f79e3cfe",
    rating: { rate: 4.5, count: 280 }
  },
  {
    title: "Gold Plated Bangle Set",
    price: 45.99,
    description: "Royal gold-plated bangle for weddings.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1617030570812-395c8e94eacd",
    rating: { rate: 4.7, count: 310 }
  },
  {
    title: "Diamond Necklace Premium",
    price: 219.99,
    description: "Modern diamond necklace set.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    rating: { rate: 4.9, count: 510 }
  },
  {
    title: "Silver Pearl Earrings",
    price: 32.99,
    description: "Stunning pearl earrings with silver finish.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1516631642985-5a7b8dfd3ee8",
    rating: { rate: 4.6, count: 270 }
  },

  // -------- Additional 30 Items ---------

  {
    title: "Mens Thermal Innerwear",
    price: 19.5,
    description: "Warm thermal wear for winters.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1578932750294-3eb63a87f1a1",
    rating: { rate: 4.4, count: 310 }
  },
  {
    title: "Mens Classic Pullover Jacket",
    price: 44.99,
    description: "Soft-touch pullover with comfy lining.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1602810318144-683bbdf231a4",
    rating: { rate: 4.5, count: 360 }
  },
  {
    title: "Mens Oversized Sweatshirt",
    price: 31.99,
    description: "Trendy oversized sweatshirt.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1594634732983-ea38c49d6065",
    rating: { rate: 4.6, count: 390 }
  },
  {
    title: "Mens Stylish Denim Jacket",
    price: 58.99,
    description: "Premium denim with rugged looks.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    rating: { rate: 4.7, count: 420 }
  },
  {
    title: "Mens Stretchable Gym Leggings",
    price: 24.99,
    description: "Gym leggings designed for flexibility.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1552345387-249b0af1b63e",
    rating: { rate: 4.3, count: 290 }
  },

  {
    title: "Women's Printed Saree",
    price: 39.99,
    description: "Beautiful printed saree with soft texture.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1602810318383-e3a7d6a4f60d",
    rating: { rate: 4.6, count: 450 }
  },
  {
    title: "Women's Woolen Shawl",
    price: 29.99,
    description: "Warm and soft woolen shawl.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1515468384962-7b2f95f43b82",
    rating: { rate: 4.7, count: 520 }
  },
  {
    title: "Women's Basic Tank Top",
    price: 17.99,
    description: "Soft cotton tank top.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
    rating: { rate: 4.3, count: 290 }
  },
  {
    title: "Women's Slim Jeggings",
    price: 23.99,
    description: "Stretchable slim-fit jeggings.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    rating: { rate: 4.5, count: 310 }
  },
  {
    title: "Women's Short Leather Jacket",
    price: 78.99,
    description: "Premium leather biker-style jacket.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1548600878-1c628c56dcdd",
    rating: { rate: 4.7, count: 490 }
  },

  {
    title: "Smart Voice Assistant Speaker",
    price: 49.99,
    description: "AI-powered smart home speaker.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1512445239394-7f0c2afbe7df",
    rating: { rate: 4.4, count: 630 }
  },
  {
    title: "RGB Gaming Mouse Pad",
    price: 19.99,
    description: "Extended mouse pad with RGB borders.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1619682814305-fbc1752c778d",
    rating: { rate: 4.5, count: 420 }
  },
  {
    title: "Bluetooth Neckband",
    price: 15.99,
    description: "Long battery life with deep bass.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1511391481032-96e5f2f2f9c5",
    rating: { rate: 4.3, count: 890 }
  },
  {
    title: "Mini Tripod Stand",
    price: 12.99,
    description: "Compact tripod for photography.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517817748493-49ec54a32463",
    rating: { rate: 4.4, count: 330 }
  },
  {
    title: "Wireless RGB Speakers",
    price: 39.99,
    description: "Portable RGB speakers with punchy sound.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf5f9d442b1",
    rating: { rate: 4.5, count: 710 }
  },

  {
    title: "Silver Heart Bracelet",
    price: 22.99,
    description: "Sterling silver bracelet with heart charm.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    rating: { rate: 4.6, count: 280 }
  },
  {
    title: "Gold Plated Tear Drop Earrings",
    price: 29.99,
    description: "Elegant earrings with tear-drop design.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a460f74c",
    rating: { rate: 4.8, count: 300 }
  },
  {
    title: "Diamond Choker Necklace",
    price: 259.99,
    description: "Luxurious choker necklace with diamond finish.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    rating: { rate: 4.9, count: 620 }
  },
  {
    title: "Silver Hanging Earrings",
    price: 17.99,
    description: "Minimalist earrings with modern design.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1516631642985-5a7b8dfd3ee8",
    rating: { rate: 4.4, count: 200 }
  },
  {
    title: "Gold Finger Ring",
    price: 42.99,
    description: "Fashionable gold-plated ring.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10",
    rating: { rate: 4.7, count: 340 }
  },
  // third batch
  {
    title: "Mens Classic Round Neck Tee",
    price: 18.99,
    description: "Soft cotton round neck tee ideal for daily wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254",
    rating: { rate: 4.2, count: 480 }
  },
  {
    title: "Mens Gym Training Shorts",
    price: 22.99,
    description: "Quick-dry gym shorts with breathable mesh.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1602810318144-683bbdf231a4",
    rating: { rate: 4.4, count: 390 }
  },
  {
    title: "Mens Formal Office Pants",
    price: 38.5,
    description: "Slim-fit office pants with stretch comfort.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    rating: { rate: 4.3, count: 260 }
  },
  {
    title: "Mens Sleeveless Hoodie",
    price: 29.5,
    description: "Stylish gym hoodie with sleeveless design.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1594634732983-ea38c49d6065",
    rating: { rate: 4.1, count: 180 }
  },
  {
    title: "Mens Summer Linen Shirt",
    price: 27.99,
    description: "Breathable linen shirt for hot summers.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1520975698519-59cde9b1d159",
    rating: { rate: 4.5, count: 420 }
  },

  {
    title: "Women's Fit & Flare Dress",
    price: 38.5,
    description: "Beautiful fit & flare dress for casual outings.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1535468385504-206f6d09f6be",
    rating: { rate: 4.6, count: 530 }
  },
  {
    title: "Women's Denim Shirt",
    price: 29.99,
    description: "Blue denim shirt with modern fit.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    rating: { rate: 4.3, count: 310 }
  },
  {
    title: "Women's Winter Hoodie",
    price: 46.99,
    description: "Warm and fuzzy hoodie with cozy inner lining.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1612178995722-f1c36b0a02a5",
    rating: { rate: 4.7, count: 690 }
  },
  {
    title: "Women's Long Skirt",
    price: 24.99,
    description: "Stylish long skirt with floral print.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1520974735194-107e24520e8f",
    rating: { rate: 4.2, count: 220 }
  },
  {
    title: "Women's Stylish Overcoat",
    price: 84.99,
    description: "Long overcoat perfect for winter.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b1b7d2048",
    rating: { rate: 4.8, count: 480 }
  },

  {
    title: "Wireless Gaming Controller",
    price: 49.99,
    description: "Ergonomic controller with vibration feedback.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1619682814305-fbc1752c778d",
    rating: { rate: 4.4, count: 770 }
  },
  {
    title: "Smart WiFi Camera",
    price: 39.99,
    description: "Home security WiFi camera with night-vision.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598514982846-e7c1b757bc67",
    rating: { rate: 4.5, count: 650 }
  },
  {
    title: "Portable Power Bank 20000mAh",
    price: 32.5,
    description: "High capacity power bank with fast charging.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598514876729-b187b75d27fb",
    rating: { rate: 4.6, count: 810 }
  },
  {
    title: "Noise Cancelling Headphones",
    price: 89.99,
    description: "Over-ear headphones with active noise cancelation.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1511391481032-96e5f2f2f9c5",
    rating: { rate: 4.7, count: 540 }
  },
  {
    title: "Gaming LED Monitor 24-inch",
    price: 199.99,
    description: "IPS display with 144Hz refresh rate.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944",
    rating: { rate: 4.6, count: 390 }
  },

  {
    title: "Gold Royal Necklace",
    price: 129.99,
    description: "Wedding style royal necklace set.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    rating: { rate: 4.8, count: 400 }
  },
  {
    title: "Silver Swarovski Bracelet",
    price: 45.99,
    description: "Beautiful bracelet with Swarovski crystals.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10",
    rating: { rate: 4.9, count: 320 }
  },
  {
    title: "Gold Mini Pendant",
    price: 25.99,
    description: "Delicate gold mini pendant for women.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643476790-2f34f79e3cfe",
    rating: { rate: 4.5, count: 270 }
  },
  {
    title: "Silver Handmade Ring",
    price: 34.0,
    description: "Handcrafted sterling silver ring.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1617030570812-395c8e94eacd",
    rating: { rate: 4.7, count: 330 }
  },
  {
    title: "Diamond Infinity Ring",
    price: 159.99,
    description: "Elegant infinity ring with diamond stones.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a460f74c",
    rating: { rate: 4.9, count: 450 }
  },

  // -------- EXTRA 25 ITEMS (to complete 50) --------

  {
    title: "Mens Sleeveless Sports Vest",
    price: 14.99,
    description: "Quick-dry vest ideal for running.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1607345366927-044ecdc5d277",
    rating: { rate: 4.1, count: 280 }
  },
  {
    title: "Mens Comfy Pajama Set",
    price: 28.99,
    description: "Super soft pajama set for everyday comfort.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1578932750294-3eb63a87f1a1",
    rating: { rate: 4.4, count: 310 }
  },
  {
    title: "Mens Checkered Shirt",
    price: 23.0,
    description: "Cotton checkered shirt for casual outings.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926",
    rating: { rate: 4.3, count: 230 }
  },
  {
    title: "Mens Cotton Cargo Shorts",
    price: 26.99,
    description: "Durable cargo shorts with multiple pockets.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    rating: { rate: 4.2, count: 210 }
  },
  {
    title: "Mens Track Jacket",
    price: 49.5,
    description: "Lightweight track jacket for sports.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1602810318144-683bbdf231a4",
    rating: { rate: 4.5, count: 380 }
  },

  {
    title: "Women's Polka Dot Top",
    price: 22.99,
    description: "Soft polka dot printed top.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    rating: { rate: 4.3, count: 200 }
  },
  {
    title: "Women's Regular Fit Jeans",
    price: 32.99,
    description: "Blue jeans with stretch fabric.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    rating: { rate: 4.5, count: 330 }
  },
  {
    title: "Women's Evening Gown",
    price: 92.0,
    description: "Elegant gown for parties and weddings.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1515468384962-7b2f95f43b82",
    rating: { rate: 4.8, count: 520 }
  },
  {
    title: "Women's Slim Fit Hoodie",
    price: 38.99,
    description: "Soft hoodie with modern slim fit.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1618221118857-7e4e7db1a4f8",
    rating: { rate: 4.6, count: 360 }
  },
  {
    title: "Women's Stylish Heels",
    price: 44.99,
    description: "Stylish heels perfect for parties.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    rating: { rate: 4.5, count: 260 }
  },

  {
    title: "Jeans Pocket Power Bank",
    price: 19.99,
    description: "Ultra-thin power bank for travel.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1584270354949-1f50df2c63a3",
    rating: { rate: 4.2, count: 440 }
  },
  {
    title: "Bluetooth Car Adapter",
    price: 16.99,
    description: "Wireless Bluetooth receiver for cars.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1585386959984-a4155228f768",
    rating: { rate: 4.3, count: 260 }
  },
  {
    title: "LED USB Table Lamp",
    price: 12.99,
    description: "Flexible LED study lamp with USB power.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
    rating: { rate: 4.5, count: 310 }
  },
  {
    title: "1080p Dash Camera",
    price: 48.99,
    description: "Ultra-wide lens dash cam for cars.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598514982846-e7c1b757bc67",
    rating: { rate: 4.6, count: 590 }
  },
  {
    title: "Digital Alarm Clock",
    price: 14.5,
    description: "Modern LED alarm clock with night-light.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
    rating: { rate: 4.2, count: 210 }
  },

  {
    title: "Gold Bracelet Set",
    price: 55.99,
    description: "Elegant gold bracelet set for parties.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    rating: { rate: 4.7, count: 380 }
  },
  {
    title: "Silver Engraved Ring",
    price: 21.99,
    description: "Beautiful engraved silver ring.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1617030570812-395c8e94eacd",
    rating: { rate: 4.6, count: 250 }
  },
  {
    title: "Diamond Cut Bracelet",
    price: 109.99,
    description: "Premium bracelet with diamond-cut finish.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643476790-2f34f79e3cfe",
    rating: { rate: 4.8, count: 390 }
  },
  {
    title: "Pearl Drop Earrings",
    price: 34.99,
    description: "Elegant pearl drop earrings.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1516631642985-5a7b8dfd3ee8",
    rating: { rate: 4.7, count: 300 }
  },
  {
    title: "Heart Shape Gold Pendant",
    price: 49.99,
    description: "Beautiful heart-shaped pendant.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    rating: { rate: 4.9, count: 420 }
  },

  // second batch
  {
    title: "Mens Cotton Polo T-Shirt",
    price: 21.5,
    description: "Classic polo with breathable cotton fabric.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
    rating: { rate: 4.3, count: 310 }
  },
  {
    title: "Mens Winter Sweatshirt",
    price: 32.99,
    description: "Warm fleece sweatshirt for winters.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    rating: { rate: 4.5, count: 450 }
  },
  {
    title: "Mens Comfort Track Pants",
    price: 24.0,
    description: "Soft and stretchable track pants for daily use.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f0c",
    rating: { rate: 4.2, count: 220 }
  },
  {
    title: "Mens Stylish Leather Jacket",
    price: 99.99,
    description: "Premium leather jacket with modern slim fit.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    rating: { rate: 4.7, count: 590 }
  },
  {
    title: "Mens Sports Shorts",
    price: 15.99,
    description: "Lightweight running shorts with breathable fabric.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77b",
    rating: { rate: 4.1, count: 280 }
  },

  {
    title: "Women's Cotton Kurti",
    price: 23.99,
    description: "Soft cotton kurti with elegant pattern.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1602810318383-e3a7d6a4f60d",
    rating: { rate: 4.5, count: 350 }
  },
  {
    title: "Women's Party Wear Top",
    price: 27.99,
    description: "Stylish party wear top with shiny finish.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
    rating: { rate: 4.3, count: 210 }
  },
  {
    title: "Women's Full Sleeve Sweater",
    price: 42.5,
    description: "Cozy winter sweater with soft wool.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573",
    rating: { rate: 4.7, count: 490 }
  },
  {
    title: "Women's Slim Fit Jeans",
    price: 34.99,
    description: "High-rise slim-fit jeans with stretch material.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    rating: { rate: 4.4, count: 620 }
  },
  {
    title: "Women's Summer Shorts",
    price: 19.99,
    description: "Comfortable denim shorts for summer.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1523381403339-8e83bc6f9c9a",
    rating: { rate: 4.3, count: 200 }
  },

  {
    title: "Bluetooth Soundbar 80W",
    price: 129.99,
    description: "High bass soundbar with surround sound.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1584270354949-1f50df2c63a3",
    rating: { rate: 4.6, count: 750 }
  },
  {
    title: "Smartwatch Series 8 Clone",
    price: 69.99,
    description: "Smart fitness tracking with AMOLED display.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    rating: { rate: 4.4, count: 930 }
  },
  {
    title: "Portable Bluetooth Speaker",
    price: 25.0,
    description: "Compact speaker with punchy bass.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad3e4805",
    rating: { rate: 4.1, count: 430 }
  },
  {
    title: "Gaming Mouse RGB",
    price: 29.5,
    description: "Ergonomic gaming mouse with RGB lights.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1584270356314-5f3b6aea01dd",
    rating: { rate: 4.5, count: 770 }
  },
  {
    title: "Laptop i5 10th Gen 14-inch",
    price: 649.99,
    description: "Fast performance laptop with SSD storage.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    rating: { rate: 4.6, count: 520 }
  },

  {
    title: "Gold Plated Necklace",
    price: 39.99,
    description: "Elegant gold-plated necklace for weddings.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    rating: { rate: 4.8, count: 260 }
  },
  {
    title: "Minimalist Silver Chain",
    price: 19.99,
    description: "Simple and elegant sterling silver chain.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643476790-2f34f79e3cfe",
    rating: { rate: 4.5, count: 410 }
  },
  {
    title: "Gold Charm Bracelet",
    price: 55.0,
    description: "Premium bracelet with gold charms.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    rating: { rate: 4.7, count: 340 }
  },
  {
    title: "Diamond Stud Earrings",
    price: 149.99,
    description: "Beautiful diamond cut stud earrings.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a460f74c",
    rating: { rate: 4.9, count: 525 }
  },
  {
    title: "Rose Gold Ring",
    price: 79.99,
    description: "Stylish rose gold ring for women.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10",
    rating: { rate: 4.8, count: 310 }
  },

  // ---------------- Additional 30 items ----------------

  {
    title: "Mens Sports Tank Top",
    price: 17.99,
    description: "Breathable tank top ideal for gym workouts.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1607345366927-044ecdc5d277",
    rating: { rate: 4.3, count: 260 }
  },
  {
    title: "Mens Full Sleeve Sweatshirt",
    price: 37.0,
    description: "Soft sweatshirt with thermal lining.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1591047139829-d91c8e21a44e",
    rating: { rate: 4.4, count: 420 }
  },
  {
    title: "Mens Chino Pants",
    price: 29.99,
    description: "Comfortable and stretchable chino pants.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b09adf",
    rating: { rate: 4.2, count: 210 }
  },
  {
    title: "Mens Stylish Blazer",
    price: 89.99,
    description: "Modern blazer perfect for formal events.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1520974735194-107e24520e8f",
    rating: { rate: 4.6, count: 340 }
  },

  {
    title: "Women's Printed Maxi Dress",
    price: 44.5,
    description: "Colorful and comfortable maxi dress.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1593032457861-9b1fb8c3a7d1",
    rating: { rate: 4.7, count: 450 }
  },
  {
    title: "Women's Slim Fit Top",
    price: 18.99,
    description: "Soft-touch slim-fit cotton top.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1542038821-6c5a24cc6e8b",
    rating: { rate: 4.3, count: 300 }
  },
  {
    title: "Women's Trendy Jacket",
    price: 54.99,
    description: "Trendy winter jacket with comfortable fit.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1548600878-1c628c56dcdd",
    rating: { rate: 4.8, count: 520 }
  },
  {
    title: "Women's Stylish Sunglasses",
    price: 25.99,
    description: "UV-protected stylish sunglasses.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1518544889280-c5138e0f2c5b",
    rating: { rate: 4.6, count: 310 }
  },

  {
    title: "Wireless Charging Pad",
    price: 22.99,
    description: "Fast wireless charger for smartphones.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1585386959984-a4155228f768",
    rating: { rate: 4.4, count: 650 }
  },
  {
    title: "1080p Web Camera",
    price: 35.99,
    description: "HD webcam perfect for video calls.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1612810806495-f863de56e8bf",
    rating: { rate: 4.2, count: 390 }
  },
  {
    title: "Drone Mini Camera",
    price: 129.99,
    description: "Mini drone with 1080p camera.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517817748493-49ec54a32463",
    rating: { rate: 4.5, count: 410 }
  },
  {
    title: "Smart LED Light Bulb",
    price: 14.99,
    description: "Color-changing intelligent LED bulb.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    rating: { rate: 4.3, count: 810 }
  },

  {
    title: "Silver Pendant",
    price: 24.99,
    description: "Classy sterling silver pendant.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1556228834-5ff1bd1d56c5",
    rating: { rate: 4.7, count: 230 }
  },
  {
    title: "Pearl Necklace",
    price: 59.99,
    description: "Elegant pearl necklace for formal wear.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1516631642985-5a7b8dfd3ee8",
    rating: { rate: 4.9, count: 580 }
  },
  {
    title: "Gold Nose Ring",
    price: 19.99,
    description: "Trendy gold-plated nose ring.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1611599532818-3d5c7d50f8f0",
    rating: { rate: 4.4, count: 290 }
  },
  {
    title: "Silver Hoop Earrings",
    price: 29.99,
    description: "Minimalist silver hoop earrings.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1617030570812-395c8e94eacd",
    rating: { rate: 4.6, count: 330 }
  }
,
  //first batch
  {
    title: "Mens Cotton Slim Fit T-Shirt",
    price: 19.99,
    description: "Soft cotton slim-fit tee perfect for everyday wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    rating: { rate: 4.2, count: 412 }
  },
  {
    title: "Mens Casual Hoodie",
    price: 34.5,
    description: "Warm and comfortable fleece-lined casual hoodie.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    rating: { rate: 4.4, count: 520 }
  },
  {
    title: "Mens Classic Formal Shirt",
    price: 25.0,
    description: "Premium formal shirt with wrinkle-resistant fabric.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1520975918312-7da4de42a9b0",
    rating: { rate: 4.1, count: 289 }
  },
  {
    title: "Mens Running Joggers",
    price: 29.99,
    description: "Lightweight joggers ideal for running & workouts.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1552345387-249b0af1b63e",
    rating: { rate: 4.3, count: 350 }
  },
  {
    title: "Mens Sports Sneakers",
    price: 49.99,
    description: "Breathable mesh sneakers with soft cushioning.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1528701800489-20be3c2a1459",
    rating: { rate: 4.5, count: 612 }
  },
  {
    title: "Women’s Modern Denim Jacket",
    price: 48.5,
    description: "Durable denim jacket with a modern fit.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1503342250614-ca440786c096",
    rating: { rate: 4.6, count: 301 }
  },
  {
    title: "Women’s Floral Summer Dress",
    price: 32.99,
    description: "Lightweight floral printed summer dress.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1520975698519-59cde9b1d159",
    rating: { rate: 4.7, count: 540 }
  },
  {
    title: "Women’s Leather Handbag",
    price: 59.99,
    description: "Premium leather handbag with spacious interior.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    rating: { rate: 4.8, count: 289 }
  },
  {
    title: "Women’s Stylish Sandals",
    price: 27.5,
    description: "Comfortable summer sandals with modern design.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1582587225018-5a40a0b1a1e7",
    rating: { rate: 4.4, count: 189 }
  },
  {
    title: "Women’s Winter Coat",
    price: 89.99,
    description: "Warm long winter coat with soft inner lining.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1514315384763-ba401779410f",
    rating: { rate: 4.9, count: 415 }
  },
  {
    title: "4K Ultra HD Smart TV 55-inch",
    price: 499.99,
    description: "Ultra HD display with HDR10 & Dolby support.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d4",
    rating: { rate: 4.6, count: 843 }
  },
  {
    title: "Wireless Bluetooth Earbuds",
    price: 59.0,
    description: "Noise-cancelling earbuds with long battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf5f9d442b1",
    rating: { rate: 4.4, count: 734 }
  },
  {
    title: "Mechanical RGB Gaming Keyboard",
    price: 85.99,
    description: "RGB backlit mechanical keyboard for gamers.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    rating: { rate: 4.5, count: 630 }
  },
  {
    title: "Luxury Silver Bracelet",
    price: 35.0,
    description: "Handcrafted sterling silver bracelet for daily wear.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    rating: { rate: 4.8, count: 210 }
  },
  {
    title: "Diamond Finish Earrings",
    price: 129.99,
    description: "Premium diamond-finish earrings for special occasions.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7",
    rating: { rate: 4.9, count: 411 }
  }


];

*/









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
