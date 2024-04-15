import './SubHero.css'
import SubHeroProducts from '../subHeroProducts/SubHeroProducts.jsx'
import prod1 from '../../assets/prod1.png'
import prod3 from '../../assets/prod3.jpg'
import prod4 from '../../assets/prod4.jpg'

const SubHero = () => {
	return (
		<section className="subHero_container">
		<div className="division"  style={{backgroundColor:"#FFF9F0"}}> 
		<SubHeroProducts img={prod3} title={"iS Clinical Hydra-Cool Serum"} description={"A  multi-use formula to restore hydration."}/>
		</div>
		<div className="division two" style={{backgroundColor:"#f2e3cb"}}>
		<SubHeroProducts img={prod4} title={"Caudalie Premier Skin Barrier Rich Moisturizer"} description={"A rich moisturizer that repairs skin barrier."}/>
		</div>
		<div className="division">
		<SubHeroProducts  img={prod1} title={"Dr. Loretta Gentle Hydrating Cleanser"} description={"A cleanser that removes makeup and impurities."}/>
		</div>
		</section>
		)
}

export default SubHero