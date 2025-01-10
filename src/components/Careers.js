import React, { useState } from 'react';
import './css/Careers.css'; // Assuming a separate CSS file for styling

const Careers = () => {
  // State for career paths, courses, job opportunities, etc.
  const [careerPaths, setCareerPaths] = useState([
    { title: 'Web Developer', description: 'Develop websites and web applications', skills: ['HTML', 'CSS', 'JavaScript'], courses: ['React', 'Node.js'] },
    { title: 'Data Scientist', description: 'Analyze and interpret complex data to drive business decisions', skills: ['Python', 'SQL', 'Machine Learning'], courses: ['Data Science with Python', 'SQL Basics'] },
    { title: 'Graphic Designer', description: 'Create visual concepts and designs for digital and print media', skills: ['Photoshop', 'Illustrator', 'UI/UX'], courses: ['Photoshop Basics', 'UX/UI Design'] },
  ]);

  const [jobOpportunities, setJobOpportunities] = useState([
    { title: 'Junior Web Developer', company: 'Tech Co.', location: 'Remote', description: 'Looking for a passionate web developer with experience in React and Node.js.' },
    { title: 'Data Analyst', company: 'Data Corp.', location: 'New York', description: 'Join our team to analyze large datasets and generate actionable insights.' },
    { title: 'Junior Designer', company: 'Designers Hub', location: 'San Francisco', description: 'Seeking a creative graphic designer proficient in Photoshop and Illustrator.' },
  ]);

  const [resumeContent, setResumeContent] = useState('');

  // Handle resume content change
  const handleResumeChange = (event) => {
    setResumeContent(event.target.value);
  };

  return (
    <div className="careers-container">
      <h1 className="careers-header">Career Development</h1>

      {/* Career Paths Section */}
      <section className="career-paths">
        <h2>Career Paths</h2>
        <div className="career-cards">
          {careerPaths.map((career, index) => (
            <div key={index} className="career-card">
              <h3>{career.title}</h3>
              <p>{career.description}</p>
              <p><strong>Key Skills:</strong> {career.skills.join(', ')}</p>
              <p><strong>Recommended Courses:</strong> {career.courses.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="job-opportunities">
        <h2>Job Opportunities</h2>
        <div className="job-cards">
          {jobOpportunities.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Builder Section */}
      <section className="resume-builder">
        <h2>Resume Builder</h2>
        <textarea
          placeholder="Start typing your resume..."
          value={resumeContent}
          onChange={handleResumeChange}
          rows="10"
          cols="50"
        />
        <div className="resume-actions">
          <button className="save-resume-btn">Save Resume</button>
          <button className="download-resume-btn">Download Resume</button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
