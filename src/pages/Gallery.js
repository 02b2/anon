import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FooterContainer from "../components/FooterContainer";
import "./Gallery.css";

const Gallery = () => {
  const navigate = useNavigate();

  const onAboutContentClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onSkillsContentClick = useCallback(() => {
    navigate("/skills");
  }, [navigate]);

  const onGalleryContentClick = useCallback(() => {
    navigate("/certificates");
  }, [navigate]);

  const onContactContentClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <main className="gallery1" id="gallery">
      <Header
        gallery="Certificates"
        onAboutContentClick={onAboutContentClick}
        onSkillsContentClick={onSkillsContentClick}
        onGalleryContentClick={onGalleryContentClick}
        onContactContentClick={onContactContentClick}
      />
      <section className="gallery-card" id="Gallery">
        <img
          className="snaccidents-page-group-image-1-icon"
          alt=""
          src="../snaccidentspagegroupimage-1@2x.png"
        />
        <img
          className="n-1-icon"
          alt=""
          src="../49896434-549886948859282-8219659577306644480-n-1@2x.png"
        />
        <img
          className="cybor-bust-background-2-icon1"
          alt=""
          src="../cyborbustbackground-2@2x.png"
        />
        <img
          className="security-analyst-background-1-icon"
          alt=""
          src="../securityanalystbackground-1@2x.png"
        />
        <img
          className="logo-white-large-1-icon"
          alt=""
          src="../logo-white-large-1@2x.png"
        />
        <img
          className="cryptoescondido-1-icon"
          alt=""
          src="../cryptoescondido-1@2x.png"
        />
        <img className="logo-01-01-1-icon" alt="" src="../logo0101-1@2x.png" />
        <img
          className="logo-for-post-1"
          alt=""
          src="../logo-for-post-1@2x.png"
        />
      </section>
      <FooterContainer
        whitepedrologo2="whitepedrologo-25@2x.png"
        socialLinks="../sociallinks2.svg"
      />
    </main>
  );
};

export default Gallery;
