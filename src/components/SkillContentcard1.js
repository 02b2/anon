import "./SkillContentcard1.css";

const SkillContentcard1 = () => {
  return (
    <div className="dev">
      <div className="visual-studio">
        <div className="visual-studio1">
          <p className="visual">Visual</p>
          <p className="studio">Studio</p>
        </div>
        <img
          className="visual-studio-icon-2019-1"
          alt=""
          src="../visual-studio-icon-2019-1@2x.png"
        />
        <div className="loader3">
          <img className="base-icon3" alt="" src="../base3.svg" />
          <img className="ellipse-icon3" alt="" src="../ellipse3.svg" />
          <div className="div3">100%</div>
        </div>
      </div>
      <div className="linux">
        <div className="linux1">Linux</div>
        <div className="loader4">
          <img className="base-icon3" alt="" src="../base4.svg" />
          <img className="ellipse-icon3" alt="" src="../ellipse4.svg" />
          <div className="div3">100%</div>
        </div>
        <img
          className="logoslinux-original-icon"
          alt=""
          src="../logoslinuxoriginal.svg"
        />
      </div>
      <div className="sql">
        <div className="sql1">SQL</div>
        <img
          className="logossqlite-plain-wordmark-icon"
          alt=""
          src="../logossqliteplainwordmark.svg"
        />
        <div className="loader5">
          <img className="base-icon3" alt="" src="../base5.svg" />
          <img className="ellipse-icon3" alt="" src="../ellipse5.svg" />
          <div className="div3">100%</div>
        </div>
      </div>
    </div>
  );
};

export default SkillContentcard1;
