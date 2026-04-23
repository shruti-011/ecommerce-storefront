import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCategory, setSearchTerm } from "../features/products/productsSlice";

function Header() {
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const cartCount = useSelector((state) => state.cart.items.length);
  const wishCount = useSelector((state) => state.wishlist.items.length);

  const categories = [
    "ALL",
    "Electronics",
    "Fashion",
    "Mobiles",
    "Home",
    "Beauty",
    "Shoes",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* 🔥 TOP BAR */}
      <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white px-4 md:px-10 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link className="text-xl md:text-2xl font-bold tracking-wide">
          SHOPZONE
        </Link>

        {/* 🔍 DESKTOP SEARCH */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-6">
          <div className="flex w-full bg-white rounded-md overflow-hidden shadow">
            <input
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                dispatch(setSearchTerm(e.target.value));
              }}
              placeholder="Search products..."
              className="w-full px-4 py-2 outline-none text-black"
            />

            <button className="bg-amber-400 px-5 hover:bg-amber-500 transition">
              🔍
            </button>
          </div>
        </div>

        {/* 🔥 DESKTOP ICONS */}
        <div className="hidden md:flex items-center gap-4">
          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative flex items-center gap-1 hover:text-amber-300 transition"
          >
            ❤️
            <span className="text-sm">Wishlist</span>
            <span className="absolute -top-2 -right-3 bg-amber-400 text-black text-xs px-1 rounded">
              {wishCount}
            </span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-1 hover:text-amber-300 transition"
          >
            🛒
            <span className="text-sm">Cart</span>
            <span className="absolute -top-2 -right-3 bg-amber-400 text-black text-xs px-1 rounded">
              {cartCount}
            </span>
          </Link>
        </div>

        {/* 📱 MOBILE ICONS */}
        <div className="flex md:hidden items-center gap-4">
          {/* Search Icon */}
          <button onClick={() => setSearchOpen(!searchOpen)}>🔍</button>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(true)}>☰</button>
        </div>
      </div>

      {/* 🔍 MOBILE SEARCH BAR */}
      {searchOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow">
          <input
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              dispatch(setSearchTerm(e.target.value));
            }}
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded outline-none"
          />
        </div>
      )}

      {/* 🔥 CATEGORY BAR (DESKTOP) */}
      <div className="hidden md:flex bg-gray-800 text-white px-10 py-2 gap-6 text-sm">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setCategory(cat))}
            className="hover:text-amber-400 transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 📱 OVERLAY MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          {/* SIDE PANEL */}
          <div className="w-72 bg-white h-full p-4 shadow-lg">
            {/* CLOSE */}
            <button className="text-xl mb-4" onClick={() => setMenuOpen(false)}>
              ✖
            </button>

            {/* USER */}
            <div className="mb-4 font-semibold">Hello, User</div>

            {/* Wishlist */}
            <Link to="/wishlist" className="flex justify-between py-2 border-b">
              <span>❤️ Wishlist</span>
              <span>{wishCount}</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="flex justify-between py-2 border-b">
              <span>🛒 Cart</span>
              <span>{cartCount}</span>
            </Link>

            {/* Categories */}
            <div className="mt-4">
              <p className="font-bold mb-2">Categories</p>
              {categories.map((cat) => (
                <div
                  key={cat}
                  onClick={() => {
                    dispatch(setCategory(cat));
                    setMenuOpen(false);
                  }}
                  className="py-2 border-b cursor-pointer"
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
