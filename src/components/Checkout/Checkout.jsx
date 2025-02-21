import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const Checkout = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState("");

  // Mennyiség növelése
  const increaseQuantity = (parfume) => {
    addToCart(parfume);
  };

  // Mennyiség csökkentése
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

  // Szállítási díj
  const shippingFee = 11.05;

  // Végösszeg számítása
  const finalAmount = totalAmount + shippingFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Itt kezelheti a szállítási címet és a fizetési adatokat
    console.log("Shipping Address:", shippingAddress);
    // További logika a fizetés kezeléséhez
    // Például elküldheti az adatokat egy szerverre
  };
    
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Parfume Checkout</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Termékek rész */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Parfume</h2>
            
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

          {/* Fizetés rész */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shipping Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123 Main St, City, Country"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                />
              </div>

              {/* Összegzés */}
              <div className="p-4 bg-gray-100 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800">Total Amount</h2>
                <p className="text-lg text-gray-800 font-bold">
                  €{totalAmount.toFixed(2)}
                </p>
                <h2 className="text-xl font-semibold text-gray-800">Shipping Fee</h2>
                <p className="text-lg text-gray-800 font-bold">
                  €{shippingFee.toFixed(2)}
                </p>
                <h2 className="text-xl font-semibold text-gray-800">Final Amount</h2>
                <p className="text-lg text-gray-800 font-bold">
                  €{finalAmount.toFixed(2)}
                </p>
              </div>

              {/* Gombok */}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                  onClick={() => navigate('/cart')}
                >
                  Back to Shopping
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;