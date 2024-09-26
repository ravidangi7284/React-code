import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header class=" bg-white dark:bg-gray-900">
        <div class="h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap py-5 justify-between items-center  md:justify-between">
            <div>
              <h1 className="text-5xl text-white font-bold text-orange-400 font-serif ">
                MoviesHub
              </h1>
            </div>

            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex justify-center items-center gap-6 text-sm">
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block text-lg py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bollywood"
                    className={({ isActive }) =>
                      `block text-lg py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    BollyWood
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/south"
                    className={({ isActive }) =>
                      `block text-lg py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    South
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block text-lg py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `
                      } block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500`
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `
                      } block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500`
                  }
                >
                  Register
                </NavLink>

              </div>

              <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <span class="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
