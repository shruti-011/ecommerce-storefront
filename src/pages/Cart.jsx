import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0,
  );

  return (
    <div className="pt-28 px-4 md:px-16 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Your Cart 🛒
      </h1>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <div className="text-center mt-24">
          <p className="text-gray-500 text-lg">Your cart is empty</p>

          <Link
            to="/"
            className="inline-block mt-5 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT SIDE - CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* INFO */}
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-800">{item.name}</h2>

                  <p className="text-gray-500 text-sm mt-1">₹{item.price}</p>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="font-medium">{item.qty || 1}</span>

                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <div className="flex flex-col justify-between items-end">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - SUMMARY (STICKY LIKE AMAZON) */}
          <div className="bg-white p-6 rounded-xl shadow h-fit lg:sticky top-28">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2 text-gray-600">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between font-bold text-lg text-gray-900">
              <span>Total Price</span>
              <span>₹{totalPrice}</span>
            </div>

            <button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition active:scale-95">
              Proceed to Checkout
            </button>

            <p className="text-xs text-gray-400 mt-3 text-center">
              Safe & Secure Checkout
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
 