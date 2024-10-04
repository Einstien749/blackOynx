import "./index.css";
import Logo from "../../assets/images/onyx_logo.svg";
import {useNavigate} from "react-router-dom";

function Nav() {

  const navigate = useNavigate()
  const goTo = (path) => {
    console.log(path)
    navigate(path)
  }
  return (
    <div className="nav">
      <div className="responsive">
        <div className="nav-holder">
          <div className="img-holder">
            <img src={Logo} />
          </div>
          <div className="links">
            <p onClick={() => goTo('/')}>Home</p>
            <p onClick={() => goTo('/aboutus')}>About Us</p>
            <p onClick={() => goTo('/services')}>Services</p>
          </div>
          <button className="primary-button bold" onClick={() => goTo('/contactus')}>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
