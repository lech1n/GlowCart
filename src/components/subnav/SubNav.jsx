import './SubNav.css'
import { Link } from 'react-router-dom'

const SubNav = () => {
	
	return (
		<div className="subnav_container">
		<div>
		<Link  onClick={() => window.scrollTo(0, 0)}  to={`/products/cleanser`} style={{textDecoration:"none"}}>
		<div className="subnav_div">
		<span className="subnav_span">Cleanser</span>
		</div>
		</Link>

		<Link onClick={() => window.scrollTo(0, 0)} to={`/products/moisturizer`} style={{textDecoration:"none"}}>
		<div className="subnav_div">
		<span className="subnav_span">Moisturizer</span>
		</div>
		</Link>

		<Link  onClick={() => window.scrollTo(0, 0)}  to={`/products/serum`} style={{textDecoration:"none"}}>
		<div className="subnav_div">
		<span className="subnav_span">Serum</span>
		</div>
		</Link>

		<Link  onClick={() => window.scrollTo(0, 0)}  to={`/products/eyecare`} style={{textDecoration:"none"}}>
		<div className="subnav_div">
		<span className="subnav_span">Eyecare</span>
		</div>
		</Link>

		<Link  onClick={() => window.scrollTo(0, 0)}  to={`/products/spf`} style={{textDecoration:"none"}}>
		<div className="subnav_div">
		<span className="subnav_span">Spf</span>
		</div>
		</Link>

		<Link  onClick={() => window.scrollTo(0, 0)}  to={`/products/lipcare`} style={{textDecoration:"none"}}>
		<div className="subnav_div">
		<span className="subnav_span">Lip Care</span>
		</div>
		</Link>

		</div>
		</div>
		)
}

export default SubNav