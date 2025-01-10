import React from "react";
import "./css/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faTrophy, faBullseye, faTasks, faLaptopCode, faPaintBrush, faMedal } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">AIQuizMentor</div>

      <div className="nav-links">
        <div className="nav-item">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <a href="/">Home</a>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <a href="/career">Career</a>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faTrophy} className="icon" />
          <a href="/challenges">Challenges</a>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faBullseye} className="icon" />
          <a href="/goals">Goals</a>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faTasks} className="icon" />
          <a href="/tasks">Tasks</a>
        </div>
      </div>

      <hr className="divider" />

      <div className="profile">
        <div className="profile-photo">
          <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" />
        </div>
        <div className="profile-details">
          <div className="user-name">Vaibhav Devkar</div>
          <div className="user-email">mrvd6966@gmail.com</div>
        </div>
      </div>

      <div className="badges-section">
        <h3>Badges</h3>
        <div className="badges">
          <div className="badge" style={{ backgroundColor: "#4CAF50" }}>
            <FontAwesomeIcon icon={faLaptopCode} className="badge-icon" />
            Code Hero
          </div>
          <div className="badge" style={{ backgroundColor: "#FF6F61" }}>
            <FontAwesomeIcon icon={faPaintBrush} className="badge-icon" />
            Creative Genius
          </div>
          <div className="badge" style={{ backgroundColor: "#2196F3" }}>
            <FontAwesomeIcon icon={faMedal} className="badge-icon" />
            Challenge Master
          </div>
          <div className="badge" style={{ backgroundColor: "#9C27B0" }}>
            <FontAwesomeIcon icon={faBullseye} className="badge-icon" />
            Goal Achiever
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
