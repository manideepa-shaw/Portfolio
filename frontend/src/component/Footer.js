import React from 'react'
import "./Footer.css"

const Footer = (props) => {
  return (
    <>
    <div className='flex center align-center'>
    <div className="footer">
        <h4>{props.name}</h4>
        <h4>{props.role} </h4>
        <ul>
            <li>
                <a href="https://github.com/manideepa-shaw" className='social'>
                    <img className='social-icon' src={require('../images/github2.png')} />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/manideepa-shaw-1842b7213/" className='social'>
                    <img className='social-icon b' src={require('../images/l1000.jpg')} />
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="mailto:shawmanideepa@gmail.com" className='callmail'>Mail Me</a>
                <a href="tel:+918910694890" className='callmail'>Call Me</a>
            </li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Footer