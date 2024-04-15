import "./NewArrival.css"
import { Link } from 'react-router-dom'
import Product from '../product/Product.jsx'
import data from '../../data.js'


const NewArrival = () => {
	const filteredProd = data.filter((item) => item.id <= 8)
	
	return (
		<section className="newArrival_section">
		<h3>New Arrival</h3>
		<div   className="newArrival_container">
		{filteredProd.map((item) => (
			<Link onClick={() => window.scrollTo(0 , 0 )} key={item.id} to={`/product/${item.id}`} style={{textDecoration:"none"}}>
			<Product key={item.id} img={item.img} name={item.name} price={item.price} />
			</Link>
			))}
		</div>
		</section>
		)
}

export default NewArrival