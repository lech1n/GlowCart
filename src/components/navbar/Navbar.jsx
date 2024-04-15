import './Navbar.css'
import { Link } from "react-router-dom"
import { useState, useContext, useEffect } from 'react'
import { CiShoppingCart } from "react-icons/ci"
import { GiHamburgerMenu } from "react-icons/gi"
import { FiX } from "react-icons/fi"
import { CartContext } from '../productPageShowcase/ProductPageShowcase.jsx'
import Cart from '../cart/Cart.jsx'
import data from '../../data.js'
import SearchModal from '../searchModal/SearchModal.jsx'

const Navbar = () => {
	const [showNav, setShowNav] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [showSearch , setShowSearch] = useState(false)
	const [searchValue , setSearchValue] = useState("")
	const { cartItems } = useContext(CartContext)

	const filteredData = data.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
	const toggle = () => {
		setShowModal(!showModal)
	}

	const handleShowNav = () => {
		setShowNav(!showNav)
	} 

	const handleCartClick = () => {
		setShowModal(true)
	}

	const handleBoth = () =>{
		handleShowNav()
		handleCartClick()
	}

	const handleSearch = (e) => {
		setSearchValue(e.target.value)
		setShowSearch(e.target.value !== '')
	}

	const handleSearchModalClose = () => {
		setShowSearch(false)
	}


	return (
		<>
		<nav>
		<div className="logo_container">
		<Link to="/" style={{textDecoration:"none"}}>
		<h1 className="logo_text" style={{color:"#293241"}}>GlowCart</h1>
		</Link>
		<div className="search_input_container">
		<input className="search_input" type="text" placeholder="Search" value={searchValue} onChange={handleSearch}  />
		{showSearch && <SearchModal filteredData={filteredData} setShowSearch={setShowSearch} setSearchValue={setSearchValue}/>}
		<div className="fix_search" onClick={handleSearchModalClose}><FiX /></div>
		</div>
		</div>
		<div className="hamburger_menu" onClick={handleShowNav}>
		{showNav ? <FiX /> : <GiHamburgerMenu/> }
		</div>
		<div className={`ul_container ${showNav && 'active'}`}>
		<ul>
		<Link to="/" style={{textDecoration:"none"}}>
		<li className="grey" onClick={handleShowNav}>Home</li>
		</Link>
		<li><a href="#footer" className="grey" onClick={handleShowNav}>About</a></li>
		<li><a href="#footer" className="grey" onClick={handleShowNav}>Contact Us</a></li>
		<div className="cart-icon" onClick={handleBoth} >
		{!showModal && <li className="black" onClick={toggle}><CiShoppingCart /></li>}
		{cartItems.length > 0 && <div className="cart-count">{cartItems.length}</div>}
		</div>
		</ul>
		</div>
		</nav>

		<Cart showModal={showModal} toggle={toggle} />

		</>
		)
}

export default Navbar