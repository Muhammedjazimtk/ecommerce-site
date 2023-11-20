/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
const CartContext = createContext({ product: [], addToCart: () => {} });

export const CardContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const addToCart = (cart) => {
    setProduct((prevState) => [...prevState, cart]);
  };

  return (
    <CartContext.Provider value={{ product, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
