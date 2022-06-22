import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
import Skill from './Skill'

const SkillContent = () => {
  return (
    <div className='bg-[#EBEBF2] dark:bg-[#000000]'>
        <Nav/>
        <Skill/>
        <Footer/>
    </div>
  )
}

export default SkillContent