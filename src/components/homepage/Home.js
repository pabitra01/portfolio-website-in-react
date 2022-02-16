import React from 'react'
import './Home.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadIcon from '@mui/icons-material/Download';

const Home = () => {
  return (
    <div className='main'>
      <div className="left">
        <div className="contenthome">
        <h6>HEllO , i am</h6>
        <h2>Pabitra Ranjan Rout</h2>
        <h5>Full Stack Web Developer</h5>

        <p>An engineer with strong problem solving skills passionate about learning and ability to perform well in a team.</p>
        <div className="btnlink">
            <a href="/download.pdf" download>
                <button><DownloadIcon className='email'/> Download Resume </button>
            </a>
        </div>
        </div>
      </div>
      <div className="rightlink">
                <a href="https://github.com/pabitra01" target="_blank"><GitHubIcon className='github'/></a>
                <a href="https://www.linkedin.com/in/pabitra-ranjan-rout/" target="_blank"><LinkedInIcon className='linked'/></a>
                <a href=""><InstagramIcon className='instagram'/></a>
                <a href=""><TwitterIcon className='twitter'/></a>
      </div>
    </div>
  )
}

export default Home