import "./Footer.css";
import imageSVG from '../../assets/LOGOFD.svg';
function Footer() {
    const content = (
      <footer>
        <img src={imageSVG} alt="logo kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
    return content
}

export default Footer