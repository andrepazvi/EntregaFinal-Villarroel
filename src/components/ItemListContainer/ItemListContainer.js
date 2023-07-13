import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams} from "react-router-dom";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchFunction = categoryId ? getProductsByCategory : getProducts;
        const productsData = await fetchFunction(categoryId);
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;