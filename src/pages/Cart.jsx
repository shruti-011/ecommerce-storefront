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
    <div className="pt-24 px-4 md:px-20 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg">Your cart is empty 🛒</p>
          <Link
            to="/"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* CART ITEMS */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                {/* INFO */}
                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>

                  <p className="text-gray-500 text-sm">₹{item.price}</p>

                  {/* QTY */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{item.qty || 1}</span>

                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total Price:</span>
              <span>₹{totalPrice}</span>
            </div>

            <button className="w-full mt-6 bg-black text-white py-2 rounded hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
