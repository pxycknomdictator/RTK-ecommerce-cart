export const Header = () => {
  return (
    <header className="container mx-auto px-5 py-3 sm:px-0 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-semibold">Redux Toolkit</h1>
      </div>
      <nav className="space-x-6 text-[1.2rem] font-semibold">
        <a href="/">Home</a>
        <a href="/products">Cart</a>
        <span>Items: 0</span>
      </nav>
    </header>
  );
};
