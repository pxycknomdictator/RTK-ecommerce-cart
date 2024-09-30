import { useSelector } from "react-redux";

export const Total = () => {
  const { products } = useSelector((state) => state.cart);
  const total = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  return (
    <div className="container px-5 sm:px-0 mx-auto mt-10 flex items-center justify-between">
      <h1 className="text-3xl font-semibold">Total Amount</h1>
      <h2 className="text-2xl font-semibold">Total Price: {total.toFixed(2)}</h2>
    </div>
  );
};
