import  { useState, useEffect } from 'react';
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

  return (
    <div>
      <h1>Parfume List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parfumes.map(parfume => (
          <div key={parfume.id} className="border p-4 rounded shadow">
            <img src={parfume.image} alt={parfume.name} className="h-40 w-full object-cover mb-4" />
            <h2 className="text-xl font-bold">{parfume.name}</h2>
            <p>{parfume.description}</p>
            <p className="text-gray-600">{parfume.category}</p>
            <p className="text-gray-600">{parfume.gender}</p>
            <p className="text-gray-800 font-bold">${parfume.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(parfume)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-bold">Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map(parfume => (
          <div key={parfume.id} className="border p-4 rounded shadow">
            <img src={parfume.image} alt={parfume.name} className="h-40 w-full object-cover mb-4" />
            <h2 className="text-xl font-bold">{parfume.name}</h2>
            <p>{parfume.description}</p>
            <p className="text-gray-600">{parfume.category}</p>
            <p className="text-gray-600">{parfume.gender}</p>
            <p className="text-gray-800 font-bold">${parfume.price.toFixed(2)}</p>
            <button
              onClick={() => removeFromCart(parfume.id)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParfumeList;