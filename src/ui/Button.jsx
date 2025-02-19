function Button({ children, className = "", type, action }) {
  const base =
    "relative cursor-pointer border-2 border-white  capitalize hover:text-black  text-gray-100 text-2xl px-9 py-5";
  const style = {
    normal: base + " " + className,
    tab: base + " " + className,
  };
  return (
    <button onClick={action} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
