import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams} from "react-router-dom";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const funcion = categoryId ? getProductsByCategory : getProducts;
    funcion(categoryId)
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
 