import { Link , Outlet , useOutletContext } from 'react-router-dom'
import { useState , useEffect} from 'react'
import './ProductsPageProd.css'
import Product from '../product/Product.jsx'
import data from '../../data.js'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

const ProductsPageProd = ({minNum , maxNum }) => {

  const [filteredData , setFilteredData] = useState([])
  
  useEffect(() => {

    let filtered = data.filter(
      (item) =>
      item.price >= minNum &&
      item.price <= maxNum 
      )
    setFilteredData(filtered)
  }, [minNum, maxNum])

  return (
   <section>
   <Outlet context={[filteredData]}/>
   </section>
   )
}

export default ProductsPageProd