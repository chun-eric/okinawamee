import IconNav from "./components/IconNav";
import Logo from "./components/Logo";
import MainNav from "./components/MainNav";

function Header() {
  return (
    <>
      <header className='flex justify-between items-center'>
        <MainNav />
        <Logo />
        <IconNav />
      </header>
    </>
  );
}

export default Header;
