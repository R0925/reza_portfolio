import React from "react";

const Navbar = ({ activeLink }) => {
  return (
    <ul className="lg:flex hidden">
      <li>
        <a className="group flex items-center py-3" href="#About">
          <span
            className={`ml-4 h-px   transition-all group-hover:w-16 group-hover:bg-slate-200  motion-reduce:transition-none ${
              activeLink === "About" ? "w-16  bg-slate-200" : "w-8 bg-slate-600"
            }`}
          ></span>
          <span
            className={`text-sm font-bold  tracking-widest  group-hover:text-slate-200 ${
              activeLink === "About" ? "  text-slate-200" : "text-slate-500"
            }`}
          >
            درباره من
          </span>
        </a>
        <a className="group flex items-center py-3" href="#Experience">
          <span
            className={`ml-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200  motion-reduce:transition-none ${
              activeLink === "Experience"
                ? "w-16  bg-slate-200"
                : "w-8 bg-slate-600"
            }`}
          ></span>
          <span
            className={`text-sm font-bold  tracking-widest group-hover:text-slate-200 ${
              activeLink === "Experience"
                ? "  text-slate-200"
                : "text-slate-500"
            }`}
          >
            تجربیات
          </span>
        </a>
        <a className="group flex items-center py-3 " href="#Projects">
          <span
            className={`ml-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200  motion-reduce:transition-none ${
              activeLink === "Projects"
                ? "w-16  bg-slate-200"
                : "w-8 bg-slate-600"
            } `}
          ></span>
          <span
            className={`text-sm font-bold  tracking-widest group-hover:text-slate-200 ${
              activeLink === "Projects" ? "  text-slate-200" : "text-slate-500"
            }`}
          >
            پروژ ها
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
