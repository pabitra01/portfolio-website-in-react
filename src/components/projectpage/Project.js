import React from 'react'
import todo from "./images/todo.png"
import todomob from "./images/todomob.png"
import api from "./images/api.png"
import apimob from "./images/apimob.png"
import net from "./images/net.png"
import netmob from "./images/netmob.png"

import './Project.css'
import { useSelector } from 'react-redux'
const Project = () => {
  const color =useSelector((state)=>state.color);
  const button=`w-[150px] flex justify-center p-[10px] m-auto border-[5px] text-white bg-[${color}]
  `
  return (
    <div className='pmain'>
     
          <div className="p1 bg-white dark:bg-[#111111]">
            <h3 className='text-black dark:text-white'>Project - 1</h3>
            <h1 className='text-black dark:text-white'>TODO APP USING <span style={{color:color}} className="font-medium">REACT REDUX</span></h1>

                <div className="twoimg">
                  <img src={todo} alt="" className='firimg'/>
                  <img src={todomob} alt="" className='secimg' />
                </div>
            <a href="https://github.com/pabitra01/todo-app-react-redux" target="_blank" style={{backgroundColor:color}}><h4>GO TO CODE</h4></a>
          </div>
   


    <div className="p2 bg-white dark:bg-[#111111]">
            <h3 className='text-black dark:text-white'>Project - 2</h3>
            <h1 className='text-black dark:text-white'>ROBOT CHANGER USING <span style={{color:color}} className="font-medium">API</span></h1>

                <div className="twoimg2">
                  <img src={api} alt="" className='firimg2'/>
                  <img src={apimob} alt="" className='secimg2' />
                </div>
            <a href="https://pabitra01.github.io/Robot-from-text-/" target="_blank" style={{backgroundColor:color}}><h4>GO TO WEBSITE</h4></a>
          </div>




          <div className="p3 bg-white dark:bg-[#111111]">
            <h3 className='text-black dark:text-white'>Project - 3</h3>
            <h1 className='text-black dark:text-white'>NETFLIX SHOWS USING <span style={{color:color}} className="font-medium">REACT</span></h1>

                <div className="twoimg3">
                  <img src={net} alt="" className='firimg3'/>
                  <img src={netmob} alt="" className='secimg3' />
                </div>
            <a href="https://github.com/pabitra01/react-netflix-shows" target="_blank" style={{backgroundColor:color}}><h4>GO TO CODE</h4></a>
          </div>

    </div>
  )
}

export default Project