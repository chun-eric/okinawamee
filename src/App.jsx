import "./App.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/layout/Header/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <Header />
    </CartProvider>
  );
}

export default App;
