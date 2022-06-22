import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
import Home from './Home'

const HomeContent = () => {
  return (
    <div className='bg-[#EBEBF2] dark:bg-[#000000]'>
        <Nav/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default HomeContent