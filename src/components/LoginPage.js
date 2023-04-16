import React from "react";
import {Link} from 'react-router-dom';


function LoginPage() {
  return (
    <div className="rounded flex flex-col items-center justify-center h-screen bg-purple-800">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Email or Username
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              type="text"
              id="username"
              name="username"
              placeholder="email / username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <a className="block text-gray-700 font-bold mt-2" href="/forgot-password">
              Forgot password?
            </a>
          </div>
          <Link to='/profile'
            className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-200"
            type="submit"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
