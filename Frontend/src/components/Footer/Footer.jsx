import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus nam numquam praesentium hic dolorum? Amet debitis
            adipisci ducimus sequi, sunt, labore veniam, voluptatibus
            necessitatibus accusamus numquam omnis non esse optio?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>FOLLOW US</h2>
          <ul>
            <li>+91 9573322990</li>
            <li>cantact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        &copy; 2024 Tomato.com - All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
