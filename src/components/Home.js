import {Link} from 'react-router-dom';
import React from 'react';
import Leaderboard from './Leaderboard';
import Logo from './images/BloodQuest.png'
import QuestPage from './Quest';
import Profile from './Profile';
import SignupPage from './Signup';
import LoginPage from './LoginPage';
import BloodDonationCard from './Brief';

function Home() {
  return (
    <div className="relative bg-purple-800 text-white">
      <header className="container ">
        <nav className="flex flex-cols items-center justify-between bg-purple-600 py-4 px-12 w-[100vw] ">
          <img className='h-8 w-8' src={Logo} alt="BloodQuest"></img>
          <ul className="flex">
            <li className="ml-4 text-xl"><Link to='/quest-page'>Quest</Link></li>
            <li className="ml-4 text-xl"><Link to='/leaderboard'>Leaderboard</Link></li>
            <li className="ml-4 text-xl"><Link to='/profile'>Profile</Link></li>

          </ul>
        </nav>
      </header>
      <main className="container mx-auto ">
        <div>
        <section className="text-center mg-16 h-[100vh] flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2">
            <img src={Logo} alt="Donate blood" className="mx-auto max-h-[60vh] mb-8" />
          </div>
          <div className="md:w-1/3">
            <h2 className="text-5xl font-bold mb-8 ">Join the BloodQuest</h2>
            <p className="text-xl mb-8">Donate blood and help save lives</p>
          <div className="flex justify-center">
            <Link to='/signup' href="#register" className="bg-white text-purple-500 py-4 px-10 mx-4 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition duration-300 inline-block">Register Now</Link>
            <Link to='/login' href="#register" className="bg-white text-purple-500 py-4 px-10 mx-4 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition duration-300 inline-block">Login</Link>
          </div>
        </div>
     </section>




        
        </div>
        <section className="container mx-auto mb-16 h-[100vh]">
          <h3 className="text-3xl font-bold mb-8">Why Donate Blood?</h3>
          <ul className="text-xl">
            <li className="mb-4">Blood transfusions save millions of lives each year</li>
            <li className="mb-4">Blood cannot be manufactured, it can only come from generous donors</li>
            <li className="mb-4">Donating blood can have health benefits for the donor</li>
          </ul>
        </section>
        <section className="text-center h-[100vh]">
          <h3 className="text-3xl font-bold mb-8">Success Stories</h3>
          <p className="text-xl mb-8">Read about some of the lives that have been saved thanks to blood donors like you.</p>
          <a href="#stories" className="bg-white text-purple-500 py-4 px-10 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition duration-300 inline-block">Read More</a>
        </section>

        <section>

          <BloodDonationCard/>
          <Leaderboard/>

        </section>

      </main>
      <footer className="text-center py-4 bg-purple-700">
        <p className="text-xl"><small>&copy; 2023 BloodQuest</small></p>
      </footer>
    </div>
  );
}

export default Home;
