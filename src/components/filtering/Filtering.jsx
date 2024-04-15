import './Filtering.css'
import { useState} from 'react'
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-router-dom"

const Filtering = ({ minNum , maxNum , onFilterChange , errorMessage }) => {
  const [showBtn1 , setShowBtn1] = useState(false)
  const [showBtn2 , setShowBtn2] = useState(false)
  const [textName, setTextName] = useState("")


  const handleMinNumChange = (e) => {
    const newMinNum = e.target.value
    onFilterChange({ minNum: newMinNum, maxNum })
  }

  const handleMaxNumChange = (e) => {
    const newMaxNum = e.target.value
    onFilterChange({ minNum, maxNum: newMaxNum })
  }

  const handleBtnClose = () => {
    setShowBtn2(false)
  }
   
  return (
    <aside>
    <div className="sidebar_containers">
     <div className="sidebar_containers-div" onClick={() => setShowBtn1(!showBtn1)}>
     <p>Price</p>
     <button>{showBtn1 ? <IoIosArrowUp /> :<IoIosArrowDown />}</button>
    </div>
    {showBtn1 && 
         <>
          {errorMessage && 
          <div>
          <p className="error_message"> Minimum price must be less than the maximum price.</p> 
          </div>
          }

          <div className="number_container">
          <div className="number">
          <label htmlFor="number1">From:</label>
          <input type="number" id="number1" value={minNum} onChange={handleMinNumChange} required />
          </div>
          <div className="number">
          <label htmlFor="number2" className="two">To:</label>
          <input type="number" id="number2" value={maxNum} onChange={handleMaxNumChange} required />
          </div>
          </div>  
          </>   
    }
    </div>

    <div className="sidebar_containers">
    <div className="sidebar_containers-div" onClick={() => setShowBtn2(!showBtn2)}>
    <p>Category</p>
    <button>{showBtn2 ? <IoIosArrowUp /> :<IoIosArrowDown />}</button>
    </div>
    {showBtn2 &&
          <div className="checkbox_container">
          <Link onClick={() => {window.scrollTo(0, 0); handleBtnClose();}} to={`/products`} style={{ textDecoration: "none"}}>
          <div className="checkbox" >
          <p>All</p>
          </div>
          </Link>
          <Link onClick={() => {window.scrollTo(0, 0); handleBtnClose();}} to={`/products/cleanser`} style={{ textDecoration: "none"}}>
          <div className="checkbox">
          <p>Cleanser</p>
          </div>
          </Link>
          <Link onClick={() => {window.scrollTo(0, 0); handleBtnClose();}}  to={`/products/moisturizer`} style={{ textDecoration: "none"}}>
          <div className="checkbox">
          <p>Moisturizer</p>
          </div>
          </Link>
          <Link onClick={() => {window.scrollTo(0, 0); handleBtnClose();}} to={`/products/serum`} style={{ textDecoration: "none"}}>
          <div className="checkbox">
          <p>Serum</p>
          </div>
          </Link>
          <Link onClick={() => {window.scrollTo(0, 0); handleBtnClose();}}  to={`/products/eyecare`} style={{ textDecoration: "none"}}>
          <div className="checkbox">
          <p>Eyecare</p>
          </div>
          </Link>
          <Link onClick={() => {window.scrollTo(0, 0); handleBtnClose();}}  to={`/products/spf`} style={{ textDecoration: "none"}}>
          <div className="checkbox">
          <p>Spf</p>
          </div>
          </Link>
          <Link onClick={() => {window.scrollTo(0, 0); handleBtnClose();}}  to={`/products/lipcare`} style={{ textDecoration: "none"}}>
          <div className="checkbox">
          <p>Lip Care</p>
          </div>
          </Link>
          </div>
    } 
    </div>
    </aside>
  )
}

export default Filtering