import "./index.css";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
  const navigate = useNavigate()

  const goToPage = (path) => {
    navigate(path)
  }
  return (
    <div className="headers">
      <div className="">
        <div className="responsive">
          <h1 className="big-bold head">
            Providing Innovative Technical Solutions for Energy, Power, and
            Industrial Sectors
          </h1>
          <h2 className="">
            With over 50 years of combined experience, our multidisciplinary
            team delivers Innovative, Value Adding solutions.
          </h2>
          <div>
            <button className="secondary-button" onClick={() => goToPage("/services")}>Learn more</button>
            <button className="secondary-button" onClick={() => goToPage("/aboutus")}>About us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
