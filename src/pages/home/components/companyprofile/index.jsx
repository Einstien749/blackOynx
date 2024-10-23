import "./index.css";
import ExperienceImage from "../../../../assets/images/customerInsight.svg";
import CoreImage from "../../../../assets/images/customerInsight1.svg";
import CommitmentImage from "../../../../assets/images/customerInsight2.svg";
import { useState } from "react";

function CompanyProfileSection() {
  const [hover, setHover] = useState([false, false, false]);
  const data = [
    {
      image: ExperienceImage,
      header: "Engineering & Project Advisory",
      body: "Providing end-to-end support for your engineering and project needs.",
    },
    {
      image: CoreImage,
      header: "Technical Consultant Sourcing",
      body: "Connecting you with top-tier professionals for specialized engineering roles.",
    },
    {
      image: CommitmentImage,
      header: "Industry 4.0 (Digital Twin)",
      body: "Leveraging advanced technology to optimize asset integrity and performance.",
    },
  ];
  const handleMouseEnter = (index) => {
    let holder;
    if(index == 0){
      holder = [true, false, false]
    }
    else if(index == 1){
      holder = [false, true, false]
    }
    else{
      holder = [false, false, true]
    }
    setHover(holder)
  }

  const handleMouseLeave = () => {
    setHover([false, false, false])
  }
  return (
    <div className="companyprofilesection">
      <div className="responsive">
        <div className="company-details">
          <div>
            <h2 className="bold font-large">
              Company Profile
            </h2>
          </div>
          <div>
            <p>
              BLACK ONYX ENERGY & RESOURCES delivers technical support and
              consultancy services to the energy, power, manufacturing, and
              marine industry; working in partnership with our clients and world
              class partners to provide integrated end to end solutions, thus
              ensuring efficiency, quality, and value.
            </p>
            <button className="secondary-button bold company-button">
              Learn more
            </button>
          </div>
        </div>
        <div className="tech-holder">
          <h4 className="normal-1 font-merge">
            Our focused areas are Engineering & Project Advisory, Technical
            Consultant Sourcing, and Industry 4.0 (Digital Twin)
          </h4>
          <div>
            {data.map((item, index) => {
              return (
                <div className="services" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()}>
                  <div>
                    <div className={!hover[index] ? "serve" : "serve serve-background"}>
                      <h4 className="normal-1 font-merge">{item.header}</h4>
                      <p>{item.body}</p>
                      <button className="secondary-button bold">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfileSection;
