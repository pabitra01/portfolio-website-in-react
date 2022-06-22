import React, { useState } from 'react'
import './Home.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadIcon from '@mui/icons-material/Download';
import { useDispatch, useSelector } from 'react-redux';
import { color_item, selectTheme } from '../../action/action';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import Switcher from '../Theme/Switcher';

let color=localStorage.getItem('item-color');
const Home = () => {
  const currentColor=useSelector((state)=>
  state.color
)
  const setColor=(color)=>{
    localStorage.setItem('item-color',color);
    dispatch(color_item(color))
  }
 
  const theme=useSelector((state)=>state.theme);
  const [colorTheme, setColorTheme] = useState(theme);
  const setTheme=(theme)=>{
    localStorage.setItem('theme',theme);
    setColorTheme(theme)
    dispatch(selectTheme(theme));
  }
  const dispatch=useDispatch();
  return (
    <div className="">
      <div className=' relative h-[100vh] w-[90%] my-[50px] mx-auto flex justify-between items-center bg-white dark:bg-[#111111]'>
      <div className="theme">
        <div className="round black" onClick={()=>setColor("#00AFC1")}></div>
        <div className="round blue" onClick={()=>setColor("#242F9B")}></div>
        <div className="round green" onClick={()=>setColor("#006E7F")}></div>
        <div className="round " onClick={()=>setColor("#E60965")}></div>
        <div className="round lgreen" onClick={()=>setColor("#6BCB77")}></div>
        <div className="round yellow" onClick={()=>setColor("#FFD124")}></div>
        <div className="round lblue" onClick={()=>setColor("#7900FF")}></div>
        <div className="round orange" onClick={()=>setColor("#FF8C32")}></div>
      </div>
      <div className="absolute top-7 right-7">
        <div className={colorTheme==='dark' ? "cursor-pointer p-[10px] dark:shadow-[#0c0c0c] shadow-lg rounded-full" : 'hidden'} onClick={()=>setTheme('light')}><LightModeIcon className='text-black dark:text-white'/></div>
        <div className={colorTheme==='light' ? "cursor-pointer p-[10px] dark:shadow-[#0c0c0c] shadow-lg rounded-full" : 'hidden'} onClick={()=>setTheme('dark')}><DarkModeIcon className='text-black dark:text-white'/></div>
      </div>
      {/* <Switcher/> */}
      <div className="w-[90%] h-[100vh] bg-white dark:bg-[#111111] flex justify-center items-center">
        <div className="contenthome">
        <h6 className='font-mono'>HEllO , i am</h6>
        <h2 className='text-[50px] mt-[5px] text-[rgb(32, 31, 31)] dark:text-white font-mono'>Pabitra Ranjan Rout</h2>
        <h5 style={{color:currentColor}} className="font-mono">Full Stack Web Developer</h5>

        <p className='font-mono'>An engineer with strong problem solving skills passionate about learning and ability to perform well in a team.</p>
        <div className="btnlink">
            <a href="/download.pdf" download>
                <button style={{backgroundColor:currentColor}} className="homeresume font-mono"><DownloadIcon className='email '/> Download Resume </button>
            </a>
        </div>
        </div>
      </div>
      <div className="rightlink">
                <a href="https://github.com/pabitra01" target="_blank" rel="noreferrer"><GitHubIcon className='text-black dark:text-white dark:hover:text-black'/></a>
                <a href="https://www.linkedin.com/in/pabitra-ranjan-rout/" target="_blank" rel="noreferrer"><LinkedInIcon className='text-black dark:text-white dark:hover:text-[#0e76a8] hover:text-[#0e76a8]'/></a>
                <a href=""><InstagramIcon className='text-black dark:text-white dark:hover:text-[#bc2a8d] hover:text-[#bc2a8d]' /></a>
                <a href=""><TwitterIcon className='text-black dark:text-white dark:hover:text-[#00acee] hover:text-[#00acee]'/></a>
      </div>
    </div>
    </div>
  )
}

export default Home