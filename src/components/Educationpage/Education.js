import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className='emain'>
      <div className="btech">
        <h3>B-Tech</h3>
        <h3 className='sechead'>(Computer Science)</h3>
        <p className='firpara'>National Institute of Science and </p>
        <p className='secpara'>Technology , Berhempur (Autonomous)</p>
        <p className='thirdpara'>Year : 2020 - 2024</p>
      </div>
      <div className="inter">
      <h3>12th Science</h3>
        <p className='firparai'>Anchalika Science College ,</p>
        <p className='secparai'> Khsetriyabarapur</p>
        <p className='thirdparai'>Year : 2018 - 2020</p>
      </div>
      <div className="tenth">
      <h3>Matriculation</h3>
        <p className='firparat'>Sri Gopinath Swami Bidya Peetha ,</p>
        <p className='secparat'>Benipalli</p>
        <p className='thirdparat'>Year : 2015 - 2018</p>
      </div>
    </div>
  )
}

export default Education