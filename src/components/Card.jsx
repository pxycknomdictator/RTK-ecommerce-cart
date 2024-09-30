/* eslint-disable react/prop-types */
export const Card = ({ products }) => {
  const { title, price, image } = products;
  return (
    <li className="rounded-lg">
      <div className="flex items-center justify-center">
        <img className="aspect-square object-contain" src={image} alt="image" />
      </div>
      <div className="text-left py-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <h3 className="font-semibold">Price: {price}</h3>
        <button className="inline-block py-2 px-5 font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded mt-4">
          Add To Cart
        </button>
      </div>
    </li>
  );
};
