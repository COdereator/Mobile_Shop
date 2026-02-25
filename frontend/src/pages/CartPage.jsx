import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../Store/StoreContext";
import CartPhonePreview from "../components/CartPhonePreview";

const CartPage = () => {
  const { product, dispatch } = useContext(productContext);

  const removeFromCart = (cartId) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartId });
  };

  const updateQuantity = (cartId, delta) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { cartId, delta } });
  };

  const subtotal = product.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  if (product.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-500 mt-1 text-center max-w-sm">Add custom phone cases from the shop to see them here.</p>
        <Link
          to="/custom-phone-case"
          className="mt-8 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
        >
          Browse Custom Cases
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
      <p className="text-gray-500 text-sm sm:text-base mb-8">
        {product.length} {product.length === 1 ? "item" : "items"} in your cart
      </p>

      <div className="space-y-6">
        {product.map((item) => {
          const qty = item.quantity || 1;
          const lineTotal = (item.price || 0) * qty;
          return (
            <div
              key={item.cartId}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center sm:justify-start">
                <CartPhonePreview item={item} size="md" />
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                {item.type === "custom" && item.customization && (
                  <p className="text-sm text-gray-500 mt-0.5">
                    {item.customization.image && "Custom photo · "}
                    {item.customization.texts?.length > 0 &&
                      `${item.customization.texts.length} text ${item.customization.texts.length === 1 ? "layer" : "layers"}`}
                    {!item.customization.image && !item.customization.texts?.length && "Plain case"}
                  </p>
                )}
                <p className="text-base font-medium text-gray-700 mt-2">
                  ₹{typeof item.price === "number" ? item.price : item.price || 0}
                  {item.oldPrice && (
                    <span className="text-gray-400 line-through ml-2 text-sm">₹{item.oldPrice}</span>
                  )}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.cartId, -1)}
                      className="p-2 sm:p-2.5 hover:bg-gray-200 text-gray-600 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="min-w-[36px] text-center text-sm font-semibold py-2">{qty}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.cartId, 1)}
                      className="p-2 sm:p-2.5 hover:bg-gray-200 text-gray-600 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Line total: <span className="text-gray-900">₹{lineTotal.toFixed(0)}</span>
                  </p>
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-sm text-red-600 hover:text-red-700 font-medium hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-200">
        <div className="flex justify-between text-base text-gray-600 mb-2">
          <span>Subtotal</span>
          <span className="font-semibold text-gray-900">₹{subtotal.toFixed(0)}</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/checkout"
            className="flex-1 text-center bg-gray-900 text-white py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Proceed to Checkout
          </Link>
          <Link
            to="/custom-phone-case"
            className="flex-1 text-center py-3.5 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartPage;
