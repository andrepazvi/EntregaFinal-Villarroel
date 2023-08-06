import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, title, price, quantity }) => {
    const { removeItem } = useContext(CartContext);
  
    const handleRemoveItem = () => {
      removeItem(id);
    };
  
    return (
      <div className="cart-item">
        <h4>{title}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${price}</p>
        <button onClick={handleRemoveItem}>Quitar</button>
      </div>
    );
  };
  
  export default CartItem;