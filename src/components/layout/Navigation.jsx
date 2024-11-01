import { Home, Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className=''>
      <ul>
        <li>
          <a href='/'>Search</a>
        </li>
        <li>
          <a href='/products'>User</a>
        </li>
        <li>
          <a href='/cart'>Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
