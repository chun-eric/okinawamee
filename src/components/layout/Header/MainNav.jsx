//  This main nav will go to the left side of the Header Component
import { Link } from "react-router-dom";

function MainNav() {
  // Adding path and link to each nav item using an array
  const navItems = [
    { path: "/collections/mens", label: "Men" },
    { path: "/collections/womens", label: "Women" },
    { path: "/collections/kids", label: "Kids" },
    {
      path: "/collections/sale",
      label: "Sale",
      className: "text-orange-600 hover:text-orange-800",
    },
  ];

  console.log("navItems", navItems); // Move console.log outside of return

  return (
    <nav className='hidden lg:flex items-center space-x-8'>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={` uppercase text-sm font-bold tracking-[1.7px] text-gray-900 hover:text-gray-700 hover:underline ${
            item.className || ""
          } `}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default MainNav;
