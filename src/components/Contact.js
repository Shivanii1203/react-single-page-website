import React from 'react'
import './style.css'
import img1 from "../images/clock-icon.jpg"
import img2 from "../images/location-icon.jpg"
import img3 from "../images/email-symbol.png" 
import img4 from "../images/phone.png"
import img5 from "../images/facebook.png"
import img6 from "../images/twitter-footer.png"
import img7 from "../images/instagram.png"
import img8 from "../images/../images/youtube.png"
import img9 from "../images/medicine-capsule-pills-black-and-white.webp"



 function Contact() {
  return (
    <div className='contact-page'  id='Contact'>
      < div className='contact-header'>  
      <div >
      <img className="head-image" src={img9} alt=""></img>
      </div>  
      <div className='contact-header1'>
      <h4 >Contact</h4>
       <h1>Visit shop today</h1></div> 
    
      </div>
  

      <div className='contact'>
      <div className='contact-time'>
        <h4>Opening Hours</h4>

        <div className='contact-img'>
        <img className="contact-image" src={img1} alt=""></img>
        <p> Monday to Friday- 9am to 9am </p>
        </div>

        <div className='contact-img'>
        <img className="contact-image" src={img1} alt=""></img>
        <p> Saturday to Sunday - 8am to 11pm</p>
        </div>
      </div>

      <div className='contact-address'>
      <h4>Get In Touch</h4>
        <div className='address-img'>
        <p>30IN abc colony,xyz City IN</p>
        <img className="address-image" src={img2} alt=""></img>
        </div>
        
        <div className='address-img'>
        <p>abc@gmail.com</p>
        <img className="address-image" src={img3} alt=""></img>
        </div>

        <div className='address-img'>
        <p>1234567890</p>
        <img className="address-image" src={img4} alt=""></img>
        </div>
      </div>
      </div>
      
      <div className='footer-name'>
      <img className="footer-image" src={img5} alt=""></img>
      <img className="footer-image" src={img6} alt=""></img>
      <img className="footer-image" src={img7} alt=""></img>
      <img className="footer-image" src={img8} alt=""></img>

      </div>
      <div className='footer'><p>Copyright CodeGurucool</p></div>
    </div>
  )
}


export default Contact