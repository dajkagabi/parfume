import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import data from '../../assets/data.json';

const ParfumeList = () => {
  const [parfumes, setParfumes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setParfumes(data);
  }, []);

  const addToCart = (parfume) => {
    setCart([...cart, parfume]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(parfume => parfume.id !== id));
  };

  const ProductCard = ({ parfume, onClick, buttonLabel, buttonStyle }) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-200">
      <img src={parfume.image} alt={parfume.name} className="h-45 w-full object-contain" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{parfume.name}</h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{parfume.description}</p>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span className="bg-gray-200 px-2 py-1 rounded">{parfume.category}</span>
          <span className="bg-gray-200 px-2 py-1 rounded">{parfume.gender}</span>
        </div>
        <p className="text-lg text-gray-800 font-bold mt-2">${parfume.price.toFixed(2)}</p>
        <button
          onClick={onClick}
          className={`w-full mt-4 px-4 py-2 rounded-lg transition-colors ${buttonStyle}`}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
  ProductCard.propTypes = {
    parfume: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string.isRequired,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Parfume List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {parfumes.map(parfume => (
          <ProductCard
            key={parfume.id}
            parfume={parfume}
            onClick={() => addToCart(parfume)}
            buttonLabel="Add to Cart"
            buttonStyle="bg-blue-500 text-white hover:bg-blue-700"
          />
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-semibold mb-6 text-center">Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart.map(parfume => (
          <ProductCard
            key={parfume.id}
            parfume={parfume}
            onClick={() => removeFromCart(parfume.id)}
            buttonLabel="Remove from Cart"
            buttonStyle="bg-red-500 text-white hover:bg-red-700"
          />
        ))}
      </div>
    </div>
  );
};

export default ParfumeList;
