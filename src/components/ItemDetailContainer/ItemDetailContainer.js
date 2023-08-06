import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import './ItemDetailContainer.css';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
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
    {
     !product ? <h3>Loading...</h3>:
      <ItemDetail product={product} />
    }

    </div>
    // <div>
    //   {product ? (
    //     <div>
    //       <h2>{product.name}</h2>
    //       <p>{product.description}</p>
    //       <p>Price: ${product.price}</p>
    //       {/* {showItemCount && (
    //         <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
    //       )} */}
    //     </div>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>
  )
}

export default ItemDetailContainer;
