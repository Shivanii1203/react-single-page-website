import React from 'react'
import './style.css'
import img2 from "../images/pexels-photo-3683102.jpeg"


 function Features() {
  return (
    <div className='features'>
        <div className='box'></div>
    <div className='features1'>
        <h2 id="Features"> FEATURES</h2>
        <h1>Why choose us</h1>
    </div>

    <div className='features2'>  
     <div className='Features-para'>
      
      <h4>Experienced staff</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
      <h4>Pre onlline booking</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
      <h4>Affordable cost</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
     </div>
    <div >
      <img className="image" src={img2} alt=""></img>
    </div>

    </div>
    </div>
    
  )
}

export default Features