import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignupPage from './components/Signup';
import QuestPage from './components/Quest';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/quest-page" element={<QuestPage/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/profile" element={<Profile/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
