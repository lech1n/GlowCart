  import data from '../../data.js'
  import { useOutletContext } from 'react-router-dom'
  import noProd from "../../assets/no-prod.jpg"
  import Pagination from './Pagination.jsx'
  import '../../components/productsPageProd/ProductsPageProd.css'

  const All = () => {
  	const [filteredData ] = useOutletContext()
  	

  	return (
      <> 
      
      <div className="category-name_container">
      <p>All products</p>
      </div>
      {filteredData.length > 0 && (
        <Pagination data={filteredData}/>
        )}
        
        { filteredData.length  === 0 &&
      (<div className="no_prod_found_container">
        <p>No products found.</p>
        <img src={noProd} alt="no products found" />
        </div>
        )}
      </>
      )
  }

  export default All
