import './App.css';
import {useState , useEffect} from 'react';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Tsparticles from './component/Tsparticles';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  // const [isLoading, setisLoading] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setisLoading(false)
  //   }, 3000);
  // }, [])
  // if(isLoading)
  //   {
  //     return(<>Loading...
  //     </>)
  //   }
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
      <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <footer>
        <Footer name="Manideepa Shaw" role="Full Stack Developer" />
      </footer>
      
      <div className="absolute">
      <Tsparticles />
      </div>
    </div>
  );
}

export default App;
