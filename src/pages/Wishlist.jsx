import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-4 md:px-16">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Heart className="text-red-500" /> My Wishlist
        </h1>

        {wishlistItems.length > 0 && (
          <span className="text-sm bg-black text-white px-3 py-1 rounded-full">
            {wishlistItems.length} Items
          </span>
        )}
      </div>

      {/* EMPTY STATE */}
      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-24 text-center">
          <Heart className="w-16 h-16 text-gray-300" />
          <h2 className="text-xl font-semibold mt-4">Your Wishlist is Empty</h2>
          <p className="text-gray-500 mt-2">Save your favorite products here</p>

          <Link
            to="/"
            className="mt-5 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        /* GRID */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </Link>

                {/* REMOVE QUICK BUTTON */}
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-100"
                >
                  <Trash2 size={16} className="text-red-500" />
                </button>
              </div>

              {/* DETAILS */}
              <div className="p-4">
                <h2 className="font-semibold text-gray-800 truncate">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-500">{item.category}</p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ₹{item.price}
                  </span>

                  {item.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{item.oldPrice}
                    </span>
                  )}
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition active:scale-95"
                  >
                    <ShoppingCart size={16} />
                    Add
                  </button>

                  <button
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 rounded-md transition"
                  >
                    <Trash2 size={16} />
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
