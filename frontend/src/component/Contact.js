import React,{useState,useEffect} from 'react'
import "./contact.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import LoadingSpinner from '../shared/UIElements/LoadingSpinner'

const Contact = () => {
  useEffect(() => {
    AOS.init({duration:1500})
  }, [])
    const [isLoading, setisLoading] = useState(false)
    const [details, setdetails] = useState({name:"",email:"",message:""})
    const inputHandler = (event)=>{
      const { name, value } = event.target;
      setdetails({
        ...details,
        [name]: value
      });
      // console.log(details);
    }

    const formHandler = async(e)=>{
      setisLoading(true)
      e.preventDefault();
      try{
        const res = await fetch("https://portfolio-api-manideepa-shaws-projects.vercel.app/api/mail",{
          method : 'POST',
          headers:{
            'Content-Type': 'application/json'
        },
          body : JSON.stringify({
            name : details.name,
            email : details.email,
            message : details.message
          })
        })
        const responseData= await res.json()
        if(!res.ok)
          {
            setisLoading(false)
            alert(responseData.message)
          }
        else
        {
          setisLoading(false)
          alert('Mail has been successfully sent!!!')
          setdetails({
            name:"",
            email:"",
            message:""
          })
        }
      }
      catch(err)
      {
        setisLoading(false)
        alert(err)
      }
      
    }

  return (
    <div className='contact'>
      {isLoading && <LoadingSpinner asOverlay={true} /> }
    <div className="heading">
      <h1 class="blue">CONTACT ME</h1>
       <ul>
         <li class="line1"></li>
         <li class="line2"></li>
         <li class="line3"></li>
       </ul>
      </div>
      <div className="form section">
        <div className="written flex align-center center">
        <h3 data-aos="fade-right">
         Hi! Let's Get Connected. 
        </h3> <br />
        <p data-aos="fade-left">
        <span>&#128222;</span> +91 8910694890 <br />
        <span>&#128231;</span> shawmanideepa@gmail.com
        </p>
        </div>


      <form method='post' onSubmit={formHandler} data-aos="flip-left">
        <input type="text" name="name" id="name" placeholder='Name' required
        onInput={inputHandler} 
        value={details.name}
        /> <br />
        <input type="email" name="email" id="email" placeholder='Email' required
        value={details.email}
        onInput={inputHandler}/>
        <br />
        <textarea name="message" id="message" placeholder='Enter Your Message' required
        value={details.message}
        onInput={inputHandler}></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>


      </div>
    </div>
  )
}

export default Contact
