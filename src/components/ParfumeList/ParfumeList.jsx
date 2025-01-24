import { useState, useEffect } from 'react';
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
        <div className="container mx-auto px-4 py-8"> {/* Padding hozzáadva a containerhez */}
            <h1 className="text-3xl font-semibold mb-6 text-center">Parfume List</h1> {/* Középre igazított cím */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {parfumes.map(parfume => (
                    <div key={parfume.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-200"> {/* overflow-hidden és hover animáció */}
                        <img src={parfume.image} alt={parfume.name} className="h-48 w-full object-cover" /> {/* Magasság fixálva */}
                        <div className="p-6"> {/* Padding hozzáadva */}
                            <h2 className="text-xl font-semibold text-gray-800 truncate">{parfume.name}</h2> {/* truncate a hosszú nevekhez */}
                            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{parfume.description}</p> {/* line-clamp a hosszú leírásokhoz */}
                            <div className="flex justify-between items-center mt-4 text-sm text-gray-600"> {/* Margó hozzáadva */}
                                <span>{parfume.category}</span>
                                <span>{parfume.gender}</span>
                            </div>
                            <p className="text-lg text-gray-800 font-bold mt-2">${parfume.price.toFixed(2)}</p>
                            <button
                                onClick={() => addToCart(parfume)}
                                className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors" 
                                
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="mt-12 text-2xl font-semibold mb-6 text-center">Cart</h2> {/* Középre igazított cím */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cart.map(parfume => (
                    <div key={parfume.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-200">
                      <img src={parfume.image} alt={parfume.name} className="h-48 w-full object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 truncate">{parfume.name}</h2>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{parfume.description}</p>
                            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                                <span>{parfume.category}</span>
                                <span>{parfume.gender}</span>
                            </div>
                            <p className="text-lg text-gray-800 font-bold mt-2">${parfume.price.toFixed(2)}</p>
                            <button
                                onClick={() => removeFromCart(parfume.id)}
                                className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParfumeList;