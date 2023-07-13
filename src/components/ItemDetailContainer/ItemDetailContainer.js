import React, { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import './ItemDetailContainer.css';

const ItemDetailContainer = ({ itemId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(itemId);
        setProduct(productData);
      } catch (error) {
        console.log('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>-</button>
          <button>+</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;