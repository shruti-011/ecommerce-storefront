import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  if (!product) return null;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
      {/* IMAGE (ONLY LINK HERE, NOT FULL CARD) */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
          />
        </Link>

        {/* WISHLIST */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToWishlist(product));
          }}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-red-500 p-2 rounded-full shadow"
        >
          ❤️
        </button>

        {/* DISCOUNT */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* DETAILS */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>

        <p className="text-sm text-gray-500 mt-1">{product.category}</p>

        {/* PRICE */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* ADD TO CART */}
        <button
          onClick={(e) => {
            e.stopPropagation();

            console.log("ADD TO CART:", product);

            dispatch(addToCart(product));
          }}
          className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
