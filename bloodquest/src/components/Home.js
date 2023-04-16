import React from 'react';
import Leaderboard from './Leaderboard';

function Home() {
  return (
    <div className="relative bg-purple-500 text-white">
      <header className="container ">
        <nav className="flex items-center justify-between bg-purple-700 py-4 px-12 w-[100vw] ">
          <img src="" alt="BloodQuest"></img>
          <ul className="flex">
            <li className="ml-4"><a href="#locator">Quest</a></li>
            <li className="ml-4"><a href="#leaderboard">Leaderboard</a></li>
            <li className="ml-4"><a href="#donors">Profile</a></li>

          </ul>
        </nav>
      </header>
      <main className="container mx-auto py-16">
        <div>
        <section className="text-center mg-16 h-[100vh]">
          <img src="https://source.unsplash.com/800x600/?blood,donate" alt="Donate blood" className="mx-auto max-h-[50vh] mb-8" />
          <h2 className="text-5xl font-bold mb-8">Join the BloodQuest</h2>
        <p className="text-xl mb-8">Donate blood and help save lives</p>
  <a href="#register" className="bg-white text-purple-500 py-4 px-10 rounded-full shadow-lg hover:bg-purple-800 hover:text-white transition duration-300 inline-block">Register Now</a>
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
          <a href="#stories" className="bg-white text-purple-500 py-4 px-10 rounded-full shadow-lg hover:bg-purple-800 hover:text-white transition duration-300 inline-block">Read More</a>
        </section>
        <section>
          <Leaderboard/>
        </section>
      </main>
      <footer className="text-center py-4 bg-purple-700">
        <p className="text-xl">&copy; 2023 BloodQuest</p>
      </footer>
    </div>
  );
}

export default Home;
