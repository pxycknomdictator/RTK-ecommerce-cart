import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <header className="container mx-auto px-5 py-3 sm:px-0 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-semibold">Redux Toolkit</h1>
      </div>
      <nav className="space-x-6 text-[1.2rem] font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Cart</NavLink>
        <span>Items: {products.length}</span>
      </nav>
    </header>
  );
};
