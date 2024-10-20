import OilPipeline from "../../../../assets/images/oil.jfif";
import "./index.css";

const Provided_Services = () => {
  return (
    <div className="provided_service">
      <div className="responsive">
        <div className="services_holder">
          <div className="serv">
            <div>
              <p className="font-medium bold">
                Engineering & Project Support Services & Advisory
              </p>
              <p>
                Our services include Project Engineering Support, Field
                Development support, Engineering Design and Reviews.
              </p>
              <p>
                We engage expertise of multi-discipline professionals with local
                and international consulting engineering experience to offer
                high-end services to the energy and industrial markets in
                Nigeria and with numerous successes accredited to our team
                members with experience, expertise and character to support all
                your project and business goals.
              </p>
            </div>
            <div>
              <img src={OilPipeline} />
            </div>
          </div>

          <div className="serv">
            <div>
              <p className="font-medium bold">
                Industry 4.0 (DIGITAL TWIN FOR ASSET INTEGRITY MANAGEMENT)
              </p>
              <p>
                Digital Twin is a key technology for Vidya Software. All the
                process and data from the real object is directly linked with
                the virtual representation. Therefore, it delivers a constant
                flow of data and information, which are used to predict,
                simulate and give insights for the manager of the industrial
                plant.
              </p>
              <p>
                Vidya solutions are designed to optimize asset integrity
                activities through real-time operational data and online control
                over your industrial plant.
              </p>
              <p>
                Vidya is committed to employ digital solutions to enhance asset
                integrity management for industrial plants to achieve a new
                digital era.
              </p>
              <p>
                Black Onyx is the Sale Representative of Vidya Technology in
                Nigeria.
              </p>
              <p>
                For more information on the full services and products, please
                visit https://www.vidyatec.com
              </p>
            </div>
            <div>
              <img src={OilPipeline} />
            </div>
          </div>

          <div className="serv">
            <div>
              <p className="font-medium bold">
                Technical Consultant Sourcing
              </p>
              <p>
                Black Onyx has experience in the sourcing of highly experienced
                technical professional consultants in the energy and power
                sector; we assist companies or their clients to source and
                identify the right resources for various discipline engineering
                roles in the upstream, mid-stream and downstream sectors, for
                contract purpose.
              </p>
              <p>
                At Black Onyx, our clients trust us to proffer solutions
                tailored to suit their specific needs
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
