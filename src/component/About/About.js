import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_hamza_img from '../../assets/profile_hamza_img.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt="" srcset="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_hamza_img} alt="" srcset="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>

          <div className="about-skills">
            <div className="skill"><p>HTML & CSS</p><hr style={{ width: "75%" }} /></div>
            <div className="skill"><p>React JS</p><hr style={{ width: "65%" }} /></div>
            <div className="skill"><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
            <div className="skill"><p>Ionic Angular</p><hr style={{ width: "60%" }} /></div>
          </div>

        </div>
      </div>


      <div className="achievements-control-div">
      <div className="about-achievements">
        <div className="achievement">
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
      </div>
      <hr />
      <div className="about-achievements">
        <div className="achievement">
          <h1>5+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
      <hr />
      <div className="about-achievements">
        <div className="achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
