import { Menu, Search } from "lucide-react";
import Logo from "./Logo";
import IconNav from "./IconNav";

function MobileHeader() {
  return (
    <header className='lg:hidden h-16 px-5  py-10 flex w-full justify-between items-center  border-b shadow-md'>
      <button>
        <Menu size={26} />
      </button>
      <div className=' absolute  left-1/2 transform -translate-x-1/2 '>
        <Logo />
      </div>

      {/* Icon Nav variant minial shows the opposite of variant full */}
      <div className='flex space-x-3'>
        <Search size={24} />
        <IconNav variant='minimal' />
      </div>
    </header>
  );
}

export default MobileHeader;
