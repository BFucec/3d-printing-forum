import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { images } from "../../assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const userInfo = useSelector((state) => state.user);
  const authHeader = "Basic " + btoa(user.username + ":" + user.password);
  let loggedIn = false;
  let isAdmin = false;

  if (userInfo.username !== null) {
    loggedIn = true;

    AuthService.isAdmin(authHeader)
      .then((response) => {
        console.log(response.data);
        setAdmin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  if (admin === "ADMIN") {
    isAdmin = true;
  }

  const logout = (e) => {
    e.preventDefault();

    AuthService.logout(authHeader)
      .then((response) => {
        console.log(response);
        dispatch({
          type: "CLEAR_USER",
        });
        console.log(response);
        alert(response.data);
        navigate("/postList");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const logUser = () => {
    console.log(userInfo);
  };

  return (
    <div class="flex flex-wrap place-items-top">
      <section class="relative mx-auto">
        <nav class="flex justify-between bg-gray-900 text-white w-screen">
          {loggedIn == true && isAdmin == false ? (
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <img src={images.logo3} class="h-8 mr-3" alt="Company logo" />
              <a class="text-3xl font-bold font-heading" href="#">
                Easy Solutions
              </a>
              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/future">Future plans</Link>
                </li>
              </ul>
              <div class="hidden xl:flex items-center space-x-5">
                <Link
                  to="/userPosts"
                  className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"
                >
                  My Posts
                </Link>
                <Link
                  to="/userInfo"
                  className="flex items-center hover:text-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : loggedIn == true && isAdmin == true ? (
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <img src={images.logo3} class="h-8 mr-3" alt="Company logo" />
              <a class="text-3xl font-bold font-heading" href="#">
                Easy Solutions
              </a>
              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <div class="hidden xl:flex items-center space-x-5">
                <Link
                  to="/allUsers"
                  className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"
                >
                  All Users
                </Link>
                <Link
                  to="/adminAllPosts"
                  className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"
                >
                  All Posts
                </Link>
                <Link
                  to="/userPosts"
                  className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"
                >
                  My Posts
                </Link>
                <Link
                  to="/userInfo"
                  className="flex items-center hover:text-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <img src={images.logo3} class="h-8 mr-3" alt="Company logo" />
              <p class="text-3xl font-bold font-heading">Easy Solutions</p>
              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/future">Future plans</Link>
                </li>
              </ul>
              <div class="hidden xl:flex items-center space-x-5">
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                >
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                >
                  Login
                </button>
              </div>
            </div>
          )}

          <a class="navbar-burger self-center mr-12 xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
