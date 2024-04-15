import './Categories.css'
import { Link } from 'react-router-dom'
import cleanser from '../../assets/wash-face.png'
import moisturizer from '../../assets/moisturizing.png'
import serum from '../../assets/serum.png'
import eyecare from '../../assets/eye-cream.png'
import spf from '../../assets/sunscreen.png'
import lipcare from '../../assets/lips.png'


const Categories = () => {
	return (
		<section className="categories_container1">
		<h3>Browse By Category</h3>
		<div className="categories_container2">
		<Link onClick={() => window.scrollTo(0, 0)} to={`/products/cleanser`} style={{textDecoration:"none"}}>
		<div className="categories_container2-icons">
		<img src={cleanser} alt="icons" />
		<p>Cleanser</p>
		</div>
		</Link>
		<Link onClick={() => window.scrollTo(0, 0)}  to={`/products/moisturizer`} style={{textDecoration:"none"}}>
		<div className="categories_container2-icons">
		<img src={moisturizer} alt="icons" />
		<p>Moisturizer</p>
		</div>
		</Link>
		<Link onClick={() => window.scrollTo(0, 0)} to={`/products/serum`} style={{textDecoration:"none"}}>
		<div className="categories_container2-icons">
		<img src={serum} alt="icons" />
		<p>Serum</p>
		</div>
		</Link>
		<Link  onClick={() => window.scrollTo(0, 0)}  to={`/products/eyecare`} style={{textDecoration:"none"}}>
		<div className="categories_container2-icons">
		<img src={eyecare} alt="icons" />
		<p>Eyecare</p>
		</div>
		</Link>
		<Link onClick={() => window.scrollTo(0, 0)}  to={`/products/spf`} style={{textDecoration:"none"}}>
		<div className="categories_container2-icons">
		<img src={spf} alt="icons" />
		<p>Spf</p>
		</div>
		</Link>
		<Link  onClick={() => window.scrollTo(0, 0)}  to={`/products/lipcare`} style={{textDecoration:"none"}}>
		<div className="categories_container2-icons">
		<img src={lipcare} alt="icons" />
		<p>Lip Care</p>
		</div>
		</Link>
		</div>	
		</section>
		)
}

export default Categories
