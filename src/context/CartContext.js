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
      {children}
    </CartContext.Provider>
  );
};
