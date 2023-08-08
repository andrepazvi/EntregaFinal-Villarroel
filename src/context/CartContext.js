<<<<<<< HEAD
import React from 'react';

export const CartContext = React.createContext({
  cart: [],
  total: 0,
  totalQuantity: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [totalQuantity, setTotalQuantity] = React.useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
      setTotalQuantity(prev => prev + quantity);
      setTotal(prev => prev + item.price * quantity);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const itemToRemove = cart.find(item => item.id === itemId);
    if (itemToRemove) {
      setTotalQuantity(prev => prev - itemToRemove.quantity);
      setTotal(prev => prev - itemToRemove.price * itemToRemove.quantity);
      setCart(prev => prev.filter(item => item.id !== itemId));
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setTotalQuantity(0);
  };

  const isInCart = (itemId) => {
    return cart.some(item => item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, total, totalQuantity, addItem, removeItem, clearCart }}>
=======
import React from 'react'
import { createContext, useState } from 'react'


export const CartContext = createContext({
    cart: []
  });
  
  export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  

   console.log(cart)

   const addItem = (item, quantity) => {
    if(!isInCart(item.id)) {
        setCart(prev => [...prev, {...item, quantity}])
    } else {
        console.error('El producto ya fue agregado')
    }
   }

   const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
   }

   const clearCart = () => {
    setCart([])
   }

   const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
   }

   return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
>>>>>>> 4cda5213ed9122dd84593e520d6d6e0b09c48096
      {children}
    </CartContext.Provider>
  );
};

<<<<<<< HEAD
export default CartContext;

=======
export default CartContext
>>>>>>> 4cda5213ed9122dd84593e520d6d6e0b09c48096
