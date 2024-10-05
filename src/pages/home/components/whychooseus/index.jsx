import "./index.css";
import ExperienceImage from "../../../../assets/images/customerInsight.svg";
import CoreImage from "../../../../assets/images/customerInsight1.svg";
import CommitmentImage from "../../../../assets/images/customerInsight2.svg";

function WhyChooseUsSection() {
    
    const data = [{
        image: ExperienceImage,
        header: "Experience",
        body: "Over 50 years of combined industry experience.",
    }, {
        image: CoreImage,
        header: "Core Values",
        body: "Trust, Integrity, Excellence.",
    }, {
        image: CommitmentImage,
        header: "Commitment",
        body: "Delivering world-class solutions on time, on budget, with the highest quality.",
    }]
  return (
    <div className="whychooseussection">
      <div className="responsive">
        <p className="bold font-large">Why Choose Us</p>
        <div className="insight-holder">
          {data.map((item) =>{
            return (
                <div className="insight">
                    <div><img src={item.image} /></div>
                    <div><p className="bold font-more-medium">{item.header}</p><p>{item.body}</p></div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUsSection;