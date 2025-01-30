import { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, closeModal }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-xl"
      style={{
        backgroundImage: "url('src/assets/lap.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-transparent backdrop-blur-md p-8 rounded-lg w-96 shadow-lg relative border border-white/20">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">
          {isSignIn ? "Sign In" : "Register"}
        </h2>

        <button
          onClick={closeModal}
          type="button"
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-lg font-semibold transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <form>
          <input
            type="email"
            placeholder="Email"
            className="border border-white/30 p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-transparent text-white placeholder-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-white/30 p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-transparent text-white placeholder-gray-300"
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-white/30 p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-transparent text-white placeholder-gray-300"
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition duration-300"
          >
            {isSignIn ? "Sign In" : "Register"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-300">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={handleToggle}
            className="text-blue-400 hover:text-blue-500 cursor-pointer font-semibold transition duration-300"
          >
            {isSignIn ? "Register" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
