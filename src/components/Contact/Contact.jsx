import "./Contact.css";

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="mailto:osamajaber231@gmail.com" method="get" enctype="text/plain">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="E-mail Address" />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="E-mail Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </div>
  );
}

export default Contact;