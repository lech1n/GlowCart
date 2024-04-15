import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { useState , useEffect } from 'react'
import RootLayout from './pages/rootLayout/RootLayout.jsx'
import Home from './pages/home/Home.jsx'
import Products from './pages/products/Products.jsx'
import Product from './pages/product/Product.jsx'
import All from './pages/categories/All.jsx'
import Cleanser from './pages/categories/Cleanser.jsx'
import Eyecare from './pages/categories/Eyecare.jsx'
import Lipcare from './pages/categories/Lipcare.jsx'
import Moisturizer from './pages/categories/Moisturizer.jsx'
import Serum from './pages/categories/Serum.jsx'
import Spf from './pages/categories/Spf.jsx'
import {CartContext} from './components/productPageShowcase/ProductPageShowcase.jsx'

const App = () => {
	const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
	

	const addToCart = (item ,quantity) => {
		const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)

		if (isItemInCart) {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === item.id
					? { ...cartItem, quantity: cartItem.quantity + quantity }
					: cartItem
					)
				)
		} else {
			setCartItems([...cartItems, { ...item, quantity }])
		}
	}


	const removeFromCart = (item) => {
		const foundItem = cartItems.find((cartItem) => cartItem.id === item.id)

		if (foundItem.quantity === 1) {
			setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
		} else {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === item.id
					? { ...cartItem, quantity: cartItem.quantity - 1 }
					: cartItem
					)
				)
		}
	}

	const clearCart = () => {
		setCartItems([])
	}

	const getCartTotal = () => {
		return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
	}

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems))
	}, [cartItems])

	useEffect(() => {
		const cartItems = localStorage.getItem("cartItems")
		if (cartItems) {
			setCartItems(JSON.parse(cartItems))
		}
	}, [])

	return (
		<CartContext.Provider value={{
			cartItems,
			addToCart,
			removeFromCart,
			clearCart,
			getCartTotal,
		}}>
		<>
		<BrowserRouter>
		<Routes>
		<Route path='/' element={<RootLayout />}>
		<Route index element={<Home />} />
		<Route path="/products" element={<Products />}>
		<Route index element={<All />} />
		<Route path="/products/cleanser" element={<Cleanser />} />
		<Route path="/products/eyecare" element={<Eyecare />} />
		<Route path="/products/lipcare" element={<Lipcare />} />
		<Route path="/products/moisturizer" element={<Moisturizer />} />
		<Route path="/products/serum" element={<Serum />} />
		<Route path="/products/spf" element={<Spf />} />
		</Route>
		<Route path="/product/:id" element={<Product />} />
		</Route>
		</Routes>
		</BrowserRouter>
		</>
		</CartContext.Provider>
		)
}

export default App