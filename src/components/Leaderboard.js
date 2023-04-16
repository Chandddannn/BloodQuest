import React from "react";

const leaderboardData = [
    {
      username: "EmilyDavis",
      points: 2347,
      iconUrl: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        "username": "AbbySmith",
        "points": 1874,
        "iconUrl": "https://randomuser.me/api/portraits/women/30.jpg"
      },
    {
      username: "SaraSmith",
      points: 1572,
      iconUrl: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      "username": "JuliaGreen",
      "points": 1489,
      "iconUrl": "https://randomuser.me/api/portraits/women/67.jpg"
    },
  {
    username: "JohnDoe",
    points: 1200,
    iconUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  {
      username: "RobertGarcia",
      points: 1032,
      iconUrl: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      "username": "EmilyDavis",
      "points": 938,
      "iconUrl": "https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
      username: "AlexLee",
      points: 827,
      iconUrl: "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
        username: "JasmineKim",
        points: 501,
        iconUrl: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      username: "DavidJones",
      points: 341,
      iconUrl: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      username: "EmilyDavis",
      points: 2347,
      iconUrl: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        "username": "AbbySmith",
        "points": 1874,
        "iconUrl": "https://randomuser.me/api/portraits/women/30.jpg"
      },
    {
      username: "SaraSmith",
      points: 1572,
      iconUrl: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      "username": "JuliaGreen",
      "points": 1489,
      "iconUrl": "https://randomuser.me/api/portraits/women/67.jpg"
    },
  {
    username: "JohnDoe",
    points: 1200,
    iconUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  {
      username: "RobertGarcia",
      points: 1032,
      iconUrl: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      "username": "EmilyDavis",
      "points": 938,
      "iconUrl": "https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
      username: "AlexLee",
      points: 827,
      iconUrl: "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
        username: "JasmineKim",
        points: 501,
        iconUrl: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      username: "DavidJones",
      points: 341,
      iconUrl: "https://randomuser.me/api/portraits/men/45.jpg"
    },
   
  // Add more entries here
];

function Leaderboard() {
  return (
<div className="w-full h-[100vh] bg-purple-800 flex items-center justify-center">
<div className="bg-purple-500 p-4 h-[80%] overflow-y-scroll rounded-lg w-[80%]">
      <h2 className="text-white text-[50px] font-bold mb-10">Leader Board</h2>
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
</div>
  );
}

export default Leaderboard;