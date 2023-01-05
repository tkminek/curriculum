import React from 'react';
import { Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import '../src/components/Navbar/MenuItems'
import './App.css';
import BasicInfoPage from './pages/BasicInfoPage';
import HomePage from './pages/HomePage';
import CodingPage from './pages/CodingPage';
import JobPage from './pages/JobPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = "container">
        <Routes>
          <Route path ="/" element={<HomePage/>}/>
          <Route path ="/basic" element={<BasicInfoPage/>}/>
          <Route path ="/job" element={<JobPage/>}/>
          <Route path ="/coding" element={<CodingPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
