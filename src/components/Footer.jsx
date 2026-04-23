import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#111827] text-white mt-10">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400">SHOPZONE</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Your one-stop destination for fashion, electronics, and home
            essentials. Best deals every day 🚀
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-white">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Fashion</li>
            <li>Electronics</li>
            <li>Mobiles</li>
            <li>Home Decor</li>
            <li>Shoes</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SHOPZONE. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
