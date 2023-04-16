import React from "react";
import {Link} from 'react-router-dom';

function SignupPage() {
  return (
    <div className="flex rounded flex-col items-center justify-center h-screen bg-purple-800">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl-gray font-bold mb-4">Sign Up</h2>
        <form className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Create Password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              type="password"
              id="password"
              name="password"
              placeholder="Create your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              id="gender"
              name="gender"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="bloodGroup">
              Blood Group
            </label>
            <select
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              id="bloodGroup"
              name="bloodGroup"
            >
              <option value="">Select your blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="          B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="contact">
          Contact
        </label>
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
          type="text"
          id="contact"
          name="contact"
          placeholder="Enter your contact number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
          Location
        </label>
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
          type="text"
          id="location"
          name="location"
          placeholder="Enter your location"
        />
      </div>
      <div className="col-span-2">
        <Link to='/leaderboard'
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </Link>
      </div>
    </form>
  </div>
</div>
);
}

export default SignupPage;

  