import IconNav from "./IconNav";
import Logo from "./Logo";
import MainNav from "./MainNav";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Mobile Header Component */}
      <div className='lg:hidden'>
        <header className='w-full fixed top-0 z-[9999] bg-white'>
          <MobileHeader />
        </header>
        {/* Spacer */}
        <div className='h-20'></div>
      </div>

      {/* Desktop Header Component */}
      <header className='hidden lg:block '>
        <div className=' px-8 py-10 flex justify-between items-center  border-b shadow-md'>
          <MainNav />

          <Link to='/' className='absolute left-1/2 transform -translate-x-1/2'>
            <Logo />
          </Link>

          <IconNav variant='full' />
        </div>
      </header>
    </>
  );
}

export default Header;
