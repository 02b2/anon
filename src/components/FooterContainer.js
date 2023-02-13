import "./FooterContainer.css";

const FooterContainer = ({ whitepedrologo2, socialLinks }) => {
  return (
    <div className="footer1">
      <div className="company-social-content1">
        <img className="whitepedrologo-2-icon4" alt="" src={whitepedrologo2} />
        <div className="enigma-designs-created-container1">
          <p className="enigma-designs-created1">{`ENIGMA DESIGNS CREATED WITH FIGMA & LOCOFY.AI`}</p>
          <p className="all-right-reserved1">ALL RIGHT RESERVED 2023</p>
        </div>
        <img className="social-links-icon1" alt="" src={socialLinks} />
      </div>
    </div>
  );
};

export default FooterContainer;
