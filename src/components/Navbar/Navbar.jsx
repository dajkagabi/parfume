import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-1.5 max-w-4xl">
        {/* Logo  */}
        <div className="flex items-center">
          <NavLink to="/">
            <img src="src/assets/logo.png" alt="Logo" className="h-12" />
          </NavLink>
        </div>

        {/* Menu items (desktop view) */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className="text-black hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to="/products" className="text-black hover:text-gray-900">
            Products
          </NavLink>
          <NavLink to="/about" className="text-black hover:text-gray-900">
            About
          </NavLink>
          <NavLink to="/contact" className="text-black hover:text-gray-900">
            Contact
          </NavLink>
        </div>

        {/* Cart icon, sign button, and hamburger icon (always visible) */}
        <div className="flex items-center space-x-4">
          <AiOutlineShoppingCart className="text-2xl text-black cursor-pointer hover:text-gray-900" />
          <button className="px-8 py-1 bg-black text-white rounded">
            SIGN
          </button>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col items-center p-4 space-y-4">
            <NavLink to="/" className="text-black hover:text-gray-900">
              Home
            </NavLink>
            <NavLink to="/products" className="text-black hover:text-gray-900">
              Products
            </NavLink>
            <NavLink to="/about" className="text-black hover:text-gray-900">
              About
            </NavLink>
            <NavLink to="/contact" className="text-black hover:text-gray-900">
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;