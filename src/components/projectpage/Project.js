import React from 'react'
import todo from "./images/todo.png"
import todomob from "./images/todomob.png"
import api from "./images/api.png"
import apimob from "./images/apimob.png"
import net from "./images/net.png"
import netmob from "./images/netmob.png"

import './Project.css'
const Project = () => {
  return (
    <div className='pmain'>
     
          <div className="p1">
            <h3>Project - 1</h3>
            <h1>TODO APP USING <span>REACT REDUX</span></h1>

                <div className="twoimg">
                  <img src={todo} alt="" className='firimg'/>
                  <img src={todomob} alt="" className='secimg' />
                </div>
            <a href="https://github.com/pabitra01/todo-app-react-redux" target="_blank"><h4>GO TO CODE</h4></a>
          </div>
   


    <div className="p2">
            <h3>Project - 2</h3>
            <h1>ROBOT CHANGER USING <span>API</span></h1>

                <div className="twoimg2">
                  <img src={api} alt="" className='firimg2'/>
                  <img src={apimob} alt="" className='secimg2' />
                </div>
            <a href="https://pabitra01.github.io/Robot-from-text-/" target="_blank"><h4>GO TO WEBSITE</h4></a>
          </div>




          <div className="p3">
            <h3>Project - 3</h3>
            <h1>NETFLIX SHOWS USING <span>REACT</span></h1>

                <div className="twoimg3">
                  <img src={net} alt="" className='firimg3'/>
                  <img src={netmob} alt="" className='secimg3' />
                </div>
            <a href="https://github.com/pabitra01/react-netflix-shows" target="_blank"><h4>GO TO CODE</h4></a>
          </div>

    </div>
  )
}

export default Project