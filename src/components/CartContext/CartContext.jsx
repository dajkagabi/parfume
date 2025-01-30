import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [cart, setCart] = useState([]);

  const addToCart = (parfume) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === parfume.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === parfume.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...parfume, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const item = prevCart.find(item => item.id === id);
      if (item && item.quantity === 1) {
        // Ha csak 1 db van, töröljük az elemet
        return prevCart.filter(item => item.id !== id);
      }
      return prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};