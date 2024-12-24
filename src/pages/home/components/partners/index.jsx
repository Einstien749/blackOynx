import "./index.css";
import { useEffect, useRef } from "react";
import NexusLogo from "../../../../assets/images/nexusLogo.png";
import MaxserveLogo from "../../../../assets/images/MaxserveLogo.png";
import HommastonLogo from "../../../../assets/images/hommastonlogo.png";
import BengineUniversalLogo from "../../../../assets/images/bengineUniversalLogo.jpg";
import VidyaTechLogo from "../../../../assets/images/VidyaTechLogo.png";
import AutoScrollCarousel from "../carousel";

const carouselElements = [
  {
    key: 0,
    image: NexusLogo,
  },
  {
    key: 1,
    image: MaxserveLogo,
  },
  {
    key: 2,
    image: HommastonLogo,
  },
  {
    key: 3,
    image: BengineUniversalLogo,
  },
  {
    key: 4,
    image: VidyaTechLogo,
  },
];

const PartnersSection = () => {

  return (
    <div className="partnersection">
      <div className="responsive">
        <div className="partner-holder">
          <h2 className="bold font-large">Our Strategic Partners & Clients</h2>
          <div>
            <AutoScrollCarousel slides={carouselElements} options={{ loop: true, speed: 20 }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
