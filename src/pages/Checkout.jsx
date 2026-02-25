import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles.css";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(saved);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  function placeOrder() {
    if (!name || !email || !address || !payment) {
      alert("⚠ Please fill all details and select a payment method.");
      return;
    }

    // Clear cart
    localStorage.removeItem("cart");
    setOrderPlaced(true);
  }

  // If order is placed, show success screen
  if (orderPlaced) {
    return (
      <>
        <Navbar />
        <div className="checkout-container">
          <h1 className="order-success">🎉 Order Placed Successfully!</h1>
          <p>Thank you, {name}! Your artwork will be delivered soon.</p>

          <a className="primary-btn" href="/artworks">
            Continue Shopping
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-flex">

          {/* Left - User Details */}
          <div className="checkout-left">
            <h2>Billing Details</h2>

            <input
              className="input-box"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="input-box"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className="input-box address-box"
              placeholder="Full Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>

            <h3>Payment Method</h3>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="upi"
                onChange={(e) => setPayment(e.target.value)}
              />
              UPI
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="card"
                onChange={(e) => setPayment(e.target.value)}
              />
              Debit / Credit Card
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="cod"
                onChange={(e) => setPayment(e.target.value)}
              />
              Cash on Delivery
            </label>
          </div>

          {/* Right — Order Summary */}
          <div className="checkout-right">
            <h2>Order Summary</h2>

            {cartItems.map((item, index) => (
              <div className="summary-item" key={index}>
                <img src={item.img} className="summary-img" />
                <p>{item.title}</p>
                <p className="summary-price">₹{item.price}</p>
              </div>
            ))}

            <h2 className="checkout-total">Total: ₹{total}</h2>

            <button className="primary-btn final-buy" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}