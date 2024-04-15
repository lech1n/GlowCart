import './Footer.css'
import { FaTwitter , FaFacebookF , FaTiktok , FaInstagramSquare } from "react-icons/fa"


const Footer = () => {
	return (
		<footer id="footer">
    <div className="footer_container">
    <div className="footer_main-container">
    <h3>GlowCart</h3>
    <p>We are a skincare shop located in Italy but accessible worldwide</p>
    </div>
    <div className="footer_second-container-main">
    
    <div className="footer_second-container">
    <h4>Assistance to the buyer</h4>
    <ul>
    <li>Find an order</li>
    <li>Frequently asked questions</li>
    <li>Exchange and return of goods</li>
    </ul>
    </div>
    <div className="footer_second-container">
    <h4>Services</h4>
    <ul>
    <li>Bonus program</li>
    <li>Gift cards</li>
    <li>Credit and payment</li>
    </ul>
    </div>
    </div>
    </div>

    <div className="icon_container">
    <a href="https://twitter.com/" target="_blank" rel="nonopener noreferrer">   <FaTwitter /> </a>
    <a href="https://www.facebook.com/" target="_blank" rel="nonopener noreferrer">   <FaFacebookF />  </a>
    <a href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F&lang=en&enter_method=mandatory" target="_blank" rel="nonopener noreferrer">   <FaTiktok />  </a>
    <a href="https://www.instagram.com/" target="_blank" rel="nonopener noreferrer">  <FaInstagramSquare />  </a>
    </div>
    </footer>
    )
}

export default Footer