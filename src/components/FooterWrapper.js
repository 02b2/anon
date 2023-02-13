import "./FooterWrapper.css";

const FooterWrapper = ({ socialLinksImageUrl, socialLinksSvgUrl }) => {
  return (
    <div className="footer">
      <div className="company-social-content">
        <img
          className="whitepedrologo-2-icon1"
          alt=""
          src={socialLinksImageUrl}
        />
        <div className="enigma-designs-created-container">
          <p className="enigma-designs-created">{`ENIGMA DESIGNS CREATED WITH FIGMA & LOCOFY.AI`}</p>
          <p className="all-right-reserved">ALL RIGHT RESERVED 2023</p>
        </div>
        <img className="social-links-icon" alt="" src={socialLinksSvgUrl} />
      </div>
    </div>
  );
};

export default FooterWrapper;
