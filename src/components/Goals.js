import React, { useState } from 'react';
import './css/Goals.css'; // Assuming you have a separate CSS file for styling

const Goals = () => {
  // State to manage the user's goals
  const [goal, setGoal] = useState('');
  const [progress, setProgress] = useState(0); // Progress range from 0 to 100
  const [motivationalMessage, setMotivationalMessage] = useState('');

  // Handle input change for goal
  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  // Simulate goal progress update
  const handleProgressUpdate = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    } else {
      setMotivationalMessage('You have reached your goal! Great job!');
    }
  };

  return (
    <div className="goals-container">
      <h1 className="goals-header">Set and Track Your Goals</h1>

      <div className="goal-setting">
        <h2>Set Your SMART Goal</h2>
        <div className="goal-input">
          <input
            type="text"
            placeholder="Enter your goal"
            value={goal}
            onChange={handleGoalChange}
          />
        </div>
      </div>

      <div className="goal-progress">
        <h2>Your Progress</h2>
        <div className="progress-bar-container">
          <progress value={progress} max="100" />
        </div>
        <div className="progress-info">
          <span>Progress: {progress}%</span>
          <button onClick={handleProgressUpdate} className="update-progress-btn">
            Update Progress
          </button>
        </div>
      </div>

      <div className="ai-recommendations">
        <h2>AI Recommendations</h2>
        <p>Based on your progress, the AI suggests:</p>
        {progress < 50 ? (
          <ul>
            <li>Break down your goal into smaller tasks.</li>
            <li>Set aside dedicated time daily for your goal.</li>
            <li>Find a mentor to guide you through the process.</li>
          </ul>
        ) : progress < 100 ? (
          <ul>
            <li>Keep up the hard work!</li>
            <li>Review your progress weekly and adjust accordingly.</li>
            <li>Celebrate small milestones along the way.</li>
          </ul>
        ) : (
          <ul>
            <li>Congratulations on reaching your goal!</li>
            <li>Reflect on your achievements and plan your next goal.</li>
          </ul>
        )}
      </div>

      <div className="motivational-tips">
        <h2>Motivational Tips</h2>
        <p>{motivationalMessage || "Stay focused and keep pushing forward!"}</p>
      </div>
    </div>
  );
};

export default Goals;
