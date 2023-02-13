import HeroContainer from "../components/HeroContainer";
import "./Welcome.css";

const Welcome = () => {
  return (
    <main className="welcome" id="Welcome">
      <div className="hero">
        <h1 className="header-welcome" id="Landing-page-header">
          <h1 className="welcome1">WELCOME</h1>
        </h1>
        <HeroContainer />
      </div>
    </main>
  );
};

export default Welcome;
