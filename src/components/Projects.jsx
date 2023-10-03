import React from "react";
import Project from "./Project";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <article className="mt-28 " id="Projects">
      <Project />
      <Link
        to="/archive"
        className="group flex items-center text-[#c8e3f7] hover:underline underline-offset-8 font-semibold mt-5"
      >
        مشاهده آرشیو کامل پروژه ها
        <FiArrowLeft className="mr-2 transition group-hover:-translate-x-4 text-[#c8e3f7]" />
      </Link>
    </article>
  );
};

export default Projects;
