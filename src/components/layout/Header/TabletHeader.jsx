import { Menu } from "lucide-react";
import Logo from "./components/Logo";
import IconNav from "./components/IconNav";

function MobileHeader() {
  return (
    <header className='h-14 px-4 py-4 flex w-full justify-between items-center border-b border-gray:200 lg:hidden'>
      <button>
        <Menu size={26} />
      </button>
      <div className=''>
        <Logo className='h-10 w-auto' />
      </div>

      {/* Icon Nav variant minial shows the opposite of variant full */}

      <IconNav variant='minimal' />
    </header>
  );
}

export default MobileHeader;
