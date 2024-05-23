import React,{ useEffect } from 'react'
import { data } from './skilllist'
import "./skills.css"
import AOS from 'aos'
import 'aos/dist/aos.css'


const img_info= data;

const Skills = () => {
  useEffect(() => {
    AOS.init({duration:1500})
  }, [])
  return (
    <div>
      <div className="heading">
      <h1 class="blue">My SKILLS</h1>
       <ul>
         <li class="line1"></li>
         <li class="line2"></li>
         <li class="line3"></li>
       </ul>
      </div>
      <section className="skills">
        {/* <div className="card">
          <img src={require('../images/html_icon.webp')} />
          <p>HTML</p>
        </div> */}
        { img_info.map( (ele)=> { 
          return (
          <div className="card" data-aos="flip-right">
            <img src={require(`../images/${ele.img_name}`)} />
            <p>{ele.text}</p>
          </div>
          )} 
        )}
       </section>
    </div>
  )
}

export default Skills