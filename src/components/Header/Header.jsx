
import { Link } from 'react-router-dom'
import "./Header.css";
import logo from '../../assets/food-logo.png'


function Header() {
  return (
    <header>
      <div className="head-top">
       
        
          <div className="first-icon">
          <div className='top-icons'>
            <i className="fa-light fa-phone"></i>
          <p>(414) 857 - 0107</p>
        </div>
        <div className="second-icon">
         <i className="fa-light fa-envelope"></i>
          <p>yummy@bistrobliss</p>
          </div>
        
        
        <div className="third-icon">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-github"></i>
        </div>
        </div>
      </div>

      <div className="head-main">
        <div className="head-logo">
          <img src={logo}/>
           <i><strong>Bistro Bliss</strong></i>
        </div>
        <nav>
          <ul>
            <li>
              <Link className='a-home' to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="head-btn">
          <button>Book A Table</button>
        </div>
      </div>
    </header>
  );
}

export default Header;