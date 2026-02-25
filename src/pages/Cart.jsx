import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  function updateCart(updated) {
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart-updated"));
  }

  function increaseQty(index) {
    const updated = [...cartItems];
    updated[index].qty += 1;
    updateCart(updated);
  }

  function decreaseQty(index) {
    const updated = [...cartItems];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      updateCart(updated);
    }
  }

  function removeItem(index) {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCart(updatedCart);
  }

  function saveForLater(index) {
    const item = cartItems[index];

    // 1. Remove from cart
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCart(updatedCart);

    // 2. Add to wishlist
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlist-updated"));

    alert(`❤️ "${item.title}" moved to Wishlist`);
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>

        {cartItems.length === 0 ? (
          <h2 className="empty-cart">Your cart is empty 🛒</h2>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.img} className="cart-img" />

                <div className="cart-info">
                  <h2>{item.title}</h2>
                  <p>Price: ₹{item.price}</p>

                  <div className="cart-qty-box">
                    <button onClick={() => decreaseQty(index)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(index)}>+</button>
                  </div>
                </div>

                <div className="cart-actions">
                  <p className="cart-item-total">₹{item.price * item.qty}</p>

                  <button className="remove-btn" onClick={() => removeItem(index)}>
                    Remove
                  </button>

                  <button className="save-btn" onClick={() => saveForLater(index)}>
                    Save for Later
                  </button>
                </div>
              </div>
            ))}

            <h2 className="cart-total">Total: ₹{total}</h2>

            <a className="primary-btn checkout-btn" href="/checkout">
              Proceed to Checkout
            </a>
          </>
        )}
      </div>
    </>
  );
}