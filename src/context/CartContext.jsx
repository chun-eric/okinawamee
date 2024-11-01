//
import { createContext, useState } from "react";

export const CartContext = createContext();


// the provider will wrap in the App.jsx
export function CartProvider({ children }) {
  // sets inital values to empty array
  const [cart, setCart] = useState([]);
  // the CartContent.Provider actually holds our cart value
  // passes in our cart and setCart function values so any component can access
  // the cart values
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
