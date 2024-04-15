import './PopularProducts.css'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaChevronRight , FaChevronLeft} from 'react-icons/fa'
import PopularProductsContainer from '../popularProductsContainer/PopularProductsContainer.jsx'
import Caudalie from '../../assets/18.jpg'
import Banner2 from '../../assets/banner2.jpg'
import prod6 from '../../assets/prod6.jpg'
import prod2 from '../../assets/prod2.jpg'

const PopularProducts = () => {
	const [windowWidth , setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
    window.addEventListener('resize' , handleResize)

    return() => {
     window.removeEventListener('resize' , handleResize)
   }
 } , [])



  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite : true,
    autoplay: false,
    autoplaySpeed: 1000,
  }


  return (
  	<section className="popularProducts-section">
    {	windowWidth <= 700 ? (
      <div className="slick_container">
      <Slider {...settings} className="slider" >
      <div className="popularProducts_container1">
      <PopularProductsContainer  link={'products'} img={Banner2} title={"Lorem Dorem Ipsum"} description={"Lorem Dorem Ipsum Lorem Dorem Ipsum"}/>
      </div>
      <div className="popularProducts_container2">
      <PopularProductsContainer link={'product/9'} img={prod2} title={"Lorem Dorem Ipsum"} description={"Lorem Dorem Ipsum Lorem Dorem Ipsum"}/>
      </div>
      <div className="popularProducts_container3" >
      <PopularProductsContainer link={'product/10'} img={prod6} title={"Lorem Dorem Ipsum"} description={"Lorem Dorem Ipsum Lorem Dorem Ipsum"}/>
      </div>
      <div className="popularProducts_container4">
      <PopularProductsContainer  link={'product/20'} img={Caudalie} title={"Lorem Dorem Ipsum"} description={"Lorem Dorem Ipsum Lorem Dorem Ipsum"}/>
      </div>
      </Slider>
      </div>
      ):(
      <div className="popularProducts_container">
      <div className="popularProducts_container1">
      <PopularProductsContainer link={'products'} img={Banner2} title={"Lorem Dorem Ipsum"} description={"Lorem Dorem Ipsum Lorem Dorem Ipsum"}/>
      </div>
      <div className="popularProducts_container2">
      <PopularProductsContainer  link={'product/9'} img={prod2} title={"Lorem Dorem Ipsum"} description={"Lorem Dorem Ipsum Lorem Dorem Ipsum"}/>
      </div>
      <div className="popularProducts_container3" >
      <PopularProductsContainer link={'product/10'} img={prod6} title={"Lorem Dorem Ipsum"} description={"Lorem Dorem Ipsum Lorem Dorem Ipsum"}/>
      </div>
      <div className="popularProducts_container4">
      <PopularProductsContainer  link={'product/20'} img={Caudalie} title={"Lorem Dorem Ipsum"} description={"Lorem Dorem Ipsum Lorem Dorem Ipsum"}/>
      </div>
      </div>
      )}
      </section>  
      )
}


export default PopularProducts