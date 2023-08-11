
import React from 'react'
import './style.css'
import img1 from "../images/product1.jpeg"
import img2 from "../images/product2.jpeg"
import img3 from "../images/product3.jpeg"
import img4 from "../images/product4.jpeg"


 function Services() {
  return (
    
     
      <div className='services'>
        <div className='box'></div>
       <section class="services-page">

        <div className='services-header'>
        <h2 id="Services"> SERVICES</h2>
        <h1>We provide better</h1>
        </div>
       
           <div class="row">

            <div className='services-row2'>
            <div class="services-info">
            <img className='services-image' src={img1} alt=""></img>
                <div class="services-react">
                  <h2>shampoo</h2>
                  <hr/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
                </div>
                </div>

            <div class="services-info">
            <img className='services-image' src={img4} alt=""></img>
                
                <div class="services-react">
                  <h2>Hair-oil</h2>
                  <hr/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
                </div>
                </div>
                </div>

            <div className='services-row2'>
            <div class="services-info">
            <img className='services-image' src={img3} alt=""></img>
                   
                <div class="services-react">
                  <h2>Facewash</h2>
                  <hr/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
                </div>  
                </div>


                <div class="services-info">
            <img className='services-image' src={img2} alt=""></img>
                
                <div class="services-react">
                  <h2>Serum</h2>
                  <hr/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
                </div>
                </div>
                </div>

        </div>
    </section>

    </div>
  )
}




export default Services