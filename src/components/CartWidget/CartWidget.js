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
}

export default CartWidget;
