import "./Assessment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitWellness } from "../api";

function Assessment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Stress_Level: null,
    Anxiety_Score: null,
    Depression_Score: null,
    Sleep_Quality: null,
    Financial_Stress: null,
  });

  const handle = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: parseInt(value) }));
  };

  const handleSubmit = async () => {
    // Check all questions answered
    const unanswered = Object.values(formData).some(v => v === null);
    if (unanswered) {
      alert("Please answer all questions before submitting.");
      return;
    }

    // Map Sleep_Quality number to text (backend expects "Good"/"Average"/"Poor")
    const sleepMap = { 0: "Good", 1: "Good", 2: "Average", 3: "Poor" };
    const payload = {
      ...formData,
      Sleep_Quality: sleepMap[formData.Sleep_Quality],
    };

    navigate("/loading");

    try {
      const result = await submitWellness(payload);
      navigate("/result", { state: { result } });
    } catch (error) {
      alert("Could not connect to backend. Make sure Flask is running.");
      navigate("/assessment");
    }
  };

  const RadioGroup = ({ title, field, name }) => (
    <div className="question-group">
      <p className="question-title">{title}</p>
      <div className="options">
        {[["0", "0 - Not at all"], ["1", "1 - Mild"], ["2", "2 - Medium"], ["3", "3 - High"]].map(
          ([val, label]) => (
            <label key={val}>
              <input
                type="radio"
                name={name}
                value={val}
                checked={formData[field] === parseInt(val)}
                onChange={e => handle(field, e.target.value)}
              />
              {label}
            </label>
          )
        )}
      </div>
    </div>
  );

  return (
    <div className="assessment-container">
      <h2 className="assessment-title">Let's check in!</h2>
      <p className="assessment-subtitle">
        Answer a few questions to reflect on how you're feeling.
      </p>

      <div className="question-box">
        <RadioGroup title="Stress Level"     field="Stress_Level"     name="stress"   />
        <RadioGroup title="Anxiety Level"    field="Anxiety_Score"    name="anxiety"  />
        <RadioGroup title="Low Mood"         field="Depression_Score" name="mood"     />
        <RadioGroup title="Sleep Quality"    field="Sleep_Quality"    name="sleep"    />
        <RadioGroup title="Financial Stress" field="Financial_Stress" name="finance"  />
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        SUBMIT
      </button>

      <p className="footer-text">
        Anonymous • Confidential • For self-awareness only
      </p>
    </div>
  );
}

export default Assessment;