import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import './Header.css';

function Header() {
  return (
    <header className="Header">
        <div className="Header-Logo">
            <img src={logo} alt="Logo Kasa" />
        </div>

        <nav className="Header-Navbar">
            <ul>
                <li className="Header-Navbar-Item active">
                  <NavLink to="/">Accueil</NavLink>
                </li>
                <li className="Header-Navbar-Item">
                  <NavLink to="/about">A Propos</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
