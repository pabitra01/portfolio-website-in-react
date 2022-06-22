import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className='w-[100%] h-[250px] bg-white dark:bg-[#111111] flex justify-center items-center'>
        <div className='fmain'>
            <div className="sociallinks">
                <a href="https://github.com/pabitra01" target="_blank" rel="noreferrer"><GitHubIcon className='text-black dark:text-white mx-[20px]'/></a>
                <a href="https://www.linkedin.com/in/pabitra-ranjan-rout/" target="_blank" rel="noreferrer"><LinkedInIcon className='text-black dark:text-white  mx-[20px]'/></a>
                <a href=""><InstagramIcon className='text-black dark:text-white  mx-[20px]'/></a>
                <a href=""><TwitterIcon className='text-black dark:text-white  mx-[20px]'/></a>
            </div>
            <div className=""><p className='text-black dark:text-white m-[20px] text-center'>©️pabitraranjanrout</p></div>
        </div>
    </footer>
  )
}

export default Footer