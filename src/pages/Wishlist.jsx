import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="pt-24 px-4 md:px-20 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Wishlist ❤️</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>

          <Link
            to="/"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              {/* DETAILS */}
              <div className="p-4">
                <h2 className="font-semibold truncate">{item.name}</h2>

                <p className="text-gray-500 text-sm">{item.category}</p>

                <p className="font-bold mt-1">₹{item.price}</p>

                {/* ACTIONS */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    className="px-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    🗑
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
