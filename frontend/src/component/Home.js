import React,{useEffect} from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import "./Home.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
// animationIn=
const Home = () => {
  useEffect(() => {
    AOS.init({duration:1500})
  }, [])
  const [typeEffect] = useTypewriter({
    words:["Full Stack Developer","Web Developer"],
    typeSpeed:120,
    deleteSpeed:80,
    loop:Infinity
  })
  return (
    <>
    <div className="landing">
        <ul className="flex center align-center">
            <li className='text align-center' data-aos="fade-left">
              <h3 className="constant">Hello, I am Manideepa Shaw</h3>
              <h2 className="change">I am a <span style={{color:'#2875e7'}} >
                {typeEffect} <Cursor cursorColor='#2875e7' />
                </span></h2>
            </li>
            <li data-aos="fade-right"><img src={require('./manideepa-img.jpeg')} /></li>
        </ul>
    </div>
    </>
  )
}

export default Home