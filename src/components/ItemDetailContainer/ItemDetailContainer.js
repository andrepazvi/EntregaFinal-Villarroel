import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import ItemDetail from "../ItemDetail/ItemDetail";

<<<<<<< HEAD
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const ItemDetailContainer = () => {
=======
const ItemDetailContainer = () => {
  const { itemId } = useParams();
>>>>>>> 4cda5213ed9122dd84593e520d6d6e0b09c48096
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', itemId);

      try {
        const response = await getDoc(docRef);
        if (response.exists()) {
          const data = response.data();
          const productAdapted = { id: response.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div>
<<<<<<< HEAD
      {
        !product ? <h3>Loading...</h3> :
        <ItemDetail product={product} />
      }
    </div>
  );
=======
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
>>>>>>> 4cda5213ed9122dd84593e520d6d6e0b09c48096
}

export default ItemDetailContainer;
