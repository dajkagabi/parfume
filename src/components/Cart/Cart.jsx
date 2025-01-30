import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // Mennyiség növelés rész
  const increaseQuantity = (parfume) => {
    addToCart(parfume);
  };

  // Mennyiség csökkentés rész
  const decreaseQuantity = (id) => {
    const item = cart.find((parfume) => parfume.id === id);
    if (item) {
      removeFromCart(id);
    }
  };

  // Összeg számítása
  const totalAmount = cart.reduce((total, parfume) => {
    return total + parfume.price * parfume.quantity;
  }, 0);

 

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {cart.map((parfume) => (
            <div key={parfume.id} className="flex items-start border-b border-gray-200 py-4">
              <img 
                src={parfume.image} 
                alt={parfume.name} 
                className="w-20 h-20 object-contain mr-4"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{parfume.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                  {parfume.description}
                </p>
                <p className="text-lg font-bold text-gray-900 mt-2">
                  €{parfume.price.toFixed(2)}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(parfume.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                  <span>{parfume.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(parfume)}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Total Amount</h2>
          <p className="text-lg text-gray-800 font-bold">
            €{totalAmount.toFixed(2)}
          </p>
          <br />
          
          

          <Link 
            to="/checkout" 
            className="block mt-4 bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;