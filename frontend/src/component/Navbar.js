import React,{ useState } from 'react'
import "./Navbar.css"

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false)
  const onchangelinkhandler = ()=>{
    setshowLinks((showLinks)=>{return !showLinks})
    console.log(showLinks)
  }

  return (
    <>
    <div className="container">
        <ul className="nav">
            <li className="nav-items"> <a href="#home">Home</a> </li>
            <li className="nav-items"> <a href="#about"> About </a> </li>
            <li className="nav-items"> <a href="#skills">Skills</a> </li>
            <li className="nav-items"> <a href="#projects">Projects</a> </li>
            <li className="nav-items"> <a href="#contact">Contact</a> </li>
        </ul>
        <div className="hiddentoggle nav-items" onClick={onchangelinkhandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {showLinks && 
        <ul className="full-screen__nav " onClick={()=>setshowLinks(false)}>
        <li className="nav-items" onClick={onchangelinkhandler}> <a href="#home">Home</a> </li>
            <li className="nav-items" onClick={onchangelinkhandler}> <a href="#about"> About </a> </li>
            <li className="nav-items" onClick={onchangelinkhandler}> <a href="#skills">Skills</a> </li>
            <li className="nav-items" onClick={onchangelinkhandler}> <a href="#projects">Projects</a> </li>
            <li className="nav-items" onClick={onchangelinkhandler}> <a href="#contact">Contact</a> </li>
        </ul>
        }
    </div>
    </>
  )
}

export default Navbar