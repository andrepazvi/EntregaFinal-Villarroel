import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, name, img, price, stock, description, showItemCount }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">
          Precio: ${price}
        </p>
        {showItemCount ? (
          <div>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
          </div>
        ) : (
          <p>{description}</p>
        )}
      </section>
      <footer>
        <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
      </footer>
    </article>
  );
}

export default Item;
