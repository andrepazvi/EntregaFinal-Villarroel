import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import ItemDetail from "../ItemDetail/ItemDetail";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const ItemDetailContainer = () => {
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
      {
        !product ? <h3>Loading...</h3> :
        <ItemDetail product={product} />
      }
    </div>
  );
}

export default ItemDetailContainer;
