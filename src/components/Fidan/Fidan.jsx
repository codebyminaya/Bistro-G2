import React from 'react'
import './Fidan.css'
import food from '../../assets/Fidan img/foodf.png'
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

function Fidan() {
  return (
    <>
    <div className='esas'>

      <div className="orta">

        <div className="sekil">
          <img src={food} alt='foto'/>
          <div className="qara">
            <h3>Come and visit us</h3>
            <div className="elaqe">
              <FiPhone className='ikonn'/>
              <span className='spi'>(414) 857 - 0107</span>
            </div>
            <div className="elaqe">
              <FiMail className='ikonn'/>
              <span className='spi'>happytummy@restaurant.com</span>
            </div>
            <div className="elaqe">
              <FiMapPin className='ikonn' />
              <span className='spi'>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
            </div>
          </div>
        </div>

        <div className="yazi">
          <div className="yazilar">
            <h1 className='we'>We provide healthy food for your family.</h1>
            <p className='our'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
            <p className='at'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            <button className='more'><b>More About Us</b></button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Fidan
