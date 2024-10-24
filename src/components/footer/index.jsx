import "./index.css";
import Logo from "../../assets/images/onyx_logo.svg";
import Twitter from "../../assets/images/onyx_twitter.svg";
import LinkedIn from "../../assets/images/onyx_linkedIn.svg";
import Facebook from "../../assets/images/onyx_facebook.svg";
import Instagram from "../../assets/images/onyx_instagram.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const goTo = (path) => {
    console.log(path);
    navigate(path);
  };
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="footer">
      <div className="responsive">
        <div className="footer-wrapper">
          <div className="img-holder">
            <img src={Logo} onClick={() => scrollTop()} />
          </div>
          <div className="footer-links normal-1">
            <p className="font-medium">Quick Links</p>
            <div className="page-links">
              <p onClick={() => goTo("/aboutus")}>About Us</p>
              <p onClick={() => goTo("/services")}>Services</p>
              <p onClick={() => goTo("/contactus")}>Contact Us</p>
            </div>
            <div className="light">
              <p>3891 Ranchview Dr. Richardson, California 62639</p>
              <p>(209) 555-0104</p>
              <p>testing@testmail.com</p>
            </div>
          </div>
          <div className="getInTouch">
            <p className="font-medium normal-1">Get in touch</p>
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
