import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../productPageShowcase/ProductPageShowcase.jsx'
import { FiX } from "react-icons/fi"

const Cart = ({ showModal, toggle }) => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

  return (
    <div className="cart_container">
    <div className={`cart-overlay ${showModal ? 'show' : ''}`} onClick={toggle}></div>
    <div className={`cart-container ${showModal ? 'show' : ''}`}>
    <div className="cart_title">
    <h3 className="cart_h3">Shopping Cart</h3>
    <button onClick={toggle} className="cart_btn"><FiX /></button>
    </div>
    <div>
    {cartItems.map((item) => (
      <div key={item.id} className="cart_prod">
      <div className="cart_prod-1">
      <img className="cart_img" src={item.img} alt={item.name} />
      <div>
      <h4 className="cart-font">{item.name}</h4>
      <p className="cart-font">{item.price}.00$</p>
      </div>
      </div>
      <div className="cart_prod-2">
      <button className="cart_btn" onClick={() => addToCart(item , 1)}>+</button>
      <p className="cart-font">{item.quantity}</p>
      <button className="cart_btn" onClick={() => removeFromCart(item)}>-</button>
      </div>
      </div>
      ))}
    </div>
    {
      cartItems.length > 0 ? (
        <div>
        <h3 className="cart_h3">Total: ${getCartTotal()}</h3>
        <div className="cart_btn_container">
        <button className="black-btn">Checkout</button>
        <button className="white-btn" onClick={clearCart}>Clear Cart</button>
        </div>
        </div>
        ) : (
        <p className="cart-font empty">Your cart is empty</p>
        )
      }
      </div>
      </div>
      )
}

export default Cart;
