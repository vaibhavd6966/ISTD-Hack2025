import React, { useState } from "react";
import "./css/EIDevelopment.css";

// A mock of EI self-assessment results
const EI_Score = {
  selfAwareness: 75,
  selfRegulation: 60,
  empathy: 50,
  socialSkills: 80
};

const EIDevelopment = () => {
  const [score, setScore] = useState(EI_Score);

  const handleTakeQuiz = () => {
    // Logic for quiz-taking would go here
    // This could be a redirect to another page or a modal to take the quiz.
    alert("You are now taking the Emotional Intelligence Quiz!");
  };

  const renderTips = () => {
    // Tips based on EI scores
    const tips = [];
    if (score.selfAwareness < 70) {
      tips.push("Practice mindfulness and reflect on your emotions daily.");
    }
    if (score.selfRegulation < 70) {
      tips.push("Try deep breathing exercises when you feel overwhelmed.");
    }
    if (score.empathy < 70) {
      tips.push("Listen actively and try to understand the feelings of others.");
    }
    if (score.socialSkills < 70) {
      tips.push("Work on your communication skills and collaborate more effectively.");
    }

    return tips.map((tip, index) => (
      <div key={index} className="tip">
        <span role="img" aria-label="lightbulb">
          💡
        </span>
        {tip}
      </div>
    ));
  };

  return (
    <div className="ei-development">
      <h1>Emotional Intelligence Development</h1>
      <div className="quiz-section">
        <h2>Take the Emotional Intelligence Quiz</h2>
        <button className="quiz-btn" onClick={handleTakeQuiz}>
          Start Quiz
        </button>
      </div>

      <div className="score-section">
        <h2>Your Emotional Intelligence Scores</h2>
        <div className="score">
          <p>Self-Awareness: {score.selfAwareness}%</p>
          <p>Self-Regulation: {score.selfRegulation}%</p>
          <p>Empathy: {score.empathy}%</p>
          <p>Social Skills: {score.socialSkills}%</p>
        </div>
      </div>

      <div className="tips-section">
        <h2>Tips for Improving Your EI</h2>
        <div className="tips-list">{renderTips()}</div>
      </div>
    </div>
  );
};

export default EIDevelopment;
