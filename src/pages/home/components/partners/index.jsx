import "./index.css";
import Logo from "../../../../assets/images/onyx_logo.svg";

const PartnersSection = () => {
  return (
    <div className="partnersection">
      <div className="responsive">
        <div className="partner-holder">
          <h2 className="bold font-large">Our Strategic Partners</h2>
          <div>
            <div>
              <img src={Logo} />
              <img src={Logo} />
              <img src={Logo} />
            </div>
            <div>
              <img src={Logo} />
              <img src={Logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
