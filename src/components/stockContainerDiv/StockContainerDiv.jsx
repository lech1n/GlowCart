import './StockContainerDiv.css'

const StockContainerDiv = ({ icon , pOne , pTwo }) => {
	return (
		<>
		<div className="stockContainerDiv_icon">
		{icon}
		</div>

		<div className="stockContainerDiv_ps">
		<p className="stockContainerDiv_ps-one">{pOne}</p>
		<p className="stockContainerDiv_ps-two">{pTwo}</p>
		</div>
		</>
		)
}

export default StockContainerDiv