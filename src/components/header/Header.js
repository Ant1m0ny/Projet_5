import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import './Header.scss';

function Header() {
  return (
    <header className="Header">
        <div className="Header-Logo">
            <img src={logo} className="Header-Logo" alt="Logo Kasa" />
        </div>

        <nav className="Header-Navbar">
            <ul>
                <li className="Header-Navbar-Item">
                  <NavLink to="/" className={({isActive}) => `${isActive ? 'active' : ''}`}>
                    Accueil
                  </NavLink>
                </li>
                <li className="Header-Navbar-Item">
                  <NavLink to="/about" className={({isActive}) => `${isActive ? 'active' : ''}`}>
                    A Propos
                  </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
