import { NavLink } from "react-router";
import logo from "../../resources/images/reddit-logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <NavLink to={"/"}>
        <img src={logo} alt="Reddit Logo" />
      </NavLink>
    </div>
  );
}

export default Header;
