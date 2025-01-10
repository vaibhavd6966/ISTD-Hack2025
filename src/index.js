import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import ChatBots from './components/ChatBots';  // Import ChatBots component
import Courses from './components/Courses';  // Import Courses component
import AIQuizMentor from './components/AIQuizMentor';  // Import AIQuizMentor component
import GeneralChatBot from './components/GeneralChatBot';
import Challenges from './components/Challenges';
import Goals from './components/Goals';
import Tasks from './components/Tasks';
import Careers from './components/Careers';
import EID from './components/EIDevelopment';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Sidebar /> {/* Sidebar will be present on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage for the root path */}
        <Route path="/chatbot" element={<ChatBots />} /> {/* ChatBots page */}
        <Route path="/courses" element={<Courses />} /> {/* Courses page */}
        <Route path="/AIQuizMentor" element={<AIQuizMentor />} /> {/* AIQuizMentor page */}
        <Route path="/GeneralBot" element={<GeneralChatBot />} /> {/* GeneralBot page */}
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/eid" element={<EID />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
