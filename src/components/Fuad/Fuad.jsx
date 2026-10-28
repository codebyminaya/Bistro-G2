import React from 'react'

const fuad = () => {
  return (
    <div>
      
import './App.css'
import chef from './assets/chef.png'
import food1 from './assets/food1.jpg'
import food2 from './assets/food2.jpg'
import iconCircle1 from "./assets/icon-circle.png";
import iconCircle2 from "./assets/icon-circle 2.png";
import iconCircle3 from "./assets/icon-circle 3.png";
import clock from './assets/clock.png'
import price from './assets/price.png'
import services from './assets/services.png'

function App() {

  return (
    // section 5
    <section>
      <div className="fast-delivery">
        <img id="chef" src={chef} alt="" />
        <div className="food">
          <img id='food1' src={food1} alt="" />
          <img id='food2' src={food2} alt="" /></div>

      </div>

      <div className="text">
        <h1>Fastest Food  </h1>
        <h1>Delivery in City</h1>
         <p>Our visual designer lets you quickly and  of drag a down <br />  your  way to customapps for both keep desktop. </p>

<h4>
  <span className='logo'>
    <img className='icon-circle' src={iconCircle1} alt="" />
    <img className='icon-img' src={clock} alt="" />
  </span>
  Delivery within 30 minutes
</h4>

<h4>
  <span className='logo'>
    <img className='icon-circle' src={iconCircle2} alt="" />
    <img className='icon-img' src={price} alt="" />
  </span>
  Best Offer & Prices
</h4>

<h4>
  <span className='logo'>
    <img className='icon-circle' src={iconCircle3} alt="" />
    <img className='icon-img' src={services} alt="" />
  </span>
  Online Services Available
</h4>

      </div>
{/* section 6 */}

<div className="customer">
  <h1>What Our Customers Say</h1></div>








    </section>


  

    
  

  




    
  )
}

export default App

    </div>
  )
}

export default fuad
