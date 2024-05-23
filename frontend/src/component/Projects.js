import React from 'react'
import "./projects.css"
import { data } from './ProjectDetails'
 
const project_info = data;

const Projects = () => {
  return (
    <div>
      <div className="heading">
       <h1 class="blue">PROJECTS</h1>
       <ul>
         <li class="line1"></li>
         <li class="line2"></li>
         <li class="line3"></li>
       </ul>
      </div>
      <p className='hover'>HOVER OVER THE PROJECTS TO SEE THE TECHNOLOGIES USED</p>
      <div className="projects">
        {
          project_info.map( (ele)=>{
            return (
              <div className="card">
                <div className="row">
                  <img src={require(`../images/${ele.img}`)} />
                  <div className="layer">
                  <h3>{ele.p_type}</h3>
                  {ele.tech}
                  </div>
                </div>
                <h3 className='bold inline'>{ele.pname}</h3>
                <a href={ele.link}>{ele.l_type}</a>
                <p className="project__desc">{ele.desc} </p>
                </div>
            )
          } )
        }

      </div>
    </div>
  )
}

export default Projects