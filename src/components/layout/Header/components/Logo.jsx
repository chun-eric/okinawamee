import { Link } from "react-router-dom";
import mauimeeLogo from "../../../../assets/icons/Mauimee_logo.svg";

function Logo() {
  return (
    <Link to='/'>
      <img
        className='h-20 w-auto'
        src={mauimeeLogo} // Use the imported variable here
        alt='MauiMee Logo'
      />
    </Link>
  );
}

export default Logo;
