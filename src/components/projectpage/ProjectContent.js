import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
import Project from './Project'

const ProjectContent = () => {
  return (
    <div className='bg-[#EBEBF2] dark:bg-[#000000]'>
        <Nav/>
        <Project/>
        <Footer/>
    </div>
  )
}

export default ProjectContent