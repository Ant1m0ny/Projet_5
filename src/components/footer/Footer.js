import logoWhite from "../../assets/images/logo_white.svg";
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
        <div>
            <img src={logoWhite} alt="Logo Kasa" />
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
  );
}

export default Footer;
