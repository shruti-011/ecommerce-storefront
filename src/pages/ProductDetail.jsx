import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import products from "../data/products";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="pt-24 text-center text-gray-600">Product not found</div>
    );
  }

  return (
    <div className="pt-24 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen px-4 md:px-20">
      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-10">
        {/* IMAGE SECTION */}
        <div className="bg-gray-50 rounded-xl flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-2">
            Category:{" "}
            <span className="font-medium text-gray-700">
              {product.category}
            </span>
          </p>

          {/* PRICE BOX */}
          <div className="mt-5 flex items-center gap-4">
            <span className="text-3xl font-bold text-black">
              ₹{product.price}
            </span>

            {product.oldPrice && (
              <span className="text-gray-400 line-through text-lg">
                ₹{product.oldPrice}
              </span>
            )}

            {product.discount && (
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            Premium quality product with modern design and durability. Perfect
            for daily lifestyle use and long-lasting comfort.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* ADD TO CART */}
            <button
              onClick={() => dispatch(addToCart(product))}
              className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-semibold active:scale-95"
            >
              🛒 Add to Cart
            </button>

            {/* WISHLIST */}
            <button
              onClick={() => dispatch(addToWishlist(product))}
              className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition font-semibold active:scale-95"
            >
              ❤️ Wishlist
            </button>
          </div>

          {/* BACK */}
          <Link to="/" className="mt-6 text-blue-600 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
