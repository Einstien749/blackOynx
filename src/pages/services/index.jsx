import "./index.css";
import Service_Header from "./components/service_header";
import Provided_Services from "./components/service_provided";

function Services() {
  return (
    <div className="services_page">
      <Service_Header />
      <Provided_Services />
    </div>
  );
}

export default Services;
