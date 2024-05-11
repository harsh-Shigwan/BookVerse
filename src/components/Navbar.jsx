import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="/"
                className=" text-orange-500  font-bold text-4xl  font-righteous"
              >
                BookVerse
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-indigo-800  font-medium  text-base hover:bg-orange-400  hover:text-white px-3 py-2 rounded-md  hover:font-bold"
              >
                Home
              </a>
              <a
                href="/books"
                className="text-indigo-800 font-medium  text-base hover:bg-orange-400  hover:text-white px-3 py-2 rounded-md  hover:font-bold"
              >
                Books
              </a>
              <a
                href="/contact"
                className="text-indigo-800 font-medium  text-base hover:bg-orange-400  hover:text-white px-3 py-2 rounded-md  hover:font-bold"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="  block rounded-md text-base font-medium text-indigo-800   hover:bg-orange-400  hover:text-white px-3 py-2   hover:font-bold"
            >
              Home
            </a>

            <a
              href="/books"
              className=" block rounded-md text-base font-medium text-indigo-800   hover:bg-orange-400  hover:text-white px-3 py-2   hover:font-bold"
            >
              Books
            </a>
            <a
              href="/contact"
              className=" block rounded-md text-base font-medium text-indigo-800   hover:bg-orange-400  hover:text-white px-3 py-2   hover:font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
