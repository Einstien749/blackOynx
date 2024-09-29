import "./index.css";
import Logo from "../../assets/images/onyx_logo.svg";
import Twitter from "../../assets/images/onyx_twitter.svg";
import LinkedIn from "../../assets/images/onyx_linkedIn.svg";
import Facebook from "../../assets/images/onyx_facebook.svg";
import Instagram from "../../assets/images/onyx_instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="responsive">
        <div className="footer-wrapper">
          <div className="img-holder">
            <img src={Logo} />
          </div>
          <div className="footer-links">
            <p>Quick Links</p>
            <div className="page-links">
              <p>About Us</p>
              <p>Services</p>
              <p>Contact Us</p>
            </div>
            <div>
              <p>3891 Ranchview Dr. Richardson, California 62639</p>
              <p>(209) 555-0104</p>
              <p>testing@testmail.com</p>
            </div>
          </div>
          <div className="getInTouch">
            <p>Get in touch</p>
            <div className="socials">
              <a href="">
                <img src={Twitter} />
              </a>
              <a href="">
                <img src={Instagram} />
              </a>
              <a href="">
                <img src={Facebook} />
              </a>
              <a href="">
                <img src={LinkedIn} />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright2024 Blackonyx
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
