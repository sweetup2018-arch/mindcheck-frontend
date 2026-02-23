import "./Loading.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  // Simulate processing time
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/result");
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">

      <p className="loading-text">Analyzing your input...</p>

      <div className="processing-pill">Processing</div>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <div className="secondary-bar"></div>

      <p className="footer-text">
        Anonymous • Confidential • For self-awareness only
      </p>

    </div>
  );
}

export default Loading;
