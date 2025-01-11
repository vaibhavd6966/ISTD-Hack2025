import React from "react";
import "./css/GeneralChatBot.css"; // Custom CSS for styling the chatbot

const GeneralChatBot = () => {
  return (
    <div className="chatbot-container">
      <iframe
        title="General Chatbot"
        src="https://app.droxy.ai/guest-agent/6781fa29908753c48bde1b06"
        frameBorder="0"
        className="chatbot-frame"
      />
    </div>
  );
};

export default GeneralChatBot;
