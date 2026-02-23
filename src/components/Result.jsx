import "./Result.css";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const result = state?.result;

  // Fallback if someone lands here directly with no data
  if (!result) {
    return (
      <div className="result-container">
        <p>No result found. Please complete the assessment first.</p>
        <button onClick={() => navigate("/assessment")}>Go back</button>
      </div>
    );
  }

  const emoji = result.level === "Low" ? "😌" : result.level === "Moderate" ? "😐" : "😔";

  const tips = {
    Low:      ["Keep up your current routines.", "Protect your sleep schedule.", "Stay connected with friends."],
    Moderate: ["Break big tasks into smaller goals.", "Try 5 minutes of deep breathing.", "Talk to someone you trust."],
    High:     ["Reach out to your campus counselling service.", "Schedule breaks away from screens.", "You don't have to manage this alone."],
  };

  return (
    <div className="result-container">
      <h2 className="result-title">Your check-in result</h2>

      <div className="result-box">
        <p className="result-emoji">{emoji}</p>
        <p className="result-text">Level: <strong>{result.level}</strong></p>
        <p className="result-text">Certainty: <strong>{result.confidence}</strong></p>
        <p className="result-text">{result.message}</p>
      </div>

      <div className="result-tips">
        <p className="tips-title">Suggested next steps</p>
        {(tips[result.level] || []).map((tip, i) => (
          <p key={i} className="tip-item">• {tip}</p>
        ))}
      </div>

      <button className="result-button" onClick={() => navigate("/")}>
        CHECK IN AGAIN
      </button>

      <p className="result-footer">
        This tool is for self-reflection only and not professional advice.
      </p>
    </div>
  );
}

export default Result;