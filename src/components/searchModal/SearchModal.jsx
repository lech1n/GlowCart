import './SearchModal.css'
import { Link } from 'react-router-dom'

const SearchModal = ({ filteredData , setShowSearch , setSearchValue }) => {
	return (
		<div className="searchModal_container">
		{filteredData.length > 0 ? (
			filteredData.map((item) => (
				<Link onClick={(e) => {window.scrollTo(0, 0); setShowSearch(false); setSearchValue(""); e.stopPropagation();}} to={`/product/${item.id}`} key={item.id} style={{ textDecoration: "none" }}>
				<div key={item.id} className="searchModal_container2">
				<img src={item.img} alt="search image"  className="search_image"/>
				<p className="search_p">{item.name.length < 30 ? item.name : `${item.name.slice(0, 30)}...`}</p>
				</div>
				</Link>
				))
			) : (
			<div className="no_prod_container">
			<p>No product found</p>
			</div>
			)}
			</div>
			)
}

export default SearchModal