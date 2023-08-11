import React from 'react'
import './style.css'
import img1 from "../images/image1.jpg"
import img2 from "../images/image2.jpg"
import img3 from "../images/image3.jpg"
import img4 from "../images/twitter.png"

export default function Testimonial() {
  return (
    <div className='testimonial' id='Testimonials' >
      <div className='box'></div> 
      <div className='testimonial-header'>
       <h4 >TESTIMONIAL</h4> 
       <h2>What Customer Say's</h2>
      </div>

      <div className='testimonial-para'>
        <div className='para1'>
        <div  className='testo-img'>
            <img className="testimonial-image" src={img1} alt=""></img>
            <h2>KEN NORMAN</h2>
            <img className="testimonial-image1" src={img4} alt=""></img>
            </div>
            <div className='testo-p'><p>@alis martin</p></div>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam, ut, error blanditiis reprehenderit adipisci voluptatum, ducimus fuga quae consequatur sit! Eaque voluptates explicabo, nulla ut eius dignissimos possimus libero labore quo, necessitatibus totam.</p>
           
        </div>

        <div className='para2'>
        <div  className='testo-img'>
            <img className="testimonial-image" src={img2} alt=""></img>
            <h2> ALIS MARTIN</h2>
            <img className="testimonial-image1" src={img4} alt=""></img>
            </div>
            <div className='testo-p'><p>@alis martin</p></div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam, ut, error blanditiis reprehenderit adipisci voluptatum, ducimus fuga quae consequatur sit! Eaque voluptates explicabo, nulla ut eius dignissimos possimus libero labore quo, necessitatibus totam.</p>
        </div>

        <div className='para3'>
            <div  className='testo-img'>
            <img className="testimonial-image" src={img3} alt=""></img>
            <h2>JACK SPARROW</h2>
            <img className="testimonial-image1" src={img4} alt=""></img>
            </div>
            <div className='testo-p'><p>@alis martin</p></div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam, ut, error blanditiis reprehenderit adipisci voluptatum, ducimus fuga quae consequatur sit! Eaque voluptates explicabo, nulla ut eius dignissimos possimus libero labore quo, necessitatibus totam.</p>
        </div>
      </div>
    </div>
  )
}
