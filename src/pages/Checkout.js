import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Checkout() {
  const location = useLocation();
  const product = location.state?.product;

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = async () => {
    if (!product) {
      alert("No product selected");
      return;
    }

    if (!form.name || !form.email || !form.address) {
      alert("Please fill all fields");
      return;
    }

    // ✅ ENV SAFETY CHECK (IMPORTANT FIX)
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      alert("EmailJS config missing. Check your .env file.");
      console.error("ENV ERROR:", {
        serviceID,
        templateID,
        publicKey,
      });
      return;
    }

    setLoading(true);

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
      user_address: form.address,
      product_name: product.name,
      product_price: product.price,
      product_category: product.category,
    };

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey,
      );

      console.log("SUCCESS:", result.text);
      alert("Order Placed Successfully 🚀 Email Sent!");

      setForm({
        name: "",
        email: "",
        address: "",
      });
    } catch (error) {
      console.error("EMAIL ERROR:", error);
      alert(error?.text || error?.message || "Email sending failed");
    } finally {
      setLoading(false);
    }
  };

  // No product UI
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">No Product Selected 😢</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-28 flex justify-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Checkout
        </h1>

        {/* PRODUCT */}
        <div className="flex items-center gap-4 border rounded-xl p-4 mb-6 bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-lg"
          />

          <div>
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-500">Category: {product.category}</p>
            <p className="text-green-600 font-bold">₹{product.price}</p>
          </div>
        </div>

        {/* FORM */}
        <div className="space-y-4">
          <input
            name="name"
            value={form.name}
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="email"
            value={form.email}
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="address"
            value={form.address}
            placeholder="Delivery Address"
            onChange={handleChange}
            rows="4"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={placeOrder}
          disabled={loading}
          className="w-full mt-6 bg-black text-white py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          {loading ? "Placing Order..." : "Place Order 🚀"}
        </button>
      </div>
    </div>
  );
}

export default Checkout;
