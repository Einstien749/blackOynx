import "./index.css";

function ContactUsSection() {
  return (
    <div className="contactussection">
      <div className="responsive">
        <p className="bold font-large">Contact Us</p>
        <div className="input-holder">
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Message"/>
          <button className="normal-1">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
