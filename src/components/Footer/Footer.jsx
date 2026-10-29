
import "./Footer.css";
import logo1 from '../../assets/img.png'
import logo3 from '../../assets/japanese-food.png'


const Footer = () => {
  return (
    <>
      <footer>
        <div className="main">
          <div className="main-text">
           <div className='main-img' > <img  className='l3' src={logo3}/>
            <i><strong>Bistro Bliss</strong></i> </div>
            
           <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
             <div className="main-icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-github"></i>
        </div>
          </div>
          

<div className="main-pages">
  <ul>
    <li>Pages</li>
    <li>Home</li>
    <li>About</li>
    <li>Menu</li>
    <li>Pricing</li>
    <li>Blog</li>
    <li>Contact</li>
    <li>Delivery</li>
  </ul>

  <ul>
    <li>Utility Pages</li>
    <li>Start Here</li>
    <li>Styleguide</li>
    <li>Password Protected</li>
    <li>404 Not Found</li>
    <li>Licenses</li>
    <li>Changelog</li>
    <li>View More</li>
  </ul>


          </div>
          
<div className="main-photo">
  <div><h4>Follow Us On Instagram</h4></div>
  <img className="l1" src={logo1} alt="Bistro Bliss food gallery" />
</div>


</div>

      </footer>
    </>
  )
}

export default Footer
