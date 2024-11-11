import "./App.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import HeroBanner from "./components/layout/HeroBanner/HeroBanner";
import Values from "./components/layout/Values/Values";
import { Subscribe } from "./components/layout/Subscribe/Subscribe";
import MainCollections from "./components/layout/ProductCollections/MainCollections";
import ValueBanner from "./components/layout/ValueBanner/ValueBanner";
import BentoCollections from "./components/layout/ProductCollections/BentoCollections";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <Header />
      <HeroBanner />
      <MainCollections />
      <ValueBanner />
      <BentoCollections />
      <Subscribe />
      <Values />
      <Footer />
    </CartProvider>
  );
}

export default App;
