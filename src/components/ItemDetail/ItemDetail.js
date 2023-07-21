
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoría: {category}</p>
        <p className="Info">Descripción: {description}</p>
        <p className="Info">Precio: ${price}</p>
        <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} /> {}
      </section>
      {quantityAdded > 0 && (
        <footer>
          <Link to="/cart" className="Option">
            Terminar Compra
          </Link>
        </footer>
      )}
    </article>
  );
};

export default ItemDetail;

