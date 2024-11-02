// context/CartContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";

// Define the item type
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  slug: string;
}

// Define the context type
interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeItemFromCart: (id: number) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const updateItemQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]); // Clear the cart
  };

  const removeItemFromCart = (id: number) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    if (itemToRemove) {
      toast.success(`Removed ${itemToRemove.name} from cart`);
    }
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        updateItemQuantity,
        removeItemFromCart,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
