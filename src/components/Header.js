import "./Header.css";

const Header = ({
  gallery,
  onAboutContentClick,
  onSkillsContentClick,
  onGalleryContentClick,
  onContactContentClick,
  onContactClick,
}) => {
  return (
    <div className="nav2">
      <img
        className="whitepedrologo-2-icon3"
        alt=""
        src="../whitepedrologo-26@2x.png"
      />
      <div className="hamburger2">
        <div className="hambuger-menu2">
          <div className="hambuger-menu-child3" />
          <div className="hambuger-menu-child3" />
          <div className="hambuger-menu-child3" />
        </div>
        <div className="nav-content2">
          <button className="about-content2" onClick={onAboutContentClick}>
            <img
              className="about-vector-icon2"
              alt=""
              src="../aboutvector3.svg"
            />
            <button className="about3">{`About `}</button>
          </button>
          <button className="about-content2" onClick={onSkillsContentClick}>
            <img
              className="about-vector-icon2"
              alt=""
              src="../skillsvector3.svg"
            />
            <button className="about3">Skills</button>
          </button>
          <button className="about-content2" onClick={onGalleryContentClick}>
            <img
              className="about-vector-icon2"
              alt=""
              src="../galleryvector3.svg"
            />
            <button className="about3">{gallery}</button>
          </button>
          <button className="contact-content2" onClick={onContactContentClick}>
            <img
              className="about-vector-icon2"
              alt=""
              src="../contactvector3.svg"
            />
            <button className="about3" onClick={onContactClick}>
              Contact
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
