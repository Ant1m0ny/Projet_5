import logo from "../../images/logo.svg";
import './Header.css';

function Header() {
  return (
    <header className="Header">
        <div className="Header-Logo">
            <img src={logo} alt="Logo Kasa" />
        </div>

        <nav className="Header-Navbar">
            <ul>
                <li className="Header-Navbar-Item active">Accueil</li>
                <li className="Header-Navbar-Item">À propos</li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
