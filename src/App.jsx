import "./App.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import TopBanner from "./components/layout/TopBanner/TopBanner";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <Header />
      <TopBanner />
      <Footer />
    </CartProvider>
  );
}

export default App;
