import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter
      basename={
        window.location.pathname.includes("ecommerce-storefront")
          ? "/ecommerce-storefront"
          : "/"
      }
    >
      {/* GLOBAL HEADER (ALL PAGES) */}
      <Header />

      {/* PAGE CONTENT */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PRODUCT DETAIL */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* WISHLIST */}
        <Route path="/wishlist" element={<Wishlist />} />

        {/* CART */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {/* GLOBAL FOOTER (ALL PAGES) */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
