import { createContext, useReducer, useState } from "react";

export const productContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          ...action.payload,
          quantity: action.payload.quantity ?? 1,
          cartId: Date.now() + Math.random(),
        },
      ];
    case "REMOVE_PRODUCT":
      return state.filter((item) => item.cartId !== action.payload);
    case "UPDATE_QUANTITY": {
      const { cartId, delta } = action.payload;
      return state
        .map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
            : item,
        )
        .filter((item) => (item.quantity || 1) >= 1);
    }
    default:
      return state;
  }
};

const StoreContext = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [product, dispatch] = useReducer(reducer, []);
  return (
    <productContext.Provider value={{ sidebar, setSidebar, product, dispatch }}>
      {children}
    </productContext.Provider>
  );
};

export default StoreContext;
