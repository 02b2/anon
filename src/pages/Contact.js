import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FooterWrapper from "../components/FooterWrapper";
import ContactFormContainer from "../components/ContactFormContainer";
import MainHeader from "../components/MainHeader";
import "./Contact.css";

const Contact = () => {
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

  return (
    <main className="contact1" id="Contact">
      <FooterWrapper
        socialLinksImageUrl="../whitepedrologo-26@2x.png"
        socialLinksSvgUrl="../sociallinks3.svg"
      />
      <ContactFormContainer />
      <MainHeader
        aboutVector="../aboutvector3.svg"
        about="About "
        skillsVector="../skillsvector3.svg"
        skills="Skills"
        galleryVector="../galleryvector3.svg"
        contactVector="../contactvector3.svg"
        propDisplay="none"
        propDisplay1="none"
        propDisplay2="none"
        onAboutContentClick={onAboutContentClick}
        onSkillsContentClick={onSkillsContentClick}
        onGalleryContentClick={onGalleryContentClick}
      />
    </main>
  );
};

export default Contact;
