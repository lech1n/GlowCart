  import { useState, useEffect } from 'react'
  import ReactPaginate from 'react-paginate'
  import {Link} from 'react-router-dom'
  import Product from '../../components/product/Product.jsx'
  import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md"
  import '../../components/productsPageProd/ProductsPageProd.css'

  const Pagination = ({data}) => {
    const [currentPage , setCurrentPage] = useState(0)
    const [totalPages , setTotalPages] = useState(0)
    const itemsPerPage = 12

    useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage))
  }, [data])

   const handlePageChange = ({selected}) => {
      setCurrentPage(selected)
    }

    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const displayedData = data.slice(startIndex, endIndex)

    
    return (
      <>
       <div className="productsPageProd_container">
              {displayedData.map((item) => (
                  <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${item.id}`} key={item.id} style={{ textDecoration: "none" }}>
                  <div key={item.id} className="productsPageProd_div">
                    <Product img={item.img} name={item.name} price={item.price} el={item} id={item.id}/>
                  </div>
                  </Link>
              ))}
            </div>

    <ReactPaginate
      pageCount={totalPages}
      onPageChange={handlePageChange}
      forcePage={currentPage >= totalPages ? totalPages - 1 : currentPage}
      previousLabel={<MdKeyboardDoubleArrowLeft />}
      nextLabel={<MdKeyboardDoubleArrowRight />}
      breakLabel={"..."}
      containerClassName={"pag_buttons"}
      pageLinkClassName={"pag_buttons_a"}
      activeLinkClassName={"pag_buttons_active"}
      onClick={() => window.scrollTo(0, 0)}
    />
    </>
  )
  }

  export default Pagination