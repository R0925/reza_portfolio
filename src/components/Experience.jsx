import React from "react";
import { FiArrowUpLeft } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const Experience = () => {
  return (
    <article className="mt-28 scroll-mt-24" id="Experience">
      <a href="https://novina.studio/" target="_blank">
        <div className="group grid sm:grid-cols-8 mt-10 rounded p-5 transition hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">
          <header className="col-span-2 text-xs">1401 — تا به امروز</header>
          <div className="col-span-6">
            <h2 className="text-lg font-bold text-[#c8e3f7] flex items-center">
              توسعه دهنده فرانت · استدیو نوینا
              <FiArrowUpLeft className="mr-2 text-sm transition-all group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </h2>
            <p className="text-sm leading-7 mt-2">
            تولید سیستم مدیریت محتوا و وبسایت صندوق توسعه فناوری های نوین و همکاری به تیم UI/UX برای بهبون تجربه کاربری وبسایت ها.
            </p>
            <ul className="flex flex-wrap gap-2 mt-5">
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                Vue
              </li>
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                Tailwind Css
              </li>
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                JavaScript
              </li>
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                Bootstrap
              </li>
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                Laravel
              </li>
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                TypeScript
              </li>
            </ul>
          </div>
        </div>
      </a>
      <a href="https://sooran.co/" target="_blank">
        <div className="group grid sm:grid-cols-8 mt-10 rounded p-5 transition hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">
          <header className="col-span-2 text-xs">1399 — 1401</header>
          <div className="col-span-6">
            <h2 className="text-lg font-bold text-[#c8e3f7] flex items-center">
            توسعه دهنده فرانت · سوران ارقام فناور
              <FiArrowUpLeft className="mr-2 text-sm transition-all group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </h2>
            <p className="text-sm leading-7 mt-4">
              همکاری با واحد UI/UX و تولید وبسایت سوران. همکاری در تولید سامانه داوری جمعی ، جایزه مصطفی و تولید سامانه حسابداری ابری استورم.
            </p>
            <ul className="flex flex-wrap gap-2 mt-5">
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                Angular js
              </li>
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                JavaScript
              </li>
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                Bootstrap
              </li>
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                C#
              </li>
              <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                JQuery
              </li>
            </ul>
          </div>
        </div>
      </a>


      <a href="" className="group flex items-center text-[#c8e3f7] hover:underline underline-offset-8 font-semibold mt-5">
        مشاهده رزومه کامل
        <FiArrowLeft className="mr-2 transition group-hover:-translate-x-4 text-[#c8e3f7]"/>
      </a>
    </article>
  );
};

export default Experience;
