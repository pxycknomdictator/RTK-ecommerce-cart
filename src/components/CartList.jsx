import { useSelector } from "react-redux";
import { Cart } from "./Cart";
import { Total } from "./Total";

export const CartList = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <>
      <ul className="container px-5 sm:px-0 mx-auto mt-10 grid grid-cols-1 gap-y-6 gap-x-7">
        {products.map((product) => (
          <Cart key={product.id} product={product} />
        ))}
      </ul>
      <Total />
    </>
  );
};
