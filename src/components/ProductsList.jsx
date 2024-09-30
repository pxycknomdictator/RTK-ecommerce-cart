import { Card } from "./Card";

export const ProductsList = () => {
  return (
    <ul className="container px-5 sm:px-0 mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-6">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
};
