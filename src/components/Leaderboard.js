import React from "react";

const leaderboardData = [
  {
    username: "JohnDoe",
    points: 120,
    iconUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    username: "JaneDoe",
    points: 80,
    iconUrl: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  // Add more entries here
];

function Leaderboard() {
  return (
    <div className="bg-purple-500 p-4 rounded-lg">
      <h2 className="text-white text-lg font-bold mb-2">Leaderboard</h2>
      {leaderboardData.map((entry, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-2 border-b border-purple-400"
        >
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-4"
              src={entry.iconUrl}
              alt="User icon"
            />
            <span className="text-white">{entry.username}</span>
          </div>
          <span className="text-white font-bold">{entry.points} pts</span>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;