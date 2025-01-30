import { useState, useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import Modal from '../Modal/Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Állapot a modalhoz
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const { cart } = useContext(CartContext);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-1.5 max-w-4xl">
        {/* Logo */}
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
          <div className="relative">
            <NavLink to="/cart">
              <AiOutlineShoppingCart className="text-2xl text-black cursor-pointer hover:text-gray-900" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cart.length}
                </span>
              )}
            </NavLink>
          </div>
          <button
            onClick={openModal} // Modal megnyitása
            className="px-8 py-1 bg-black text-white rounded"
          >
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

      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </nav>
  );
};

export default Navbar;
