  import data from '../../data.js'
  import { useOutletContext} from 'react-router-dom'
  import Pagination from './Pagination.jsx'
  import noProd from "../../assets/no-prod.jpg"
  import '../../components/productsPageProd/ProductsPageProd.css'

  const Lipcare = () => {
  	const [filteredData] = useOutletContext()

    const filteredProducts = filteredData.filter(item => item.category === "lipcare")
    return (
      <>
      <div className="category-name_container">
      <p>Lip Care</p>
      </div>
      {filteredProducts.length > 0 && (
        <Pagination data={filteredProducts}/>
        )}
       
      { filteredProducts.length  === 0 &&
      (<div className="no_prod_found_container">
        <p>No products found.</p>
        <img src={noProd} alt="no products found" />
        </div>
        )}
      </>
      )
  }

  export default Lipcare
