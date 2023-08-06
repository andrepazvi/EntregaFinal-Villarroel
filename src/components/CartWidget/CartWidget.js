import React, { useContext } from "react"
import cart from './assets/cart.svg'
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
   const { totalQuantity } = useContext(CartContext)


    return (
        <Link to='/Cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
           <img src={cart} alt="cart-widget" className="cart-widget-img"/>
           {totalQuantity}
        </Link>
    )
}

export default CartWidget