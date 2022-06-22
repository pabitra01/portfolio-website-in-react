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
const floatmenu=`w-full h-[100vh] z-10 absolute top-0 bg-black right-0 m-auto flex flex-col justify-start item-center pt-10`
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
    <div className={state ? floatmenu :"floatmenu-mobile"}>
        <div className="text-white absolute right-0 text-[20px] top-0 pt-3 px-7" onClick={()=>setstate(false)}>x</div>
        <div className="text-center w-full py-8 bg-black text-white hov"><Link to="/home">HOME</Link></div>
        <div className="text-center w-full py-8 bg-black text-white hov"><Link to="/education">EDUCATION</Link></div>
        <div className="text-center w-full py-8 bg-black text-white hov"><Link to="/skills">SKILLS</Link></div>
        <div className="text-center w-full py-8 bg-black text-white hov"><Link to="/projects">PROJECTS</Link></div>
    </div>
    </div>
  )
    
}

export default Nav