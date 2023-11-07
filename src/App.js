import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './components/profile/UserProfile';
import HRProfile from './components/profile/HRProfile';
import Login from './components/Login';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/userProfile" element={<UserProfile/>}></Route>
            <Route path="/HRProfile" element={<HRProfile/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>

          
      </Routes>
      </BrowserRouter>
  );
}

export default App;