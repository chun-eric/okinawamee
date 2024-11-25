import MainLayout from "../components/layout/MainLayout/MainLayout";
import Home from "../pages/Home";
import MensCollection from "../components/layout/ProductCollections/MensCollection";
import WomensCollection from "../components/layout/ProductCollections/WomensCollection";
import KidsCollection from "../components/layout/ProductCollections/KidsCollection";
import SaleCollection from "../components/layout/ProductCollections/SaleCollection";
import LimitedCollection from "../components/layout/ProductCollections/LimitedCollection";
import ProductDetails from "../pages/ProductDetails";
import Account from "../pages/account/Account";
import Orders from "../pages/account/Orders";
import Settings from "../pages/account/Settings";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Search from "../pages/Search";
import Login from "../pages/Login";
import About from "../pages/footer/About";
import Help from "../pages/footer/Help";
import Contact from "../pages/footer/Contact";
import Privacy from "../pages/footer/Privacy";
import Terms from "../pages/footer/Terms";
import NotFound from "../pages/NotFound";
import Delivery from "../pages/footer/Delivery";
import Returns from "../pages/footer/Returns";
import Faqs from "../pages/footer/Faqs";

// Define routes configuration
export const routerConfig = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "collections",
        children: [
          { path: "mens", element: <MensCollection /> },
          { path: "womens", element: <WomensCollection /> },
          { path: "kids", element: <KidsCollection /> },
          { path: "sale", element: <SaleCollection /> },
          { path: "limited", element: <LimitedCollection /> },
        ],
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "account",
        children: [
          { index: true, element: <Account /> },
          { path: "orders", element: <Orders /> },
          { path: "settings", element: <Settings /> },
          { path: "login", element: <Login /> },
        ],
      },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "search", element: <Search /> },
      { path: "login", element: <Login /> },

      // Footer routes
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "delivery", element: <Delivery /> },
      { path: "help", element: <Help /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "returns", element: <Returns /> },
      { path: "faqs", element: <Faqs /> },

      // Error Not Found
      { path: "*", element: <NotFound /> },
    ],
  },
];
