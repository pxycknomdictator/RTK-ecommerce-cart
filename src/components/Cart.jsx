/* eslint-disable react/prop-types */
export const Cart = ({ product }) => {
  return (
    <li className="flex items-center justify-between">
      <div>
        <span>{product.title}</span>
      </div>
      <div className="grid grid-cols-2 gap-10 place-items-center text-xl">
        <div>
          <div className="space-x-5 font-semibold">
            <button className="border py-1 px-5">+</button>
            <span>{product.quantity}</span>
            <button className="border py-1 px-5">-</button>
          </div>
        </div>
        <span>Price: {product.price}</span>
      </div>
    </li>
  );
};
