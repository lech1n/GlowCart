import './Hero.css'
import banner from '../../assets/banner1.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
	return (
		<section className="hero_container-main">
		<div className="hero_container">
		<div className="hero_container-description">
		<h1>Discover Radiant Skin</h1>
		<p>Elevate Your Beauty with Our Premium Skincare Products. Embrace Your Glow and Indulge in Luxury. Shop Now for a Beautiful You!</p>
		<Link onClick={() => window.scrollTo(0 , 0 )} to={`/products`} style={{textDecoration:"none"}}>
		<button className="hero_container-description-button">Shop Now</button>
		</Link>
		</div>
		<div className="hero_container-img">
		<img src={banner} alt="banner" />
		</div>
		</div>
		</section>
		)
}

export default Hero