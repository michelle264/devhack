import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/sidebar/navbar';
import NavbarHR from './components/sidebar/navbarHR';
import UserProfile from './components/profile/UserProfile';
import HRProfile from './components/profile/HRProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes using Navbar (for regular users) */}
        <Route
          path="/userProfile"
          element={
            <>
              <Navbar />
              <UserProfile />
            </>
          }
        />

        {/* Routes using NavbarHR (for HR users) */}
        <Route
          path="/HRProfile"
          element={
            <>
              <NavbarHR />
              <HRProfile />
            </>
          }
        />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
