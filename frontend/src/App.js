import React from 'react';
import { Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import '../src/components/Navbar/MenuItems'
import './App.css';
import BasicInfoPage from './pages/BasicInfoPage';
import HomePage from './pages/HomePage';
import CodingPage from './pages/CodingPage';
import JobPage from './pages/JobPage';
import EducationPage from './pages/EducationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='mt-5'>
        <Container fluid="md">      
          <Routes>
            <Route path ="/" element={<HomePage/>}/>
            <Route path ="/basic" element={<BasicInfoPage/>}/>
            <Route path ="/education" element={<EducationPage/>}/>
            <Route path ="/job" element={<JobPage/>}/>
            <Route path ="/coding" element={<CodingPage/>}/>
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
