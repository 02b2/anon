import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterWrapper from "../components/FooterWrapper";
import MainHeader from "../components/MainHeader";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const onAboutContentClick = useCallback(() => {
    navigate("/skills");
  }, [navigate]);

  const onSkillsContentClick = useCallback(() => {
    navigate("/certificates");
  }, [navigate]);

  const onGalleryContentClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onContactContentClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onGalleryButtonClick = useCallback(() => {
    window.open("/gallery");
  }, []);

  return (
    <main className="about" id="about">
      <img className="wave-81840-2-icon" alt="" src="../wave81840-2@2x.png" />
      <FooterWrapper
        socialLinksImageUrl="../whitepedrologo-2@2x.png"
        socialLinksSvgUrl="../sociallinks.svg"
      />
      <MainHeader
        aboutVector="../aboutvector.svg"
        about="Skills"
        skillsVector="../skillsvector.svg"
        skills="Certificates"
        galleryVector="../galleryvector.svg"
        contactVector="../contactvector.svg"
        propDisplay="flex"
        propDisplay1="flex"
        propDisplay2="flex"
        onAboutContentClick={onAboutContentClick}
        onSkillsContentClick={onSkillsContentClick}
        onGalleryContentClick={onGalleryContentClick}
        onContactContentClick={onContactContentClick}
      />
      <section className="about-card" id="About content">
        <img
          className="cybor-bust-background-2-icon"
          alt=""
          src="../cyborbustbackground-1@2x.png"
          data-animate-on-scroll
        />
        <div className="graphic-designer">GRAPHIC DESIGNER</div>
        <div className="years-vehicle-wrapping-container">
          <p className="years-vehicle-wrapping">
            2+ years vehicle wrapping (on/off road race cars) T shirt printing
          </p>
          <p className="years-vehicle-wrapping"> flyer/poster design</p>
          <p className="years-vehicle-wrapping"> social media logo/banner</p>
          <p className="general-advertising-design">{` general advertising design 6+ years `}</p>
        </div>
        <div className="check-out-some">Check out some of my design work</div>
        <button className="gallery-button" onClick={onGalleryButtonClick}>
          <h2 className="button-card-description" id="graphic-text">
            GALLERY
          </h2>
        </button>
        <img
          className="harvard-university-logo-1-icon"
          alt=""
          src="../2332335504-harvarduniversitylogo-1@2x.png"
        />
        <div className="harvard-university-computer">
          Harvard University Computer Science Graduate
        </div>
        <div className="soc-1-analyst">{`SOC 1 ANALYST `}</div>
        <img
          className="security-analyst-background-2-icon"
          alt=""
          src="../securityanalystbackground-2@2x.png"
        />
        <div className="years-vehicle-wrapping-container">
          Trained as a SOC 1 analyst via cybrary online
        </div>
        <h2 className="smart-contract-auditor" id="SOC1-heading">
          SMART CONTRACT AUDITOR
        </h2>
        <img
          className="openzeppelin-1024x686-1-icon"
          alt=""
          src="../openzeppelin1024x686-1@2x.png"
        />
        <p className="junior-smart-contract" id="Soc1-content">
          Junior smart contract auditor
        </p>
        <img className="e-commerce-card-image" alt="" src="../image-5@2x.png" />
        <div className="soc-1-analyst">E-Commerce Expert</div>
        <div className="years-vehicle-wrapping-container">{`10+ years experience in e-commerce `}</div>
      </section>
    </main>
  );
};

export default About;
