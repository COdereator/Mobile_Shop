import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../Store/StoreContext";
import CartPhonePreview from "./CartPhonePreview";

const CartSidebar = () => {
  const { sidebar, setSidebar, product, dispatch } = useContext(productContext);

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

  return (
    <>
      <div
        onClick={() => setSidebar(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${
          sidebar ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out ${
          sidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/80">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-gray-900">Your Cart</span>
            {product.length > 0 && (
              <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-600">
                {product.length} {product.length === 1 ? "item" : "items"}
              </span>
            )}
          </div>
          <button
            onClick={() => setSidebar(false)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {product.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Your cart is empty</p>
              <p className="text-sm text-gray-500 mt-1">Add a custom case to get started.</p>
              <button
                onClick={() => setSidebar(false)}
                className="mt-6 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {product.map((item) => {
                const qty = item.quantity || 1;
                return (
                  <li key={item.cartId} className="p-4 hover:bg-gray-50/50 transition-colors">
                    <div className="flex gap-3">
                      <CartPhonePreview item={item} size="sm" />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm truncate pr-6">
                          {item.title}
                        </h4>
                        {item.type === "custom" && item.customization && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {item.customization.image && "Photo · "}
                            {item.customization.texts?.length > 0 &&
                              `${item.customization.texts.length} text ${item.customization.texts.length === 1 ? "layer" : "layers"}`}
                            {!item.customization.image && !item.customization.texts?.length && "Plain case"}
                          </p>
                        )}
                        <p className="text-sm font-medium text-gray-700 mt-1">
                          ₹{typeof item.price === "number" ? item.price : item.price || 0}
                          {item.oldPrice && (
                            <span className="text-gray-400 line-through ml-1 text-xs">₹{item.oldPrice}</span>
                          )}
                        </p>

                        <div className="flex items-center justify-between gap-2 mt-2">
                          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartId, -1)}
                              className="p-1.5 hover:bg-gray-100 text-gray-600 disabled:opacity-50 disabled:pointer-events-none"
                              aria-label="Decrease quantity"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="min-w-[28px] text-center text-sm font-medium py-1">{qty}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartId, 1)}
                              className="p-1.5 hover:bg-gray-100 text-gray-600"
                              aria-label="Increase quantity"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            aria-label="Remove from cart"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {product.length > 0 && (
          <div className="border-t border-gray-200 bg-white px-5 py-5 space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">₹{subtotal.toFixed(0)}</span>
            </div>
            <Link
              to="/cart"
              onClick={() => setSidebar(false)}
              className="block w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20 text-center"
            >
              View Cart
            </Link>
            <Link
              to="/checkout"
              onClick={() => setSidebar(false)}
              className="block w-full bg-emerald-600 text-white py-3.5 rounded-xl font-semibold hover:bg-emerald-700 transition-colors text-center"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setSidebar(false)}
              className="w-full text-sm text-gray-500 hover:text-gray-800 font-medium transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
