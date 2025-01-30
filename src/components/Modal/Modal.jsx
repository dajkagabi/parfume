import { useState } from "react";
import PropTypes from "prop-types";

// A Modal komponens, amely a bejelentkezési és regisztrációs űrlapokat tartalmazza
const Modal = ({ isOpen, closeModal }) => {
  // isOpen: egy boolean érték, amely jelzi, hogy a modális ablak nyitva van-e
  // closeModal: egy függvény, amely bezárja a modális ablakot

  // Állapotváltozó, amely tárolja, hogy bejelentkezés vagy regisztráció van-e folyamatban
  const [isSignIn, setIsSignIn] = useState(true);
  // Alapértelmezett értéke true, azaz bejelentkezés

  // Függvény, amely vált a bejelentkezés és regisztráció között
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  if (!isOpen) return null; // Ha az isOpen értéke false, akkor nem jelenítjük meg a modális ablakot

  return (
    // A modális ablak háttere és tartalma
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-sm">
      {/* A backdrop-blur-sm osztály elmosja a hátteret (Tailwind CSS v3.0+) */}
      <div className="bg-white p-8 rounded-lg w-96 shadow-lg relative">
        {/* A modális ablak tartalma */}
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          {/* A fejléc */}
          {isSignIn ? "Sign In" : "Register"}
        </h2>

        {isSignIn ? (
          // Bejelentkezési űrlap
          <div>
            <form>
              <button
                onClick={closeModal}
                type="button"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg font-semibold transition duration-300"
              >
                {/* A bezár gomb */}
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
              <input
                type="email"
                placeholder="Email"
                className="border p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition duration-300"
              >
                Sign In
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <span
                onClick={handleToggle}
                className="text-blue-500 hover:text-blue-600 cursor-pointer font-semibold transition duration-300"
              >
                Register
              </span>
            </p>
          </div>
        ) : (
          // Regisztrációs űrlap
          <div>
            <form>
              <button
                onClick={closeModal}
                type="button"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg font-semibold transition duration-300"
              >
                {/* A bezár gomb */}
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
              <input
                type="email"
                placeholder="Email"
                className="border p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="border p-3 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition duration-300"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <span
                onClick={handleToggle}
                className="text-blue-500 hover:text-blue-600 cursor-pointer font-semibold transition duration-300"
              >
                Sign In
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;