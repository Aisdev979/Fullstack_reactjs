const Header = () => {
  return (
    <header className="flex items-center justify-center gap-3">
      <img
        className="inline-block w-20 h-20 rounded-full border-2 border-black p-2"
        src="/chef.jpg"
        alt="Chef Claude"
      />
      <h1 className="text-4xl">Chef Claude</h1>
    </header>
  );
};

export default Header;
