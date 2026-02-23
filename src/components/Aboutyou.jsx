import "./Aboutyou.css";
import { useNavigate } from "react-router-dom";

function Aboutyou() {
  const navigate = useNavigate();

  return (
    <div className="about-container">

      {/* Heading */}
      <h2 className="about-title">A little about you</h2>

      <p className="about-text">
        This information helps us understand responses better.
      </p>
      <p className="about-text-strong">
        Your answers are anonymous.
      </p>

      {/* Age */}
      <div className="field-group">
        <label className="field-label">AGE</label>
        <input
          type="number"
          placeholder="Enter your age"
          className="age-input"
        />
      </div>

      {/* Gender */}
      <div className="field-group">
        <label className="field-label">GENDER</label>

        <div className="radio-group">
          <label>
            <input type="radio" name="gender" /> Female
          </label>
          <label>
            <input type="radio" name="gender" /> Male
          </label>
          <label>
            <input type="radio" name="gender" /> Non-binary
          </label>
          <label>
            <input type="radio" name="gender" /> Prefer not to say
          </label>
        </div>
      </div>

      {/* Year of Study */}
      <div className="field-group">
        <label className="field-label">Year of Study</label>

        <div className="radio-group">
          <label>
            <input type="radio" name="year" /> 1st Year
          </label>
          <label>
            <input type="radio" name="year" /> 2nd Year
          </label>
          <label>
            <input type="radio" name="year" /> 3rd Year
          </label>
          <label>
            <input type="radio" name="year" /> 4th+ Year
          </label>
        </div>
      </div>

      {/* Continue Button */}
      <button
        className="continue-button"
        onClick={() => navigate("/assessment")}
      >
        CONTINUE
      </button>

      {/* Footer */}
      <p className="footer-text">
        Anonymous • Confidential • For self-awareness only
      </p>

    </div>
  );
}

export default Aboutyou;
