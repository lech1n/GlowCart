import './Product.css'
import { useState } from 'react'

const Product = ({ img , name , price }) => {

	return (
		<div className="product_container">
		<img src={img} alt="product" className="product_container-img"/>
		<p className="product_container-name">{name}</p>
		<p className="product_container-price">€{price}</p>
		<button className="btn">Buy Now</button>
		</div>
		)
}

export default Product