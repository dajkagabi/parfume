import { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, closeModal }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <button onClick={closeModal} className="absolute top-4 right-4 text-lg font-semibold">
          X
        </button>
        <h2 className="text-2xl mb-4 text-center">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>

        {isSignIn ? (
          <div>
            <form>
              <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
              <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
              <button type="submit" className="w-full bg-blue-500 text-white p-2">Sign In</button>
            </form>
            <p className="mt-4 text-center">
              Don&apos;t have an account?{' '}
              <span onClick={handleToggle} className="text-blue-500 cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>
        ) : (
          <div>
            <form>
              <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
              <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
              <input type="password" placeholder="Confirm Password" className="border p-2 w-full mb-4" />
              <button type="submit" className="w-full bg-blue-500 text-white p-2">Sign Up</button>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <span onClick={handleToggle} className="text-blue-500 cursor-pointer">
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

