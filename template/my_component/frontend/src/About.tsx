import React from 'react'
import data from './data.png';
import datagrowth from './data-growth.png';
import team from './team.png';

const About = () => {
  return (
    <div className='about'>
      <h1>About Us</h1>
      <hr></hr>
      <div className='about-image'>
      <p><img height={'190px'} src={data} alt="Data" /></p>
      <p><img height={'190px'} src={datagrowth} alt="DataGrowth" /></p>
      <p><img height={'190px'} src={team} alt="Team" /></p>
      </div>
      <div className='about-p'>
        <p>At DataTech Innovations, we believe that data is the lifeblood of the modern bsuiness landscape.</p>
        <p>With the exponential growth of data, organizaitons need a trusted partner to help them navigate this complex landscape, extract valuable insights, and leverage the full potential of their data assets.</p>
        <p>With years of experience and a team of seasoned data professionals, we are committed to delivering innovative data solutions that drive tangible results.</p>
      </div>

      <div className='about-last'>DataTech Innovations is a leading data solutions provider, dedicated to helping businesses harness the

power of data to drive growth, make informed decisions, and unlock new opportunities.

With our cutting-edge technology and expert team, we offer comprehensive data services tailored to your

unique needs. Whether you are a small startup or a large enterprise, we have the solutions to accelerate

your data-driven journey.</div>

    </div>
  )
}

export default About
