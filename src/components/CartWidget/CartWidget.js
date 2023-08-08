<<<<<<< HEAD
import React, { useContext } from "react";
import cart from './assets/cart.svg';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img src={cart} alt="cart-widget" className="cart-widget-img" />
      {totalQuantity}
    </Link>
  );
=======
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
>>>>>>> 4cda5213ed9122dd84593e520d6d6e0b09c48096
}

export default CartWidget;
