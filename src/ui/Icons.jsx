import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
function Icons() {
  return (
    <div className="flex items-center space-x-2.5">
      <FaLinkedinIn className="icon h-11 w-11 rounded-full border-2 border-amber-50 bg-gray-800 p-2.5 text-3xl" />
      <RiFacebookFill className="icon h-11 w-11 rounded-full border-2 border-amber-50 bg-gray-800 p-2.5 text-3xl" />
      <AiOutlineInstagram className="icon h-11 w-11 rounded-full border-2 border-amber-50 bg-gray-800 p-2.5 text-3xl" />
    </div>
  );
}

export default Icons;
