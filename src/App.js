import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarHome from './components/sidebar/navbarHome';
import NavbarRegister from './components/sidebar/navbarRegister';
import Navbar from './components/sidebar/navbar';
import NavbarHR from './components/sidebar/navbarHR';
import UserProfile from './components/profile/UserProfile';
import HRProfile from './components/profile/HRProfile';
import LoginHome from './components/Homepage/LoginHome';
import LoginReal from './components/Homepage/LoginReal';
import Register from './components/Homepage/Register';
import Resume from './components/Resume/ResumeList';
import HRJob from './components/Job/HRJob';
import JSJob from './components/Job/JSJob';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <>
              <NavbarHome />
              <LoginHome />
            </>
          }
        />

      <Route
          path="/login"
          element={
            <>
              <NavbarRegister />
              <LoginReal />
            </>
          }
        />

      <Route
          path="/register"
          element={
            <>
              <NavbarRegister />
              <Register />
            </>
          }
        />

     

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

        <Route
          path="/Resume"
          element={
            <>
              <NavbarHR />
              <Resume />
            </>
          }
        />     

         <Route
          path="/HRJob"
          element={
            <>
              <NavbarHR />
              <HRJob />
            </>
          }
        />    

         <Route
          path="/JSJob"
          element={
            <>
              <NavbarHR />
              <JSJob />
            </>
          }
        />    

        

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
