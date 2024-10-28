import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Button5 from "./ui/Button5";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const {
    cartItems,
    updateItemQuantity,
    removeItemFromCart,
    getTotalPrice,
    clearCart,
  } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const SHIPPING_COST = 10.0;
  const VAT_PERCENTAGE = 0.2;

  const calculateGrandTotal = () => {
    const totalPrice = getTotalPrice();
    const vatAmount = totalPrice * VAT_PERCENTAGE;
    return totalPrice + vatAmount + SHIPPING_COST;
  };

  const handleCheckoutToggle = () => {
    if (cartItems.length > 0) {
      setCheckoutOpen(true);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white w-full max-w-[25rem] p-6 rounded-lg shadow-lg relative lg:w-3/4 md:w-4/5 sm:w-11/12">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-primary">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <Image
                src={`/assets/cart/image-${item.slug}.jpg`}
                width={64}
                height={64}
                alt={item.name}
                className="rounded-md shadow-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col">
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="text-red-500 hover:text-red-600 ml-4"
                >
                  Remove
                </button>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <Button5
                    onClick={() =>
                      updateItemQuantity(
                        item.id,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                  >
                    -
                  </Button5>
                  <span className="px-2">{item.quantity}</span>
                  <Button5
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button5>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="mt-6 border-t pt-4 space-y-1">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span> ${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span> ${SHIPPING_COST.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>VAT: </span>
            <span>${(getTotalPrice() * VAT_PERCENTAGE).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <h4 className="text-xl font-bold text-primary"> Grand Total:</h4>
            <span> ${calculateGrandTotal().toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handleCheckoutToggle}
          className={`mt-4 w-full ${
            cartItems.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-primary-dark text-white"
          } py-2 rounded`}
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>

        <CheckoutModal
          isOpen={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
          clearCart={clearCart} // Pass clearCart function
        />
      </div>
    </div>
  );
};

export default Cart;
