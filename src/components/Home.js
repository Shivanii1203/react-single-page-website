import React from 'react'
import './style.css'
import img1 from "../images/logo.png"

function Home() {
  return (
    <div className='home'>
     <div>
      <img  className="logo" src={img1} alt=""/> 
      </div>
    <div className="navbar">
       
    <ul className='nav' >
        <li >
            <a href="#Home">Home</a>
        </li>
        <li >
        <a href="#Features">Features</a>
        </li>
        <li >
        <a href="#Services">Services</a>
        </li>
        <li >
        <a href="#Testimonials">Testimonials</a>
        </li>
        <li >
        <a href="#Contact">Contact</a>
        </li>
    </ul>
</div>

<div className='header'>
      <h1>Wellness Forever</h1>
      <h2>Making you healthy and happy.</h2>
      </div>

      <div className='btn'>
        <button  className='find-btn'>Find Out</button>
        <button className='read-btn'>Read</button>
      </div>
</div>
     
  )
}


export default Home





