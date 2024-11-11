import { Link } from "react-router-dom";
import logo from "../../../../assets/icons/okinawamee_logo.svg";

function Logo() {
  return (
    <Link to='/'>
      <img
        className='h-12 md:h-14 lg:h-20 w-auto '
        src={logo} // Use the imported variable here
        alt='Okinawa mee Logo'
      />
    </Link>
  );
}

export default Logo;
