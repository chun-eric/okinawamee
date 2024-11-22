import { Search, User, ShoppingCart, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function IconNav({ variant = "full" }) {
  return (
    <div className='flex items-center space-x-6'>
      {variant === "full" && (
        <>
          <Link to='/search' className='hover:text-gray-700'>
            <Search size={24} />
          </Link>
          <Link to='/account' className='hover:text-gray-700'>
            <User size={24} />
          </Link>
          <Link to='/help' className='hover:text-gray-700'>
            <HelpCircle size={24} />
          </Link>
        </>
      )}
      <Link size={20} className='hover:text-gray-600'>
        <ShoppingCart />
      </Link>
    </div>
  );
}

export default IconNav;

IconNav.propTypes = {
  variant: PropTypes.string,
};
