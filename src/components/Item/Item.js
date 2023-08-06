import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img}) => {
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


      </section>
      <footer>
        <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
      </footer>
    </article>
  );
}

export default Item;

