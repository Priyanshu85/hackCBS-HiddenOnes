import React from 'react'
import {hospital as hospital} from '../../assets/hospital.jpg'

const Hero = () => {
  return (
      <div className="hero">
          <div className="container">
              <div className="left">
                  <h2>Jump start your crypto portfolio <br /><span id='crypt'>KingCrypt</span></h2>
                  <p id='para'>KingCrypt is the easiest place to know about trends of cryptocurrency. Sign up and get started today.</p>
                  {/* <div className="input-container">
                      <input type="email" placeholder='Enter your email....' />
                      <button className='btn'>Learn More</button>
                  </div> */}
              </div>
              <div className="right">
                  <div className="img-container wobble-hor-top ">
                      <img src={hospital} alt="" />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Hero