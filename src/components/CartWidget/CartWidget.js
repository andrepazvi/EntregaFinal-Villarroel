import React from "react"
import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
           <img src={cart} alt="cart-widget" className="cart-widget-img"/>
           0
        </div>
    )
}

export default CartWidget