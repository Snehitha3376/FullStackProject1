import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles.css";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  function updateWishlist(updated) {
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));

    // 🔥 Update Navbar count
    window.dispatchEvent(new Event("wishlist-updated"));
  }

  function removeFromWishlist(index) {
    const updated = wishlist.filter((_, i) => i !== index);
    updateWishlist(updated);
  }

  function moveToCart(item, index) {
    // Add to cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...item, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));

    // Remove from wishlist
    removeFromWishlist(index);

    alert(`🛒 "${item.title}" moved to cart`);
  }

  return (
    <>
      <Navbar />

      <div className="wishlist-container">
        <h1 className="wishlist-title">My Wishlist </h1>

        {wishlist.length === 0 ? (
          <h2 className="empty-cart">Your wishlist is empty </h2>
        ) : (
          wishlist.map((item, index) => (
            <div className="wishlist-item" key={index}>
              <img src={item.img} className="wishlist-img" />

              <div className="wishlist-info">
                <h2>{item.title}</h2>
                <p>Price: ₹{item.price}</p>
              </div>

              <div className="wishlist-actions">
                <button className="move-btn" onClick={() => moveToCart(item, index)}>
                  Move to Cart
                </button>

                <button
                  className="remove-btn"
                  onClick={() => removeFromWishlist(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}