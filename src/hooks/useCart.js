import { useState } from "react";

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food) => {
    const exists = cartItems.find(item => item.id === food.id);
    if (exists) {
      setCartItems(
        cartItems.map(item =>
          item.id === food.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(
      cartItems
        .map(item =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  return { cartItems, addToCart, removeFromCart };
}
