// ===== IMPORT IMAGES =====
import shirt from "../assets/images/shirt.jpeg";
import dress from "../assets/images/dress.jpeg";
import jacket from "../assets/images/jacket.jpg";

import iphone from "../assets/images/iphone.jpeg";
import headphones from "../assets/images/headphones.jpeg";
import watch from "../assets/images/watch.jpeg";

import samsung from "../assets/images/samsung.jpeg";
import oneplus from "../assets/images/oneplus.jpeg";

import lamp from "../assets/images/lamp.jpeg";
import plant from "../assets/images/plant.jpeg";
import sofa from "../assets/images/sofa.jpeg";

import nike from "../assets/images/nike shoes.jpeg";
import adidas from "../assets/images/addidas.jpeg";

import lipstick from "../assets/images/lipstic.jpeg";
import perfume from "../assets/images/perfume.jpeg";
import cream from "../assets/images/soaf.jpeg";

// ===== PRODUCTS DATA =====
const products = [
  // ================= FASHION =================
  {
    id: 1,
    name: "Men Stylish Shirt",
    category: "Fashion",
    price: 799,
    oldPrice: 1299,
    discount: 40,
    image: shirt,
  },
  {
    id: 2,
    name: "Women Casual Dress",
    category: "Fashion",
    price: 1499,
    oldPrice: 2199,
    discount: 35,
    image: dress,
  },
  {
    id: 3,
    name: "Men Denim Jacket",
    category: "Fashion",
    price: 1999,
    oldPrice: 2999,
    discount: 33,
    image: jacket,
  },

  // ================= ELECTRONICS =================
  {
    id: 4,
    name: "iPhone 15 Pro",
    category: "Electronics",
    price: 129999,
    oldPrice: 139999,
    discount: 8,
    image: iphone,
  },
  {
    id: 5,
    name: "Sony Headphones",
    category: "Electronics",
    price: 2999,
    oldPrice: 4999,
    discount: 40,
    image: headphones,
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    oldPrice: 7999,
    discount: 38,
    image: watch,
  },

  // ================= MOBILES =================
  {
    id: 7,
    name: "Samsung Galaxy S24",
    category: "Mobiles",
    price: 89999,
    oldPrice: 99999,
    discount: 10,
    image: samsung,
  },
  {
    id: 8,
    name: "OnePlus 12",
    category: "Mobiles",
    price: 64999,
    oldPrice: 69999,
    discount: 7,
    image: oneplus,
  },

  // ================= HOME =================
  {
    id: 9,
    name: "Modern Table Lamp",
    category: "Home",
    price: 999,
    oldPrice: 1499,
    discount: 33,
    image: lamp,
  },
  {
    id: 10,
    name: "Decor Plant",
    category: "Home",
    price: 499,
    oldPrice: 899,
    discount: 45,
    image: plant,
  },
  {
    id: 11,
    name: "Minimal Sofa",
    category: "Home",
    price: 15999,
    oldPrice: 19999,
    discount: 20,
    image: sofa,
  },

  // ================= SHOES =================
  {
    id: 12,
    name: "Nike Running Shoes",
    category: "Shoes",
    price: 2999,
    oldPrice: 4999,
    discount: 40,
    image: nike,
  },
  {
    id: 13,
    name: "Adidas Sneakers",
    category: "Shoes",
    price: 3499,
    oldPrice: 5499,
    discount: 36,
    image: adidas,
  },
  // ================= BEAUTY =================
  {
    id: 14,
    name: "Matte Lipstick",
    category: "Beauty",
    price: 499,
    oldPrice: 899,
    discount: 45,
    image: lipstick,
  },
  {
    id: 15,
    name: "Luxury Perfume",
    category: "Beauty",
    price: 1999,
    oldPrice: 2999,
    discount: 33,
    image: perfume,
  },
  {
    id: 16,
    name: "Face Cream",
    category: "Beauty",
    price: 799,
    oldPrice: 1299,
    discount: 38,
    image: cream,
  },
];

export default products;
