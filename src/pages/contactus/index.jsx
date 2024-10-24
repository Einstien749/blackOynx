import "./index.css";

function ContactUs() {
  return (
    <div className="contactuspage">
      <div className="responsive">
        <h2 className="bold font-large">Get in touch</h2>
        <div className="form-holder">
          <input type="text" placeholder="Surname" />
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="Phone number" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
