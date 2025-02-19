import Icons from "./Icons";

function Footer() {
  return (
    <footer className="flex h-[50vh] items-end justify-between bg-black px-50 py-20 text-white">
      <h2 className="text-7xl font-bold uppercase">logo</h2>
      <div className="flex flex-col items-end gap-4 text-xl">
        <Icons />
        <p className="text-gray-400">Copyright 2022. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
