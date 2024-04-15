import './RootLayout.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar.jsx'
import Subnav from '../../components/subnav/SubNav.jsx'
import BigSale from '../../components/bigSale/BigSale.jsx'
import Footer from '../../components/footer/Footer.jsx'



const RootLayout = () => {
	return (
		<div>
		<div className="navbar-sticky">
		<Navbar />
		<Subnav />
		</div>
		<main>
		<Outlet />
		</main>

		<BigSale />
		<Footer />
		</div>
		)
}

export default RootLayout