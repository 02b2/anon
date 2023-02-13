import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HeroContainer.css";

const HeroContainer = () => {
  const navigate = useNavigate();

  const onButtonContainedTextAndIcoClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onButtonContainedTextAndIco1Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="hero-items">
      <div className="enjoy-your-visiit-container">
        <span className="enjoy-your-visiit-container1">
          <p className="blank-line">&nbsp;</p>
          <p className="enjoy-your-visiit">ENJOY YOUR VISIIT!!!</p>
        </span>
      </div>
      <Button
        className="buttoncontained-text-and-ico"
        variant="contained"
        color="primary"
        href="/about"
        onClick={onButtonContainedTextAndIcoClick}
      >
        Enter Site
      </Button>
      <Button
        className="buttoncontained-text-and-ico"
        variant="contained"
        color="primary"
        href="/about"
        onClick={onButtonContainedTextAndIco1Click}
      >
        Buy me coffee!!!
      </Button>
      <img
        className="whitepedrologoedited-1-icon"
        alt=""
        src="../whitepedrologoedited-1@2x.png"
      />
    </div>
  );
};

export default HeroContainer;
