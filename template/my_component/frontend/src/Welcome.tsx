import React from 'react'
import Fade from "./react-reveal/Fade";

const Welcome = () => {
  return (
    <div className='welcome'>
        <div className='contain-welcome'>
        <Fade left><div className='headline'>DataTech Innovations </div></Fade><Fade right><div className='headline2'> 〣 Empowering your data driven future</div></Fade>
        </div>

      <button>Join us</button>
    </div>
  )
}

export default Welcome
