import "./Home.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <div className="title-box">
        <h1 className="title">MINDCHECK</h1>
        <p className="subtitle">
          Take a moment to check in with yourself.
        </p>
      </div>

      <button
        className="start-button"
        onClick={() => navigate("/about")}
      >
        START ASSESSMENT
      </button>

      <p className="footer-text">
        Anonymous • Confidential • For self-awareness only
      </p>

    </div>
  );
}


export default Home;
