import './popularProductsContainer.css'
import { Link } from 'react-router-dom' 

const PopularProductsContainer = ({ img , title , description , link }) => {
	return (
		<div className="popularProductsContainer_container">
		<div className="popularProductsContainer_img">
		<img src={img} alt="product-img" />
		</div>
		<div className="popularProductsContainer_description">
		<h3>{title}</h3>
		<p>{description}</p>
		<Link onClick={() => window.top(0 , 0 )} to={`/${link}`} style={{textDecoration:"none"}}>
		<button className="btn-shopNow">Shop Now</button>
		</Link>
		</div>
		</div>
		)
}

export default PopularProductsContainer