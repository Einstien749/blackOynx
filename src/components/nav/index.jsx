import "./index.css";
import Logo from "../../assets/images/onyx_logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const navigate = useNavigate();
  const [mobileNav, setMobileNav] = useState(false);
  const goTo = (path) => {
    if(mobileNav){
      setMobileNav(false)
    }
    navigate(path);
  };
  const handleClose = () => {
    setMobileNav(false)
  };
  const handleOpen = () => {
    setMobileNav(true)
  };
  return (
    <div className="nav">
      <div className="responsive">
        <div className="nav-holder">
          <div className="img-holder">
            <img src={Logo} />
          </div>
          <div className="links">
            <p onClick={() => goTo("/")}>Home</p>
            <p onClick={() => goTo("/aboutus")}>About Us</p>
            <p onClick={() => goTo("/services")}>Services</p>
          </div>
          <button
            className="primary-button bold nav-button"
            onClick={() => goTo("/contactus")}
          >
            Contact Us
          </button>
          {!mobileNav ? <button className="mobile" onClick={() => handleOpen()}></button> : <button className="mobile close" onClick={() => handleClose()}></button>}
        </div>
      </div>
      {mobileNav && <div className="mobile-list">
        <div className="responsive">
          <p onClick={() => goTo("/")}>Home</p>
          <p onClick={() => goTo("/aboutus")}>About Us</p>
          <p onClick={() => goTo("/services")}>Services</p>
          <button className="primary-button" onClick={() => goTo("/contactus")}>Contact Us</button>
        </div>
      </div>}
    </div>
  );
}

export default Nav;
