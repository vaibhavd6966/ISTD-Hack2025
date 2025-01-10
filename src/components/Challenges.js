import React from "react";
import "./css/Challenges.css";

const Challenges = () => {
    const challenges = [
        {
            title: "LeetCode - Array Manipulation",
            difficulty: "Easy",
            coins: 50,
            link: "#",
        },
        {
            title: "Codeforces - String Matching",
            difficulty: "Medium",
            coins: 100,
            link: "#",
        },
        {
            title: "LeetCode - Dynamic Programming",
            difficulty: "Hard",
            coins: 150,
            link: "#",
        },
        {
            title: "Codeforces - Graph Theory",
            difficulty: "Medium",
            coins: 120,
            link: "#",
        },
        {
            title: "LeetCode - Binary Search",
            difficulty: "Easy",
            coins: 60,
            link: "#",
        },
        {
            title: "Codeforces - Sorting Algorithms",
            difficulty: "Hard",
            coins: 200,
            link: "#",
        },
        {
            title: "LeetCode - Backtracking",
            difficulty: "Medium",
            coins: 90,
            link: "#",
        },
        {
            title: "Codeforces - Greedy Algorithms",
            difficulty: "Easy",
            coins: 70,
            link: "#",
        },
    ];

    return (
        <div className="challenges-container">

            <div className="credits">
                <span>
                    <img src="/images/coin_icon.png" alt="Coins" className="coin-icon" />
                    Credit Coins: 500
                </span>
            </div>


            <div className="challenges-grid">
                {challenges.map((challenge, index) => (
                    <div key={index} className="challenge-card">
                        <div className="challenge-info">
                            <h3 className="challenge-title">{challenge.title}</h3>
                            <div className="difficulty-and-coins">
                                <p className="difficulty">Difficulty: {challenge.difficulty}</p>
                                <div className="coins">
                                    <img
                                        src="/images/coin_icon.png"
                                        alt="Coin"
                                        className="coin-icon"
                                    />
                                    <span>{challenge.coins}</span>
                                </div>
                                <button className="solve-btn">Solve</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Challenges;
