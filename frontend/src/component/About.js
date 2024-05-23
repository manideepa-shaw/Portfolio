import React,{ useEffect } from 'react'
import "./About.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {
  useEffect(() => {
    AOS.init({duration:1500})
  }, [])
  
  return (
    <div className="about">
      <div className="heading">
      <h1 class="blue">ABOUT ME</h1>
       <ul>
         <li class="line1"></li>
         <li class="line2"></li>
         <li class="line3"></li>
       </ul>
      </div>
      <div className="section" data-aos="fade-left">
        <div className="image"></div>
        <div className="text">
        Hello! I'm Manideepa Shaw, a passionate and dedicated software developer with a keen interest in creating innovative solutions that drive efficiency and improve user experiences. With a strong foundation in computer science and hands-on experience in various programming languages and frameworks, I thrive on transforming complex problems into simple, elegant code.
        </div>
       </div>
    </div>
  )
}

export default About