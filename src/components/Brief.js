import React from 'react';

const BloodDonationCard = () => {
  return (
    <div className="flex justify-center p-5 bg-purple-800">
      <div className="flex flex-col w-3/4 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-justify">
          <h2 className="text-4xl text-gray-700 font-bold mb-4">Benefits of Blood Donation</h2>
          <p className="text-lg text-gray-700">
            Donating blood has many benefits for the donors as well as the recipients. Some of the
            benefits of blood donation include:
          </p>
          <ul className="list-disc text-gray-700 ml-6 mt-4 text-lg">
            <li>Helping patients in need of blood transfusions</li>
            <li>Reducing the risk of heart diseases and stroke</li>
            <li>Burning extra calories</li>
            <li>Reducing the risk of cancer</li>
            <li>Boosting your mental health</li>
            <li>Getting a free health check-up</li>
          </ul>
        </div>
        <div className="flex flex-row gap-8">
          <div className="bg-white rounded-lg text-gray-700 shadow-lg p-8 text-justify flex-1">
            <h2 className="text-2xl font-bold mb-4">Dos before donating blood</h2>
            <ul className="list-disc ml-6 mt-4 text-lg">
              <li>Drink plenty of water before donation</li>
              <li>Eat a healthy meal before donation</li>
              <li>Get a good night's sleep before donation</li>
              <li>Wear comfortable and loose-fitting clothes</li>
              <li>Bring a valid ID proof with you</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-justify flex-1">
            <h2 className="text-2xl text-gray-700 font-bold mb-4">Don'ts before donating blood</h2>
            <ul className="list-disc text-gray-700 ml-6 mt-4 text-lg">
              <li>Do not consume alcohol before donation</li>
              <li>Do not smoke before donation</li>
              <li>Do not take aspirin or any blood thinners before donation</li>
              <li>Do not donate blood if you are feeling unwell or have an infection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodDonationCard;
