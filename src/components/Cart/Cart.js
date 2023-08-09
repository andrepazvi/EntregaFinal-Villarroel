import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Estás seguro de limpiar tu carrito?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire('Carrito limpio', '', 'success');
      }
    });
  };

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map(p => <CartItem key={p.id} {...p} />)}
      <h3>Total: ${total}</h3>
      <button onClick={handleClearCart} className="Button">Limpiar Carrito</button>
      <Link to='/' className='Option'>Seguir Mirando</Link>
      <Link to='/checkout' className='Option'>Pagar</Link>
    </div>
  );
}


export default Cart
