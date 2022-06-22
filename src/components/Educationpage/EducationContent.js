import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
import Education from './Education'

const EducationContent = () => {
  return (
    <div className='bg-[#EBEBF2] dark:bg-[#000000]' >
        <Nav/>
        <Education/>
        <Footer/>
    </div>
  )
}

export default EducationContent