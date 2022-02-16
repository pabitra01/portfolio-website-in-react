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


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/portfolio-website-in-react/" element={<Home />}> 
      </Route>
      <Route path="/portfolio-website-in-react/home" element={<Home />}>
       
      </Route>
      <Route path="/portfolio-website-in-react/education" element={<Education />} >
        
      </Route>
      <Route path="/portfolio-website-in-react/skills" element={<Skill />}>
       
      </Route>
      <Route path="/portfolio-website-in-react/projects" element={<Project />}>
      
      </Route>
    </Routes>
     <Footer/>
    </div>
  );
}

export default App;
