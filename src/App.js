import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/homepage/Home';
import Project from './components/projectpage/Project';
import Skill from './components/skillspage/Skill';
import Education from './components/Educationpage/Education';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';
import HomeContent from './components/homepage/HomeContent';
import { useSelector } from 'react-redux';
import ProjectContent from './components/projectpage/ProjectContent';
import EducationContent from './components/Educationpage/EducationContent';
import SkillContent from './components/skillspage/SkillContent';


function App() {
  const theme= useSelector((state)=>state.theme);
  useEffect(()=>{
    
    if(theme==='dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[theme])
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomeContent />}> 
      </Route>
      <Route path="/home" element={<HomeContent />}>
       
      </Route>
      <Route path="/education" element={<EducationContent />} >
        
      </Route>
      <Route path="/skills" element={<SkillContent />}>
       
      </Route>
      <Route path="/projects" element={<ProjectContent />}>
      
      </Route>
    </Routes>
    </div>
  );
}

export default App;
