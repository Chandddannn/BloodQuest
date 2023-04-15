import React from 'react';


const Profile = () => {
  const userData = {
    name: 'John Doe',
    username: 'johndoe123',
    bloodGroup: 'A+',
    points: 100,
    previousDonationDate: '15-03-2022'
  };

  return (
    <div className="bg-purple-500 rounded md flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-md p-5">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-400"></div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
            <h3 className="text-lg text-gray-600">@{userData.username}</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-md shadow-md p-4">
            <h4 className="text-gray-500 font-semibold mb-2">Blood Group</h4>
            <p className="text-gray-700 font-bold">{userData.bloodGroup}</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <h4 className="text-gray-500 font-semibold mb-2">Points</h4>
            <p className="text-gray-700 font-bold">{userData.points}</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <h4 className="text-gray-500 font-semibold mb-2">Previous Donation Date</h4>
            <p className="text-gray-700 font-bold">{userData.previousDonationDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
