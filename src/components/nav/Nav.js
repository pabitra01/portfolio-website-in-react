import React ,{useEffect, useState} from 'react'
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
    Link,
    NavLink
  } from "react-router-dom";
import './Nav.css'
import { color } from '../../localStorage';
import { useSelector } from 'react-redux';


const Nav = () => {
  const [state, setstate] = useState(false);
  const currentColor=useSelector((state)=>
  state.color
)
  const [isContain,setiscontain]=useState(false);
const tab=(id)=>{
  setiscontain(true);
  console.log("function called");
  const classes=document.getElementsByClassName('stick');
  for(let i=0;i<classes.length;i++){
    classes[i].classList.remove('active');

    console.log(classes[i]);
  }
  const current=document.getElementById(id);
  current.classList.add('active');
  
}
useEffect(()=>{
  const a=document.getElementsByClassName('active');
  if(a.length!=0){
  a[0].style.color=currentColor;
  }
},[])
  return (
    <div className="parentnav ">
         <div className='nav dark:bg-[#111111]'>
        <div className="logo">
            <Link to='/home'><h2 style={{color:currentColor}} className='text-[26px] font-mono'>pabi</h2></Link> 
        </div>
        <div className="link" id='link_header'>
            
            <div className="home stick dark:text-white " id='home' onClick={()=>tab('home')} >
              <NavLink to="/home">
                <HomeIcon className=' ' />
              </NavLink>
            </div>
            <div className="edu stick dark:text-white " id='edu' onClick={()=>tab('edu')}><NavLink to="/education"><SchoolIcon className=''/></NavLink></div>
            <div className="skills stick dark:text-white" id='skills' onClick={()=>tab('skills')}><NavLink to="/skills"><CodeIcon className=''/></NavLink></div>
            <div className="project stick dark:text-white" id='project' onClick={()=>tab('project')}><NavLink to="/projects"><ComputerIcon className=''/></NavLink></div>
            
        </div>
        <div className="btnlink btnlinknav">
            <a href="/download.pdf" download>
                <button style={{backgroundColor:currentColor}} className='download font-mono'><DownloadIcon className='email '/> Resume </button>
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