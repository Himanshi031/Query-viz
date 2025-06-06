import { Link } from "react-router-dom";
import logo from "../../images/database.png";

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} width='100px' height='100%' alt='atlan logo' />
        </Link>
      </div>
    </div>
  );
};

export default Header;