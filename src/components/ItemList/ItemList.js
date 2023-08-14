import React from "react";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ products, showItemCount }) => {
  return (
    <div className='contenedorProductos'>
      {products.map(prod => (
        <Item key={prod.id} {...prod} showItemCount={showItemCount} />
      ))}
    </div>
  );
}

export default ItemList;