import Hero from  '../../components/hero/Hero.jsx'
import SubHero from '../../components/subHero/SubHero.jsx'
import Categories from  '../../components/categories/Categories.jsx'
import NewArrival from '../../components/newArrival/NewArrival.jsx'
import PopularProducts from '../../components/popularProducts/PopularProducts.jsx'
import Bestseller from '../../components/bestseller/Bestseller.jsx'


const Home = () => {
	return (
		<div>
		<Hero />
		<SubHero />
		<Categories />
		<NewArrival />
		<PopularProducts />
		<Bestseller />
		</div>
		)
}

export default Home