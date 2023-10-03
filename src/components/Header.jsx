import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin,FaTelegramPlane } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = ({activeLink}) => {
  return (
    <section className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between  md:py-24 py-14">
      <div>
        <h1 className="text-5xl font-bold text-[#c8e3f7]">رضا اسفندیاری</h1>
        <h3 className="text-xl mt-5 text-[#c8e3f7]">
          توسعه دهنده فرانت 
          
        </h3>
        <p className="mt-5 mb-10 max-w-xs">
          من محصولات قابل دسترس و فراگیر و تجربیات دیجیتالی را برای وب می سازم.
        </p>

        
      <Navbar activeLink={activeLink} />
      </div>


      <ul className="flex gap-5">
        <li>
          <a
            href="https://github.com/R0925" target="_blank"
            className="hover:text-[#c8e3f7] transition-all duration-200"
          >
            <FaGithub className="text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="instagram.com/_rezaesfandyari/" target="_blank "
            className="hover:text-[#c8e3f7] transition-all duration-200"
          >
            <FaInstagram className="text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/reza-esfandyari-b916091b0/" target="_blank"
            className="hover:text-[#c8e3f7] transition-all duration-200"
          >
            <FaTwitter className="text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/R0925" target="_blank"
            className="hover:text-[#c8e3f7] transition-all duration-200"
          >
            <FaTelegramPlane className="text-3xl" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Header;
