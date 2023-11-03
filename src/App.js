import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HRProfile from './components/UserProfile';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/userProfile" element={<HRProfile/>}></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>

          
      </Routes>
      </BrowserRouter>
  );
}

export default App;