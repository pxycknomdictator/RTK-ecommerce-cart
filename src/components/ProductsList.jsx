import { useState, useEffect } from "react";
import { Card } from "./Card";
import { handleGetAllProducts } from "../api/api";
import { Loader } from "./Loader";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await handleGetAllProducts();
      setProducts(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className="container px-5 sm:px-0 mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-6 gap-x-7">
      {products.map((product) => (
        <Card key={product.id} products={product} />
      ))}
    </ul>
  );
};
