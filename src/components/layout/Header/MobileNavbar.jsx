import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import logo from "/src/assets/icons/okinawamee_logo.svg";

const MobileNavbar = ({ isOpen, onClose }) => {
  const navItems = [
    { path: "/collections/mens", label: "Men" },
    { path: "/collections/womens", label: "Women" },
    { path: "/collections/kids", label: "Kids" },
    { path: "/collections/sale", label: "Sale" },
    { path: "/account", label: "Account" },
    { path: "/help", label: "Help" },
  ];

  return (
    <div
      className={`fixed inset-0 bg-white transfor ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
    >
      {/* Mobile Nav Header */}
      <div className='fixed top-0 left-0 right-0 flex items-center justify-between p-4 border-b'>
        <button onClick={onClose} className='p-2' aria-label='Close menu'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18 18 6M6 6l12 12'
            />
          </svg>
        </button>

        {/* Logo */}
        <Link to='/'>
          <img
            className='h-12 md:h-14 lg:h-20 w-auto '
            src={logo} // Use the imported variable here
            alt='Okinawa mee Logo'
          />
        </Link>

        {/* Search and Cart */}
        <div className='flex items-center space-x-2'>
          <Link to='/search'>
            <Search size={24} />
          </Link>
          <Link to='/cart'>
            <ShoppingCart size={24} />
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className='flex flex-col h-[calc(100%-5rem)]'>
        <nav className='divide-y mt-20'>
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className='flex items-center  justify-between px-5 py-4 hover:bg-gray-50'
              onClick={onClose}
            >
              <span
                className={`${
                  item.label === "Account" || item.label === "Help"
                    ? "text-sm text-gray-500 font-poppins"
                    : "text-md font-bold uppercase "
                } `}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
