import OilPipeline from "../../../../assets/images/oil.jfif";
import PorthacourtRefinery from "../../../../assets/images/port-harcourt-refinery.jpg";
import FutureOil from "../../../../assets/images/future_oil_gas.jfif";
import "./index.css";

const Provided_Services = () => {
  return (
    <div className="provided_service">
      <div className="responsive">
        <div className="services_holder">
          <div className="serv">
            <div>
              <h4 className="font-merge normal-1">
                Engineering & Project Support Services & Advisory
              </h4>
              <p>
                Our services include Project Engineering Support, Field
                Development support, Engineering Design and Reviews. We engage
                expertise of multi-discipline professionals with local and
                international consulting engineering experience to offer
                high-end services to the energy and industrial markets in
                Nigeria and with numerous successes accredited to our team
                members with experience, expertise and character to support all
                your project and business goals.
              </p>
            </div>
            <div>
              <img src={PorthacourtRefinery} />
            </div>
          </div>

          <div className="serv">
            <div>
              <h4 className="font-merge normal-1">
                Industry 4.0 (DIGITAL TWIN FOR ASSET INTEGRITY MANAGEMENT)
              </h4>
              <p>
                Digital Twin is a key technology for Vidya Software. All the
                process and data from the real object is directly linked with
                the virtual representation. Therefore, it delivers a constant
                flow of data and information, which are used to predict,
                simulate and give insights for the manager of the industrial
                plant. Vidya solutions are designed to optimize asset integrity
                activities through real-time operational data and online control
                over your industrial plant. Vidya is committed to employ digital
                solutions to enhance asset integrity management for industrial
                plants to achieve a new digital era. Black Onyx is the Sale
                Representative of Vidya Technology in Nigeria. For more
                information on the full services and products, please visit
                https://www.vidyatec.com
              </p>
            </div>
            <div>
              <img src={FutureOil} />
            </div>
          </div>

          <div className="serv">
            <div>
              <h4 className="font-merge normal-1">
                Technical Consultant Sourcing
              </h4>
              <p>
                Black Onyx has experience in the sourcing of highly experienced
                technical professional consultants in the energy and power
                sector; we assist companies or their clients to source and
                identify the right resources for various discipline engineering
                roles in the upstream, mid-stream and downstream sectors, for
                contract purpose.
                At Black Onyx, our clients trust us to proffer solutions
                tailored to suit their specific needs.
              </p>
              
            </div>
            <div>
              <img src={OilPipeline} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provided_Services;
