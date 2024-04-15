import './BigSale.css'
import { Link } from 'react-router-dom'

const BigSale = () => {
	return (
		<section className="bigSale_container">
		<div>
		<h1>Big Spring <span className="bolder">Sale</span></h1>
		<small>Big Spring Sale happening for two straight weeks</small>	
		</div>
		<div>
		<Link onClick={() => window.scrollTo(0 , 0 )} to={`/products`} style={{textDecoration:"none"}}>
		<button className="btn-shopNow">Shop Now </button>
		</Link>
		</div>
		</section>
	)
}

export default BigSale