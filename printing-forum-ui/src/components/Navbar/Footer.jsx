import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { images } from "../../assets";

const Footer = () => {
  return (
    <footer class="bg-white shadow dark:bg-gray-900 w-screen ">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a class="flex items-center mb-4 sm:mb-0">
            <img src={images.logo3} class="h-8 mr-3" alt="Company logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Easy Solutions
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" class="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/" class="mr-4 hover:underline md:mr-6 ">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="/contact" class="mr-4 hover:underline md:mr-6 ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a class="hover:underline">Anrob.dev™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
