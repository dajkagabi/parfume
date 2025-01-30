import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  {/* mennyiség növelés rész */}
  const increaseQuantity = (parfume) => {
    addToCart(parfume);
  };
 {/* mennyiség csökkentés rész */}
  const decreaseQuantity = (id) => {
    const item = cart.find((parfume) => parfume.id === id);
    if (item) {
      removeFromCart(id);
    }
  };
   {/* összegrész */}
  const totalAmount = cart.reduce((total, parfume) => {
    return total + parfume.price * parfume.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Cart</h1>
      <div className="space-y-4">
        {cart.map((parfume) => (
          <div
            key={parfume.id}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md p-4"
          >
            <img
              src={parfume.image}
              alt={parfume.name}
              className="h-20 w-20 object-contain"
            />
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {parfume.name}
              </h2>
              <p className="text-sm text-gray-600">{parfume.description}</p>
              <p className="text-lg text-gray-800 font-bold mt-2">
                €{parfume.price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {/*csökkentés rész */}
              <button
                onClick={() => decreaseQuantity(parfume.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                -
              </button>
              <span>{parfume.quantity}</span>
              {/*növelés  rész */}
              <button
                onClick={() => increaseQuantity(parfume)}
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Total Amount</h2>
        <p className="text-lg text-gray-800 font-bold">
          €{totalAmount.toFixed(2)}
        </p>

        <Link 
    to="/checkout" 
    className="block mt-4 bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
  >
    Proceed to Checkout
  </Link>

      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
