import "./ContactFormContainer.css";

const ContactFormContainer = () => {
  return (
    <div className="contact-me-form">
      <div className="contact-me">Contact Us</div>
      <div className="user-input">
        <div className="content">
          <div className="naae">
            <div className="name">Name</div>
            <input
              className="email"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="naae">
            <div className="name">Email Address</div>
            <input
              className="number"
              type="text"
              placeholder="Enter your email address"
            />
          </div>
          <div className="naae">
            <div className="name">
              <span>Phone Number</span>
              <span className="optional"> (Optional)</span>
            </div>
            <input className="number" type="text" />
          </div>
        </div>
        <div className="msg-content">
          <div className="name">Message</div>
          <textarea className="message1" placeholder="Enter your message" />
        </div>
      </div>
      <button className="search-flights-button">
        <div className="button">Send message</div>
      </button>
    </div>
  );
};

export default ContactFormContainer;
