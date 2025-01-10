import React from "react";
import { Link } from "react-router-dom";
import "./css/ChatBots.css";

const ChatBots = () => {
    return (
        <div className="chatbots">
            <div className="section ai-quiz-mentor">
                <h2>AIQuizMentor</h2>
                <p>
                    AIQuizMentor is an AI-based career-guiding chatbot designed to help
                    individuals choose the right career based on their interests.
                    If you're confused about which career path to take, you can attempt the
                    career test. AIQuizMentor will analyze your responses and suggest the
                    best career options tailored for you.
                </p>
                <Link to="/AIQuizMentor" className="cta-button aiquiz-btn">
                    Go to AIQuizMentor
                </Link>
            </div>

            <div className="section general-chat">
                <h2>General Chat</h2>
                <p>
                    Have questions about coding and programming? Whether you're stuck
                    with an error, need quick suggestions, or want help debugging your
                    code, the General Chat bot is here for you. Discuss any programming
                    topics or ask general questions to AI and get instant assistance.
                </p>
                <Link to="/GeneralBot" className="cta-button generalchat-btn">
                    Go to General AI ChatBot
                </Link>
            </div>
        </div>
    );
};

export default ChatBots;
