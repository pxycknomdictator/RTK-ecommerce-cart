import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../store/features/cart/cartSlice";

/* eslint-disable react/prop-types */
export const Cart = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <li className="grid grid-cols-2">
      <div>
        <span>{product.title}</span>
      </div>
      <div className="grid grid-cols-2 gap-10 place-items-center text-xl">
        <div className="space-x-5 font-semibold">
          <button
            onClick={() => dispatch(incrementQuantity({ id: product.id }))}
            className="border py-1 px-5"
          >
            +
          </button>
          <span>{product.quantity}</span>
          <button
            onClick={() => dispatch(decrementQuantity({ id: product.id }))}
            className="border py-1 px-5"
          >
            -
          </button>
        </div>
        <div className="space-x-5">
          <span>Price: {product.price.toFixed(2)}</span>
          <button
            onClick={() => dispatch(removeProduct({ id: product.id }))}
            className="text-red-600 font-semibold"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};
