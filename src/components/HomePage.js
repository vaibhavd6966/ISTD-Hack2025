import React from "react";
import "./css/HomePage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import Arrow Right Icon

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="content">
                <h1 className="headline">
                    Transforming education with AI-driven chatbots to solve real-life programming challenges.
                </h1>
                <div className="subheading">
                    <strong>Learn. Solve. Succeed.</strong>
                </div>

                <div className="buttons-container">
                    <a href="/courses" className="explore-btn">
                        Explore Courses
                    </a>
                    <a href="/chatbot" className="chatbot-btn">
                        Chat with AI <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
