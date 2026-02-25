import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../Store/StoreContext";
import CartPhonePreview from "../components/CartPhonePreview";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { product } = useContext(productContext);
  const [step, setStep] = useState(1);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    email: "",
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  const subtotal = product.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0,
  );
  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1500));
    setProcessing(false);
    setSuccess(true);
    setTimeout(() => navigate("/"), 2500);
  };

  if (product.length === 0 && !success) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
        <p className="text-gray-600 font-medium">Your cart is empty.</p>
        <Link to="/cart" className="mt-4 text-gray-900 font-semibold underline">
          Go to Cart
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-gray-50">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          Order placed successfully
        </h1>
        <p className="text-gray-500 mt-2">
          Thank you for your purchase. Redirecting...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to cart
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Checkout
        </h1>
        <p className="text-gray-500 mb-8">Secure online payment only.</p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Left: Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/80">
                <h2 className="font-semibold text-gray-900">
                  Contact & shipping
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  We’ll use this for order updates.
                </p>
              </div>
              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address line 1
                  </label>
                  <input
                    type="text"
                    required
                    value={form.address1}
                    onChange={(e) => update("address1", e.target.value)}
                    placeholder="Street, building"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address line 2 (optional)
                  </label>
                  <input
                    type="text"
                    value={form.address2}
                    onChange={(e) => update("address2", e.target.value)}
                    placeholder="Apartment, floor"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={form.city}
                      onChange={(e) => update("city", e.target.value)}
                      placeholder="City"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      required
                      value={form.state}
                      onChange={(e) => update("state", e.target.value)}
                      placeholder="State"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      required
                      value={form.pincode}
                      onChange={(e) => update("pincode", e.target.value)}
                      placeholder="PIN"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="10-digit mobile"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Payment - Online only */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/80">
                <h2 className="font-semibold text-gray-900">Payment</h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Online payment only. Secure card entry below.
                </p>
              </div>
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Debit / Credit card
                    </p>
                    <p className="text-sm text-gray-500">
                      Pay securely with your card
                    </p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card number
                  </label>
                  <input
                    type="text"
                    required
                    value={form.cardNumber}
                    onChange={(e) =>
                      update(
                        "cardNumber",
                        e.target.value.replace(/\D/g, "").slice(0, 16),
                      )
                    }
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition font-mono tracking-wider"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name on card
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nameOnCard}
                    onChange={(e) => update("nameOnCard", e.target.value)}
                    placeholder="As on card"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry (MM/YY)
                    </label>
                    <input
                      type="text"
                      required
                      value={form.expiry}
                      onChange={(e) => update("expiry", e.target.value)}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      required
                      value={form.cvv}
                      onChange={(e) =>
                        update(
                          "cvv",
                          e.target.value.replace(/\D/g, "").slice(0, 4),
                        )
                      }
                      placeholder="123"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none transition font-mono"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Your payment is secured with encryption.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-24">
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Order summary</h2>
              </div>
              <div className="p-5 max-h-[320px] overflow-y-auto">
                <ul className="space-y-4">
                  {product.map((item) => (
                    <li key={item.cartId} className="flex gap-3">
                      <CartPhonePreview item={item} size="sm" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          Qty {item.quantity || 1} × ₹{item.price || 0}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-5 py-4 border-t border-gray-100 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-900 pt-2">
                  <span>Total</span>
                  <span>₹{total.toFixed(0)}</span>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full py-3.5 rounded-xl font-semibold bg-gray-900 text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                >
                  {processing ? "Processing…" : `Pay ₹${total.toFixed(0)}`}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
