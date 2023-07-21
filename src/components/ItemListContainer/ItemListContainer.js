import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [showItemCount, setShowItemCount] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let fetchedProducts = [];
        if (categoryId) {
          fetchedProducts = await getProductsByCategory(categoryId);
          setShowItemCount(true); 
        } else {
          fetchedProducts = await getProducts();
          setShowItemCount(false); 
        }
        setProducts(fetchedProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} showItemCount={showItemCount} />
    </div>
  );
};

export default ItemListContainer;
