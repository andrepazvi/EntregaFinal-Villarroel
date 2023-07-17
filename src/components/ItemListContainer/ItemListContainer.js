import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [showItemCount, setShowItemCount] = useState(false);

  useEffect(() => {
    const funcion = categoryId ? getProductsByCategory : getProducts;
    funcion(categoryId)
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
    
    setShowItemCount(!!categoryId);
  }, [categoryId])

  return (
    <div>
      <ItemList products={products} showItemCount={showItemCount} />
      {showItemCount && (
        <ItemDetailContainer itemId={categoryId} showItemCount={showItemCount} />
      )}
    </div>
  );
};

export default ItemListContainer;
