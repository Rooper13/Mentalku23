import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <footer className="rectangle-parent">
      <div className="frame-child" />
      <div className="contact-content-parent">
        <div className="contact-content">
          <img
            className="img-20240506-233046-1-icon"
            loading="lazy"
            alt=""
            src="/img-20240506-233046-1@2x.png"
          />
          <div className="contact-details">
            <h3 className="contact">Contact</h3>
            <div className="contact-methods">
              <div className="method-pairs">
                <div className="method-names">
                  <img
                    className="call-icon"
                    loading="lazy"
                    alt=""
                    src="/call.svg"
                  />
                  <div className="email-label">(0232) 8990 5556, 890 5557</div>
                </div>
                <div className="method-names1">
                  <img
                    className="message-icon"
                    loading="lazy"
                    alt=""
                    src="/message.svg"
                  />
                  <div className="mentalkugmailcom">mentalku@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="frame-item" loading="lazy" alt="" src="/vector-4.svg" />
        <div className="footer">
          <div className="footer-content">
            <img className="vector-icon1" alt="" src="/vector-21.svg" />
          </div>
          <div className="copyright-2024-mentalkuid">
            copyright 2024 @mentalku.id
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent4;