import { useEffect, useState } from "react";
import Links from "./Links";

function Nav() {
  const [color, setColor] = useState(true);

  const changeColor = () => {
    if (window.scrollY <= 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 z-[5] w-full py-8 ${color ? "bg-transparent" : "bg-black"}`}
    >
      <div className="m-auto flex w-4/5 items-center justify-between">
        <h2 className="text-5xl font-bold text-amber-50 uppercase">ea</h2>
        <Links />
      </div>
    </nav>
  );
}

export default Nav;
