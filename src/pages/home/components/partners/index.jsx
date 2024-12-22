import "./index.css";
import Logo from "../../../../assets/images/onyx_logo.svg";
import NexusLogo from "../../../../assets/images/nexusLogo.png";
import MaxserveLogo from "../../../../assets/images/MaxserveLogo.png";
import HommastonLogo from "../../../../assets/images/hommastonlogo.png";
import BengineUniversalLogo from "../../../../assets/images/bengineUniversalLogo.jpg";
import VidyaTechLogo from "../../../../assets/images/VidyaTechLogo.png";

const PartnersSection = () => {
  return (
    <div className="partnersection">
      <div className="responsive">
        <div className="partner-holder">
          <h2 className="bold font-large">Our Strategic Partners & Clients</h2>
          <div>
            <div>
              <img src={NexusLogo} />
              <img src={MaxserveLogo} />
              <img src={VidyaTechLogo} />
              <img src={BengineUniversalLogo} />
              <img src={HommastonLogo} />
            </div>
            <div>
              <img src={BengineUniversalLogo} />
              <img src={HommastonLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
