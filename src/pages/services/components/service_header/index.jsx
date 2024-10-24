import "./index.css";
import { useNavigate } from "react-router-dom";

const Service_Header = () => {
  const navigate = useNavigate()
  const goToPage = (path) => {
    navigate(path)
  }
  return (
    <div className="service_header">
      <div>
        <div className="responsive">
          <h1 className="big-bold head font-extralarge">
            Our focused areas are Engineering & Project Advisory, Technical
            Consultant Sourcing, and Industry 4.0 (Digital Twin)
          </h1>
          <div className="button-holder">
            <button
              className="primary-button"
              onClick={() => goToPage("/contactus")}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_Header;