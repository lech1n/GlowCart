import './SubHeroProducts.css'

const SubHeroProducts = ({ img , title , description }) => {
	return (
		<div className="subHeroProducts_container">
		<div className="subHeroProducts_img">
		<img src={img} alt="products"/>
		</div>
		<div className="subHeroProducts_description">
		<h2>{title}</h2>
		<p>{description}</p>
		</div>
		</div>
		)
}

export default SubHeroProducts