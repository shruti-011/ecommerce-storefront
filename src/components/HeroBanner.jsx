import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeroBanner() {
  const banners = [
    {
      id: 1,
      type: "image",
      title: "Mega Sale 🔥",
      subtitle: "Up to 50% OFF on All Products",
      src: process.env.PUBLIC_URL + "/images/fashion.jpg",
      cta: "Shop Now",
    },
    {
      id: 2,
      type: "image",
      title: "Fashion Collection",
      subtitle: "Trendy Clothes & Premium Styles",
      src: process.env.PUBLIC_URL + "/images/banner2.jpeg",
      cta: "Shop Fashion",
    },
    {
      id: 3,
      type: "image",
      title: "Electronics Hub",
      subtitle: "Smartphones & Gadgets",
      src: process.env.PUBLIC_URL + "/images/banner1.jpeg",
      cta: "Explore Tech",
    },
    {
      id: 4,
      type: "image",
      title: "Electronics Hub",
      subtitle: "Smartphones & Gadgets",
      src: process.env.PUBLIC_URL + "/images/electroniitem.png",
      cta: "Explore Tech",
    },
  ];

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hovered, banners.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const banner = banners[index];

  return (
    <div
      className="relative w-full h-[450px] md:h-[560px] overflow-hidden bg-black"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 🎥 VIDEO SECTION FIX */}

      <img
        key={banner.id}
        src={banner.src}
        alt="banner"
        className="absolute w-full h-full object-cover"
      />

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* 📝 CONTENT */}
      <div className="absolute inset-0 flex items-center px-6 md:px-20">
        <div className="max-w-xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            {banner.title}
          </h1>

          <p className="text-gray-200 text-lg mb-6">{banner.subtitle}</p>

          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition active:scale-95"
          >
            {banner.cta}
          </Link>
        </div>
      </div>

      {/* ⬅️➡️ NAV */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full"
      >
        ›
      </button>

      {/* 🔘 DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              i === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBanner;
