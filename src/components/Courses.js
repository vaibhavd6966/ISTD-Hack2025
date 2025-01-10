import React from "react";
import { FaClock, FaUserFriends, FaRupeeSign } from "react-icons/fa";
import "./css/Courses.css";

const Courses = () => {
    const courses = [
        {
            title: "Full-Stack Web Development",
            image: "/images/full_stack.png",
            description: "Master both frontend and backend development using JavaScript, React, and Node.js.",
            duration: "6 Months",
            price: "25,000",
            enrolled: "1,200",
        },
        {
            title: "Python for Data Science",
            image: "/images/python_ds.jpg",
            description: "Learn Python and its libraries like NumPy, Pandas, and Matplotlib to analyze data.",
            duration: "4 Months",
            price: "18,000",
            enrolled: "950",
        },
        {
            title: "Machine Learning Essentials",
            image: "/images/ml.webp",
            description: "A beginner-friendly course to learn machine learning concepts and algorithms.",
            duration: "5 Months",
            price: "22,000",
            enrolled: "780",
        },
        {
            title: "DevOps and Cloud Computing",
            image: "/images/devops.avif",
            description: "Gain expertise in CI/CD, Docker, Kubernetes, and cloud platforms like AWS.",
            duration: "6 Months",
            price: "30,000",
            enrolled: "600",
        },
        {
            title: "Cybersecurity Fundamentals",
            image: "/images/csf.jpg",
            description: "Understand the basics of network security, ethical hacking, and data protection.",
            duration: "3 Months",
            price: "15,000",
            enrolled: "1,100",
        },
        {
            title: "Mobile App Development",
            image: "/images/mad.png",
            description: "Build cross-platform mobile apps using React Native and Flutter.",
            duration: "5 Months",
            price: "20,000",
            enrolled: "870",
        },
    ];

    return (
        <div className="courses-container">
            <h1 className="courses-title">Available Courses</h1>
            <div className="courses-grid">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <img src={course.image} alt={course.title} className="course-image" />
                        <h2 className="course-title">{course.title}</h2>
                        <p className="course-description">{course.description}</p>
                        <div className="course-info">
                            <p>
                                <FaClock className="icon" /> {course.duration}
                            </p>
                            <p>
                                <FaRupeeSign className="icon" /> {course.price}
                            </p>
                            <p>
                                <FaUserFriends className="icon" /> {course.enrolled} Students
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
