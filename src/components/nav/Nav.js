import React ,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
// import './script.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './Nav.css'



const Nav = () => {
  const [state, setstate] = useState(false);
 
 

  return (
    <div className="parentnav">
         <div className='nav'>
        <div className="logo">
            <h2>pabi</h2>
        </div>
        <div className="link">
            
            <div className="home"><Link to="/portfolio-website-in-react/home"><HomeIcon className='homeicon'/></Link></div>
            <div className="edu"><Link to="/portfolio-website-in-react/education"><SchoolIcon className='school'/></Link></div>
            <div className="skills"><Link to="/portfolio-website-in-react/skills"><CodeIcon className='code'/></Link></div>
            <div className="project"><Link to="/portfolio-website-in-react/projects"><ComputerIcon className='computer'/></Link></div>
            
        </div>
        <div className="btnlink btnlinknav">
            <a href="/portfolio-website-in-react/download.pdf" download>
                <button><DownloadIcon className='email'/> Resume </button>
            </a>
        </div>
        <div className="menu-mobile" onClick={()=>{
            setstate(!state);
        }}>
            <MenuIcon/>
        </div>
        
    </div>
    <div className={state ? "floatmenu-mobile-display" :"floatmenu-mobile"}>
        <div className="home-mobile hov"><Link to="/home">Home</Link></div>
        <div className="edu-mobile hov"><Link to="/education">Education</Link></div>
        <div className="skills-mobile hov"><Link to="/skills">Skills</Link></div>
        <div className="project-mobile hov"><Link to="/projects">Projects</Link></div>
    </div>
    </div>
  )
    
}

export default Nav