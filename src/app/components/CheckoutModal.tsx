import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  clearCart: () => void; // Add clearCart prop
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  clearCart,
}) => {
  const { cartItems, getTotalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    zipcode: "",
    country: "",
  });
  const [success, setSuccess] = useState(false);

  const SHIPPING_COST = 10.0;
  const VAT_PERCENTAGE = 0.2;

  const calculateGrandTotal = () => {
    const totalPrice = getTotalPrice();
    const vatAmount = totalPrice * VAT_PERCENTAGE;
    return totalPrice + vatAmount + SHIPPING_COST;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(true);
    clearCart(); // Clear the cart after successful order
  };

  // Reset success state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSuccess(false); // Reset success state
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center z-50`}
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-[25rem] shadow-lg relative lg:w-3/4 md:w-4/5 sm:w-11/12 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-primary">Checkout</h2>

        {success ? (
          <div className="text-center flex flex-col items-center">
            <FiCheckCircle className="text-green-500 text-6xl mb-3" />
            <h3 className="text-lg font-semibold text-green-600">
              Order Successful!
            </h3>
            <p>Thank you for your purchase!</p>
            <button
              onClick={onClose}
              className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full mb-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full mb-2 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full mb-2 rounded"
              required
            />

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Shipping Information
            </h3>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border p-2 w-full mb-2 rounded"
              required
            />
            <input
              type="text"
              name="zipcode"
              placeholder="Zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className="border p-2 w-full mb-2 rounded"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="border p-2 w-full mb-2 rounded"
              required
            />

            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Your Order</h3>
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
                      <p className="text-gray-500">
                        Price: ${item.price.toFixed(2)}
                      </p>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
              <div className="flex justify-between">
                <span>Subtotal: ${getTotalPrice().toFixed(2)}</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping: </span>
                <span>${SHIPPING_COST.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>VAT: </span>
                <span>${(getTotalPrice() * VAT_PERCENTAGE).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <h4 className="text-xl font-bold text-primary">Grand Total:</h4>
                <span> ${calculateGrandTotal().toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 bg-primary hover:bg-primary-dark text-white py-2 rounded w-full"
            >
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
