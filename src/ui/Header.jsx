function Header({ header, children }) {
  return (
    <div className="flex w-[80%] flex-col items-center gap-4 text-center text-5xl text-gray-100">
      <h2 className="font-bold capitalize">{header}</h2>
      <p className="w-2/3 text-2xl text-gray-400">{children}</p>
    </div>
  );
}

export default Header;
