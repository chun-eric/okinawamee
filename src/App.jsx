import { useState } from "react";
import "./App.css";
import { CartProvider } from "./context/CartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <h1 className='text-3xl font-bold underline'>Hello World!</h1>
    </CartProvider>
  );
}

export default App;
