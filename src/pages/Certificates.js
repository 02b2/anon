import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FooterContainer from "../components/FooterContainer";
import "./Certificates.css";

const Certificates = () => {
  const navigate = useNavigate();

  const onAboutContentClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onSkillsContentClick = useCallback(() => {
    navigate("/skills");
  }, [navigate]);

  const onGalleryContentClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onContactContentClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <main className="certificates" id="gallery">
      <Header
        gallery="Gallery"
        onAboutContentClick={onAboutContentClick}
        onSkillsContentClick={onSkillsContentClick}
        onGalleryContentClick={onGalleryContentClick}
        onContactContentClick={onContactContentClick}
        onContactClick={onContactClick}
      />
      <main className="certificates-card" id="certificates">
        <img
          className="cybrary-cert-malware-threats-p-icon"
          alt=""
          src="../cybrarycertmalwarethreats-page-1-1@2x.png"
        />
        <img
          className="cybrary-cert-post-exploitation-icon"
          alt=""
          src="../cybrarycertpostexploitationhacking-page-1-1@2x.png"
        />
        <img
          className="cybrary-cert-web-application-p-icon"
          alt=""
          src="../cybrarycertwebapplicationpentesting-page-1-1@2x.png"
        />
        <img
          className="cybrary-cert-command-line-basi-icon"
          alt=""
          src="../cybrarycertcommandlinebasics-page-1-1@2x.png"
        />
        <img
          className="cs50x-1-copy-page-1-1"
          alt=""
          src="../cs50x-1--copy-page-1-1@2x.png"
        />
      </main>
      <FooterContainer
        whitepedrologo2="whitepedrologo-23@2x.png"
        socialLinks="sociallinks1.svg"
      />
    </main>
  );
};

export default Certificates;
