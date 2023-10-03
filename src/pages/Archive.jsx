import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpLeft } from "react-icons/fi";

const Archive = () => {
  return (
    <section className="max-w-screen-xl m-auto mt-28">
      <Link
        to="/"
        className="group flex items-center font-semibold mb-5"
      >
        <FiArrowRight className="ml-2 transition group-hover:translate-x-4 text-[#c8e3f7]" />
        بازگشت
      </Link>
      <h1 className="text-5xl text-[#c8e3f7] font-bold">همه پروژه ها</h1>

      <table class="w-full text-sm text-right mt-20">
        <thead class=" text-[#c8e3f7]">
          <tr>
            <th scope="col" class="px-6 py-3">
              سال
            </th>
            <th scope="col" class="px-6 py-3">
              پروژه
            </th>
            <th scope="col" class="px-6 py-3">
              تولید شده در
            </th>
            <th scope="col" class="px-6 py-3">
              تلکنولوژی ها
            </th>
            <th scope="col" class="px-6 py-3">
              آدرس
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class=" border-b  border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 "
            >
              1401
            </th>
            <td class="px-6 py-4 text-[#c8e3f7] font-bold">وبسایت صندوق توسعه فناوری های نوین</td>
            <td class="px-6 py-4">استدیو نوینا</td>
            <td class="px-6 py-4">
              <ul className="flex flex-wrap gap-2 mt-5">
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  JavaScript
                </li>
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  Bootstrap
                </li>
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  JQuery
                </li>
              </ul>
            </td>
            <td class="px-6 py-4">
              <a href="https://htdf.ir/" className="group flex">
                htdf.ir
                <FiArrowUpLeft className="mr-2 text-sm transition-all group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </a>
            </td>
          </tr>
          <tr class=" border-b  border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 "
            >
              1401
            </th>
            <td class="px-6 py-4 text-[#c8e3f7] font-bold">وبسایت صندوق توسعه فناوری های نوین</td>
            <td class="px-6 py-4">استدیو نوینا</td>
            <td class="px-6 py-4">
              <ul className="flex flex-wrap gap-2 mt-5">
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  JavaScript
                </li>
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  Bootstrap
                </li>
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  JQuery
                </li>
              </ul>
            </td>
            <td class="px-6 py-4">
              <a href="https://htdf.ir/" className="group flex">
                htdf.ir
                <FiArrowUpLeft className="mr-2 text-sm transition-all group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </a>
            </td>
          </tr>
          <tr class=" border-b  border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 "
            >
              1401
            </th>
            <td class="px-6 py-4 text-[#c8e3f7] font-bold">وبسایت صندوق توسعه فناوری های نوین</td>
            <td class="px-6 py-4">استدیو نوینا</td>
            <td class="px-6 py-4">
              <ul className="flex flex-wrap gap-2 mt-5">
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  JavaScript
                </li>
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  Bootstrap
                </li>
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  JQuery
                </li>
              </ul>
            </td>
            <td class="px-6 py-4">
              <a href="https://htdf.ir/" className="group flex">
                htdf.ir
                <FiArrowUpLeft className="mr-2 text-sm transition-all group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </a>
            </td>
          </tr>
          <tr class="">
            <th
              scope="row"
              class="px-6 py-4 "
            >
              1401
            </th>
            <td class="px-6 py-4 text-[#c8e3f7] font-bold">وبسایت صندوق توسعه فناوری های نوین</td>
            <td class="px-6 py-4">استدیو نوینا</td>
            <td class="px-6 py-4">
              <ul className="flex flex-wrap gap-2 mt-5">
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  JavaScript
                </li>
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  Bootstrap
                </li>
                <li className=" rounded-full text-teal-300 bg-teal-400/10 px-3 leading-none py-2 text-xs">
                  JQuery
                </li>
              </ul>
            </td>
            <td class="px-6 py-4">
              <a href="https://htdf.ir/" className="group flex">
                htdf.ir
                <FiArrowUpLeft className="mr-2 text-sm transition-all group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Archive;
