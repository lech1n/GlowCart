import './Bestseller.css'
import { Link } from 'react-router-dom'
import Product from '../product/Product.jsx'
import data from '../../data.js'

const Bestseller = () => {
	const item = data.filter((el) => el.id >= 9 && el.id <=12)
	
	return (
		<section className="bestseller_section">
		<h3>Bestseller</h3>
		<div className="bestseller_container">
		{item.map((el) => (
			<Link onClick={() => window.scrollTo(0 , 0 )} key={el.id} to={`/product/${el.id}`} style={{textDecoration:"none"}}>
			<Product key={el.id} img={el.img} name={el.name} price={el.price} />
			</Link>
			))}
		</div>	
		</section>
		)
}

export default Bestseller
