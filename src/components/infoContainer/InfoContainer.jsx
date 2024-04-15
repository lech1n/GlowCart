import './InfoContainer.css'
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"

const InfoContainer = ({ p , state , setState , secondP }) => {
	return (
		<div className="info_container-div" onClick={() => setState(!state)}>
		<div className="info_container-div-first" >
		<p>{p}</p>
		<button>{state ? <IoIosArrowUp size={25} className="btn-arrows"/> : <IoIosArrowDown size={25} className="btn-arrows"/>}</button>
		</div>
		<div className="info_container-div-second">
		{state && <p>{secondP}</p>}
		</div>
		</div>
		)
}

export default InfoContainer