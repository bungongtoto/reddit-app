import { NavLink } from "react-router";
import logo from "../../resources/images/reddit-logo.svg";
import Search from '../../features/search/Search'
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <NavLink to={"/"}>
        <img src={logo} alt="Reddit Logo" />
      </NavLink>
      <Search />
    </div>
  );
}

export default Header;
