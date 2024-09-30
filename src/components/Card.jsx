import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/cart/cartSlice";

/* eslint-disable react/prop-types */
export const Card = ({ products }) => {
  const dispatch = useDispatch();

  const { title, price, image, id } = products;
  return (
    <li className="rounded-lg">
      <div className="flex items-center justify-center">
        <img className="aspect-square object-contain" src={image} alt="image" />
      </div>
      <div className="text-left py-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <h3 className="font-semibold">Price: {price}</h3>
        <button
          onClick={() => dispatch(addToCart({ title, price, id, quantity: 1 }))}
          className="inline-block py-2 px-5 font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded mt-4"
        >
          Add To Cart
        </button>
      </div>
    </li>
  );
};
