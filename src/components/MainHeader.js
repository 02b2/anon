import { useMemo } from "react";
import "./MainHeader.css";

const MainHeader = ({
  aboutVector,
  about,
  skillsVector,
  skills,
  galleryVector,
  contactVector,
  propDisplay,
  propDisplay1,
  propDisplay2,
  onAboutContentClick,
  onSkillsContentClick,
  onGalleryContentClick,
  onContactContentClick,
}) => {
  const skillsContentStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const galleryContentStyle = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const contactContentStyle = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  return (
    <div className="nav1">
      <img
        className="whitepedrologo-2-icon2"
        alt=""
        src="../whitepedrologo-21@2x.png"
      />
      <div className="hamburger1">
        <div className="hambuger-menu1">
          <div className="line-div" />
          <div className="line-div" />
          <div className="line-div" />
        </div>
        <div className="nav-content1">
          <button className="about-content1" onClick={onAboutContentClick}>
            <img className="about-vector-icon1" alt="" src={aboutVector} />
            <button className="about2">{about}</button>
          </button>
          <button
            className="about-content1"
            onClick={onSkillsContentClick}
            style={skillsContentStyle}
          >
            <img className="about-vector-icon1" alt="" src={skillsVector} />
            <button className="about2">{skills}</button>
          </button>
          <button
            className="about-content1"
            onClick={onGalleryContentClick}
            style={galleryContentStyle}
          >
            <img className="about-vector-icon1" alt="" src={galleryVector} />
            <button className="about2">Gallery</button>
          </button>
          <button
            className="contact-content1"
            onClick={onContactContentClick}
            style={contactContentStyle}
          >
            <img className="about-vector-icon1" alt="" src={contactVector} />
            <button className="about2">Contact</button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
