import './ProductPageShowcase.css'
import { useState , useContext , createContext } from 'react'
import { Link , useNavigate , useParams } from 'react-router-dom'
import data from '../../data.js'
import StockContainerDiv from '../stockContainerDiv/StockContainerDiv.jsx'
import InfoContainer from '../infoContainer/InfoContainer.jsx'
import { FaPlus } from "react-icons/fa6"
import { FaMinus , FaChevronRight } from "react-icons/fa"
import { CiDeliveryTruck } from "react-icons/ci"
import { CiShop } from "react-icons/ci"
import { IoShieldCheckmarkOutline } from "react-icons/io5"

export const CartContext = createContext()

const ProductPageShowcase = () => {
	const [showOverview , setShowOverview] = useState(false)
	const [showUse , setShowUse] = useState(false)
	const [showIngredients , setShowIngredients] = useState(false)
	const [notify , setNotify] = useState(false)
	const [counter , setCounter] = useState(1)
	const {addToCart , cartItems} = useContext(CartContext)
	const {id} = useParams()

	const minus = () => {
		counter > 1 && setCounter(counter - 1)
	}

	const plus = () => {
		counter >=1  && setCounter(counter + 1)
	}

	const calcPrice = (counter , el) => {
		return counter * el.price
	}


	return (
		<section className="productPageShowcase_section">
		{data.map((el) => (
			el.id == id && (
				<div key={el.id}>
				<div className="productPageShowcase_links">
				<Link onClick={() => window.scrollTo(0, 0)} to={`/`} style={{ textDecoration: "none"}}>
				<span className="productPageShowcase_spans">Home</span>
				</Link>
				<span className="productPageShowcase_spans iconnn"> <FaChevronRight /> </span>
				<Link onClick={() => window.scrollTo(0, 0)} to={`/products`} style={{ textDecoration: "none"}}>
				<span className="productPageShowcase_spans">Products</span>
				</Link>
				</div>

				<div   className="productPageShowcase_container">
				<div className="img_container">
				<img src={el.img} alt="img" />
				</div>

				<div className="description_container">
				<h1>{el.name}</h1>
				<h2>€{el.price}</h2>
				<p>{el.description}</p>

				<div className="quantity_container">
				<label htmlFor="quantity" className="label">Quantity</label>
				<div>
				<button onClick={minus}> <FaMinus /> </button>
				<input type="number" min="1" value={counter}  readOnly id="quantity" />
				<button onClick={plus}> <FaPlus /> </button>
				</div>
				</div>

				{counter > 1 && <div className="prod_price">
				<p>{calcPrice(counter,el)}.00$</p>
				</div>}
				
				<div className="btn_container">
				<button className="white-btn">Buy Now</button>
				<button className="black-btn" onClick={() => {
					addToCart(el ,counter);
					setNotify(true);
				}}
				>Add to Cart
				</button>
				</div>

				<div className="stock_container">
				<div className="stock_container-div">
				<StockContainerDiv icon={<CiDeliveryTruck size={30} />} pOne={"Free Delivery"} pTwo={"1-2 day"} />
				</div>
				<div className="stock_container-div">
				<StockContainerDiv  icon={<CiShop size={30}/>} pOne={"In Stock"} pTwo={"Today"} />
				</div>
				<div className="stock_container-div">
				<StockContainerDiv   icon={<IoShieldCheckmarkOutline size={30}/>} pOne={"Guaranteed"} pTwo={"1 year"} />
				</div>
				</div>
				</div>
				</div>

				<div className="info_container">
				<InfoContainer  p={"Product Overview"} state={showOverview}  setState={setShowOverview} secondP={el.overview}/>
				<InfoContainer p={"How To Use"} state={showUse}  setState={setShowUse} secondP={el.use}/>
				<InfoContainer p={"Ingredients"} state={showIngredients}  setState={setShowIngredients} secondP={el.ingredients}/>
				</div>
				</div>
				)
			))}

		{notify && 
		<div 
		onAnimationEnd={() => setNotify(false)}
		className={`show-notify ${notify ? "slide-in" : ""}`}>
		<p> Item has been added to the cart </p>
		</div>
	}

	</section>
	)
}

export default ProductPageShowcase