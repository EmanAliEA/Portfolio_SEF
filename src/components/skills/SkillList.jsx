import { useEffect, useRef, useState } from "react";
import SkillItem from "./SkillItem";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
const skillList = [
  { name: "web development", percentage: "95" },
  { name: "Blender", percentage: "80" },
  { name: "software ", percentage: "90" },
  { name: "software engineer", percentage: "90" },
  { name: "software engineer2", percentage: "90" },
];

function SkillList() {
  const [moveVal, setMoveVal] = useState(0);
  const [widthVal, setWidth] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    if (itemRef.current) {
      const { width } = itemRef.current.getBoundingClientRect();
      setWidth(width);
    }
  }, []);

  function handleNext() {
    setMoveVal((prev) => {
      const newVal = prev - widthVal * 2;
      return newVal >= widthVal * (skillList.length - 1) ? 0 : newVal;
    });
  }

  function handlePrev() {
    setMoveVal((prev) => {
      const newVal = prev + widthVal * 2;
      return newVal > 0 ? widthVal * (skillList.length - 1) : newVal;
    });
  }

  return (
    <div className="relative w-5/5 py-5">
      <ul className="flex w-full items-center justify-between overflow-hidden px-4 py-5">
        {skillList.map((item, index) => (
          <SkillItem
            item={item}
            key={item.name}
            style={{ transform: `translateX(${moveVal}px)` }}
            ref={index === 0 ? itemRef : null}
          />
        ))}
      </ul>
      <div className="absolute top-35 left-0 flex w-5/5 items-center justify-between">
        <IoIosArrowDropleftCircle
          className="text-6xl text-stone-100 hover:cursor-pointer"
          onClick={handlePrev}
        />
        <IoIosArrowDroprightCircle
          className="text-6xl text-stone-100 hover:cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default SkillList;
