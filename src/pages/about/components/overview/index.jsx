import AboutImage from "../../../../assets/images/aboutImage.svg"
import "./index.css"

const OverviewSection = () => {
  return (
    <div className="overview">
      <div className="responsive">
        <div>
          <div>
            <img src={AboutImage} />
          </div>
          <div>
            <p className="bold font-large">Company's Overview</p>
            <p>
              BLACK ONYX ENERGY & RESOURCES delivers technical support and
              consultancy services to the energy, power, manufacturing, and
              marine industry; working in partnership with our clients and world
              class partners to provide integrated end to end solutions, thus
              ensuring efficiency, quality, and value.
            </p>
            <p>
              We are a team of highly experienced and talented multidisciplinary
              professionals & consultants with over 50 years combined industry
              experience that deliver innovative, value-adding solutions to our
              clients, which is driven by our true values of trust, integrity,
              and excellence. We are committed to delivering world-class
              solutions by engaging highly skilled team and ensuring
              professional delivery of our services through knowledge,
              expertise, experience, technology, and innovation.
            </p>
            <p>
              BLACK ONYX ENERGY is motivated to gain reputation for safe,
              on-time on-budget, high-quality work; a reputation that is
              embedded in our culture.
            </p>
            <p>
              Our services are client-focused, identifying and understanding
              motivations, and working in partnership to achieve set goals.
            </p>
          </div>
        </div>
        <div>
          <button className="primary-button bold">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection