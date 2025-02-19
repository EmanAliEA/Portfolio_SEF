/* eslint-disable react/prop-types */

import React from "react";

const SkillItem = React.forwardRef(({ item, style }, ref) => {
  return (
    <li
      ref={ref}
      className={`"w-30% mx-25 flex flex-col items-center justify-center gap-8 transition-all duration-100`}
      style={style}
    >
      <div className="skillItem relative flex h-50 w-50 items-center justify-center rounded-full text-5xl font-bold">
        <svg
          viewBox="0 0  100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <defs>
            <linearGradient
              id="circleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="oklch(0.867 0.14 250.023)" />{" "}
              {/* Start color */}
              <stop offset="100%" stopColor="oklch(0.4 0.154 242.749)" />{" "}
              {/* End color */}
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" strokeLinecap="round" />
        </svg>
        {item?.percentage}%
      </div>
      <p className="text-3xl capitalize">{item?.name}</p>
    </li>
  );
});

export default SkillItem;
