import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from '../../context/CartContext';

<<<<<<< HEAD
const ItemDetail = ({ product }) => {

  const [disabledButton, setDisabledButton] = useState(true);
  const { addItem } = useContext(CartContext);
=======
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {

  const [disabledButton, setDisabledButton] = useState(true)

  const { addItem } = useContext(CartContext)
>>>>>>> 4cda5213ed9122dd84593e520d6d6e0b09c48096

  const handleAddToCart = (quantity) => {
    addItem({ 
      id: product.id,
      name: product.name,
      price: product.price
    }, quantity);
<<<<<<< HEAD
    setDisabledButton(false);
=======
    setDisabledButton(true);
>>>>>>> 4cda5213ed9122dd84593e520d6d6e0b09c48096
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{product.name}</h2>
      </header>
      <picture>
        <img src={product.img} alt={product.name} className="ItemImg" />
      </picture>
      <p className="Info">Categoría: {product.category}</p>
      <p className="Info">Descripción: {product.description}</p>
      <p className="Info">Precio: ${product.price}</p>
      
      {disabledButton ? (
        <ItemCount
          changeButton={setDisabledButton}
          stock={product.stock}
          initial={1}
          onAdd={handleAddToCart}
        />
      ) : (
        <footer>
          <Link to="/cart" className="Option"> {}
            Terminar Compra
          </Link>
        </footer>
      )}
    </article>
  );
};

export default ItemDetail;
