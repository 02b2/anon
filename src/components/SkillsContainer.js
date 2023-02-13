import "./SkillsContainer.css";

const SkillsContainer = () => {
  return (
    <div className="skills-card">
      <img
        className="story-image-icon"
        alt=""
        src="../story-escondido@2x.png"
      />
      <img
        className="story-image-icon1"
        alt=""
        src="../story-escondido1@2x.png"
      />
      <img
        className="story-image-icon2"
        alt=""
        src="../story-escondido2@2x.png"
      />
      <img
        className="story-image-icon3"
        alt=""
        src="../story-escondido3@2x.png"
      />
      <div className="experienced-in-designing">
        Experienced in designing UI/UX utilizing vanilla CSS, Tailwind
      </div>
      <div className="heavily-involved-in">
        Heavily involved in Web3 layer1 and layer 2 smart contract, writing and
        auditing
      </div>
      <div className="experienced-in-sql">
        Experienced in SQL database’s, Linux and visual studio code
      </div>
      <div className="developed-uiux-using-container">
        <p className="developed-uiux-using">Developed UI/UX using typescript</p>
        <p className="developed-uiux-using">{`JavaScript frameworks and React `}</p>
        <p className="to-increase-target">
          to increase target audience engagement for new web3 cryptocurrency
          projects
        </p>
      </div>
    </div>
  );
};

export default SkillsContainer;
