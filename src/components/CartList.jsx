import { Cart } from "./Cart";
import { Total } from "./Total";

export const CartList = () => {
  return (
    <>
      <ul className="container px-5 sm:px-0 mx-auto mt-10 grid grid-cols-1 gap-y-6 gap-x-7">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </ul>
      <Total />
    </>
  );
};
