import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className=''>
      <div>
        <ul>
          <li>
            <a href=''>Men</a>
          </li>
          <li>
            <a href=''>Women</a>
          </li>
          <li>
            <a href=''>Kids</a>
          </li>
          <li>
            <a href=''>Sale</a>
          </li>
        </ul>
      </div>
      <div className=''>
        <img src='' alt='logo' />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
