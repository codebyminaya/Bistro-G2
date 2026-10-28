import React from 'react';
import './Resad2.css';

function MenuPage() {
  return (
    <div className="umumi">


      <div className="yuxarisekil">
        <div className="basyazi">
          <h1>Best food for your taste</h1>
          <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>

          <div className="buton">
            <button className="qirmizi">Book A Table</button>
            <button className="ag">Explore Menu</button>
          </div>
        </div>
      </div>


      <div className="menuolcu">

        <div className="ortayazi">
          <h2>Browse Our Menu</h2>
        </div>


        <div className="kartkonteynr">


          <div className="kartlar">
            <div className="ikonlar">
              <i className="fa-solid fa-mug-hot"></i>
            </div>
            <h3>Breakfast</h3>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <span className="kartmenu">Explore Menu</span>
          </div>


          <div className="kartlar">
            <div className="ikonlar">
              <i className="fa-solid fa-utensils"></i>
            </div>
            <h3>Main Dishes</h3>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <span className="kartmenu">Explore Menu</span>
          </div>


          <div className="kartlar">
            <div className="ikonlar">
              <i className="fa-solid fa-wine-glass"></i>
            </div>
            <h3>Drinks</h3>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <span className="kartmenu">Explore Menu</span>
          </div>


          <div className="kartlar">
            <div className="ikonlar">
              <i className="fa-solid fa-cake-candles"></i>
            </div>
            <h3>Desserts</h3>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <span className="kartmenu">Explore Menu</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default MenuPage;