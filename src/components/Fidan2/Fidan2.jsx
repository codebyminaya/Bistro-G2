import React from 'react'
import './Fidan2.css'
import caterings from '../../assets/Fidan img/caterings.jpg'
import birthdays from '../../assets/Fidan img/birthdays.jpg'
import weddings from '../../assets/Fidan img/weddings.jpg'
import events from '../../assets/Fidan img/events.jpg'

const Fidan2 = () => {
  return (
    <>
    <div className='esas2'>
      <div className="orta2">
        <div className="also">
          <h1 className='unique'>We also offer unique<br></br>services for your events</h1>
        </div>
        <div className="wedding">
          <div className="carddd">
            <img src={caterings} alt='foto'/>
            <h2 className='newh2'>Caterings</h2>
            <p className='p2'>In the new era of technology we look in the future with certainty for life.</p>
          </div>
          <div className="carddd">
            <img src={birthdays} alt='foto'/>
            <h2 className='newh2'>Birthdays</h2>
            <p className='p2'>In the new era of technology we look in the future with certainty for life.</p>
          </div>
          <div className="carddd">
            <img src={weddings} alt='foto'/>
            <h2 className='newh2'>Weddings</h2>
            <p className='p2'>In the new era of technology we look in the future with certainty for life.</p>
          </div>
          <div className="carddd">
            <img src={events} alt='foto'/>
            <h2 className='newh2'>Events</h2>
            <p className='p2'>In the new era of technology we look in the future with certainty for life.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Fidan2
