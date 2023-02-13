import { useCallback, useEffect } from "react";
import FooterWrapper from "../components/FooterWrapper";
import SkillsContainer from "../components/SkillsContainer";
import SkillContentcard1 from "../components/SkillContentcard1";
import Skillcontentcard3 from "../components/Skillcontentcard3";
import Skillcontentcard2 from "../components/Skillcontentcard2";
import { useNavigate } from "react-router-dom";
import "./Skills.css";

const Skills = () => {
  const navigate = useNavigate();
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

  const onAboutContentClick = useCallback(() => {
    navigate("/about");
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

  return (
    <main className="skills" id="about">
      <img className="wave-81840-3-icon" alt="" src="../wave81840-3@2x.png" />
      <FooterWrapper
        socialLinksImageUrl="../whitepedrologo-2@2x.png"
        socialLinksSvgUrl="../sociallinks.svg"
      />
      <SkillsContainer />
      <main className="skills1" id="skills">
        <div className="skill-prof">
          <div className="front-end">
            <div className="css">
              <div className="css1">CSS</div>
              <img
                className="logoscss3-original-wordmark-icon"
                alt=""
                src="../logoscss3originalwordmark.svg"
                data-animate-on-scroll
              />
              <div className="loader">
                <img className="base-icon" alt="" src="../base.svg" />
                <img className="ellipse-icon" alt="" src="../ellipse.svg" />
                <div className="div">100%</div>
              </div>
            </div>
            <div className="react">
              <div className="react1">React</div>
              <img
                className="react-logo-icon"
                alt=""
                src="../slitherlogo-1@2x.png"
                data-animate-on-scroll
              />
              <div className="loader1">
                <img className="base-icon" alt="" src="../base1.svg" />
                <img className="ellipse-icon" alt="" src="../ellipse1.svg" />
                <div className="div">100%</div>
              </div>
            </div>
            <div className="html">
              <div className="html1">HTML</div>
              <img
                className="logoscss3-original-wordmark-icon"
                alt=""
                src="../logoshtml5originalwordmark.svg"
                data-animate-on-scroll
              />
              <div className="loader2">
                <img className="base-icon" alt="" src="../base2.svg" />
                <img className="ellipse-icon" alt="" src="../ellipse2.svg" />
                <div className="div">100%</div>
              </div>
            </div>
          </div>
          <SkillContentcard1 />
          <Skillcontentcard3 />
          <Skillcontentcard2 />
        </div>
      </main>
      <div className="nav">
        <img
          className="whitepedrologo-2-icon"
          alt=""
          src="../whitepedrologo-21@2x.png"
        />
        <div className="hamburger">
          <div className="hambuger-menu">
            <div className="hambuger-menu-child" />
            <div className="hambuger-menu-child" />
            <div className="hambuger-menu-child" />
          </div>
          <div className="nav-content">
            <button className="about-content" onClick={onAboutContentClick}>
              <img
                className="about-vector-icon"
                alt=""
                src="../aboutvector1.svg"
              />
              <button className="gallery">{`About `}</button>
            </button>
            <button className="about-content" onClick={onSkillsContentClick}>
              <img
                className="about-vector-icon"
                alt=""
                src="../skillsvector1.svg"
              />
              <button className="gallery">Certificates</button>
            </button>
            <button className="about-content" onClick={onGalleryContentClick}>
              <img
                className="about-vector-icon"
                alt=""
                src="../galleryvector1.svg"
              />
              <button className="gallery">Gallery</button>
            </button>
            <button className="contact-content" onClick={onContactContentClick}>
              <img
                className="about-vector-icon"
                alt=""
                src="../contactvector1.svg"
              />
              <button className="gallery">Contact</button>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
