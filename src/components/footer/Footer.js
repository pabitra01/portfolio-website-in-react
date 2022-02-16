import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer>
        <div className='fmain'>
            <div className="sociallinks">
                <a href="https://github.com/pabitra01" target="_blank"><GitHubIcon className='github'/></a>
                <a href="https://www.linkedin.com/in/pabitra-ranjan-rout/" target="_blank"><LinkedInIcon className='linked'/></a>
                <a href=""><InstagramIcon className='instagram'/></a>
                <a href=""><TwitterIcon className='twitter'/></a>
            </div>
            <div className="copy"><p>@Copywrite 2022</p></div>
        </div>
    </footer>
  )
}

export default Footer