import { useEffect } from "react";
import "./Skillcontentcard2.css";

const Skillcontentcard2 = () => {
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

  return (
    <div className="dev-ops">
      <div className="typescript">
        <div className="typescript1">Typescript</div>
        <div className="logostypescript-plain">
          <img
            className="vector-icon"
            alt=""
            src="../vector.svg"
            data-animate-on-scroll
          />
        </div>
        <div className="loader9">
          <img className="base-icon9" alt="" src="../base9.svg" />
          <img className="ellipse-icon9" alt="" src="../ellipse9.svg" />
          <div className="div9">100%</div>
        </div>
      </div>
      <div className="python">
        <div className="python1">Python</div>
        <div className="loader10">
          <img className="base-icon9" alt="" src="../base10.svg" />
          <img className="ellipse-icon9" alt="" src="../ellipse10.svg" />
          <div className="div9">100%</div>
        </div>
        <img
          className="logospython-original-wordmark-icon"
          alt=""
          src="../logospythonoriginalwordmark.svg"
          data-animate-on-scroll
        />
      </div>
      <div className="javascript">
        <img
          className="logosjavascript-plain-icon"
          alt=""
          src="../logosjavascriptplain.svg"
          data-animate-on-scroll
        />
        <div className="typescript1">Javascript</div>
        <div className="loader11">
          <img className="base-icon9" alt="" src="../base11.svg" />
          <img className="ellipse-icon9" alt="" src="../ellipse11.svg" />
          <div className="div9">100%</div>
        </div>
      </div>
    </div>
  );
};

export default Skillcontentcard2;
