import React from 'react'
import { useSelector } from 'react-redux'
import './Education.css'

const Education = () => {
  const color=useSelector((state)=>state.color);
  console.log(color);
  const colorClass=`text-black dark:text-[${color}] font-[25px]`
  console.log(colorClass);
  return (
    <div className='emain dark:bg-[#111111]'>
      <div className="btech dark:bg-[#000000]">
        <h3 className=" text-[25px]" style={{color:color}}>B-Tech</h3>
        <h3 className=' text-[25px]' style={{color:color}}>(Computer Science)</h3>
        <p className='firpara'>National Institute of Science and </p>
        <p className='secpara'>Technology , Berhempur (Autonomous)</p>
        <p className='thirdpara'>Year : 2020 - 2024</p>
      </div>
      <div className="inter dark:bg-[#000000]">
      <h3 className=" text-[25px]" style={{color:color}}>12th Science</h3>
        <p className='firparai'>Anchalika Science College ,</p>
        <p className='secparai'> Khsetriyabarapur</p>
        <p className='thirdparai'>Year : 2018 - 2020</p>
      </div>
      <div className="tenth dark:bg-[#000000]">
      <h3 className=" text-[25px]" style={{color:color}}>Matriculation</h3>
        <p className='firparat'>Sri Gopinath Swami Bidya Peetha ,</p>
        <p className='secparat'>Benipalli</p>
        <p className='thirdparat'>Year : 2015 - 2018</p>
      </div>
    </div>
  )
}

export default Education