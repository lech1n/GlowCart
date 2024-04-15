import './Products.css'
import ProductsPageProd from '../../components/productsPageProd/ProductsPageProd.jsx'
import Filtering from "../../components/filtering/Filtering.jsx"
import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa"

const Products = () => {
  const [minNum, setMinNum] = useState(0)
  const [maxNum, setMaxNum] = useState(150)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    Number(minNum) >= Number(maxNum) ?  setErrorMessage(true) : setErrorMessage(false)
  }, [minNum , maxNum])


  const handleFilterChange = ({ minNum, maxNum}) => {
    setMinNum(minNum)
    setMaxNum(maxNum)
  }

  

  return (
    <section>
    <div className="productPageShowcase_links">
    <Link onClick={() => window.scrollTo(0, 0)} to={`/`} style={{ textDecoration: "none"}}>
    <span className="productPageShowcase_spans"><FaArrowLeft /> Home</span>
    </Link>
    </div>
    <div className="pageProduct_section">
    
    <Filtering
    minNum={minNum}
    maxNum={maxNum}
    onFilterChange={handleFilterChange} 
    errorMessage={errorMessage}
    />

    <ProductsPageProd 
    minNum={minNum}
    maxNum={maxNum}
    />
    </div>
    </section>
    )
}


export default Products