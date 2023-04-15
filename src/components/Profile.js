import React from 'react';

const Profile = () => {
  const userData = {
    name: 'John Doe',
    username: 'johndoe123',
    bloodGroup: 'A+',
    points: 100,
    previousDonationDate: '2022-03-15'
  };

  return (
    <div className="bg-purple-500 flex flex-col items-center justify-center p-4">
      <div className="flex flex-row justify-center items-center">
        <div className="w-24 h-24 rounded-full bg-gray-400"></div>
        <div className="ml-4">
          <h2 className="text-2xl font-bold text-white">{userData.name}</h2>
          <h3 className="text-lg text-gray-200">@{userData.username}</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white rounded-md shadow-md p-4">
          <h4 className="text-gray-500 font-semibold mb-2">Blood Group</h4>
          <p className="text-lg font-bold">{userData.bloodGroup}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <h4 className="text-gray-500 font-semibold mb-2">Points</h4>
          <p className="text-lg font-bold">{userData.points}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <h4 className="text-gray-500 font-semibold mb-2">Previous Donation Date</h4>
          <p className="text-lg font-bold">{userData.previousDonationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;