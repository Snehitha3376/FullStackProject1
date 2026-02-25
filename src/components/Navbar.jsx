import { useEffect, useState } from "react";
import "../styles.css";

export default function Navbar() {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
  function loadUser() {
    const loggedUser =
      JSON.parse(localStorage.getItem("loggedInUser")) ||
      JSON.parse(localStorage.getItem("currentUser"));
    setUser(loggedUser);
  }

  refreshWishlistCount();
  refreshCartCount();
  loadUser();

  // 🔥 Listen for login/logout changes
  window.addEventListener("user-logged-in", loadUser);
  window.addEventListener("user-logged-out", loadUser);

  window.addEventListener("wishlist-updated", refreshWishlistCount);
  window.addEventListener("cart-updated", refreshCartCount);

  return () => {
    window.removeEventListener("user-logged-in", loadUser);
    window.removeEventListener("user-logged-out", loadUser);
    window.removeEventListener("wishlist-updated", refreshWishlistCount);
    window.removeEventListener("cart-updated", refreshCartCount);
  };
}, []);

  function refreshWishlistCount() {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(savedWishlist.length);
  }

  function refreshCartCount() {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQty = savedCart.reduce((sum, item) => sum + item.qty, 0);
    setCartCount(totalQty);
  }

  function logout() {
  localStorage.removeItem("loggedInUser");
  window.dispatchEvent(new Event("user-logged-out"));  // 🔥 tell Navbar to refresh
  window.location.href = "/login";
}
  return (
    <nav className="navbar">
      <h1 className="nav-title">Virtual Art Gallery</h1>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/exhibitions">Exhibitions</a>
        <a href="/artworks">Artworks</a>
        <a href="/upload-art">Upload</a>

        <a href="/wishlist">
          Wishlist
          {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
        </a>

        <a href="/cart">
          🛒 Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </a>

        {user ? (
          <>
            <span className="nav-user">👤 {user.name}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </>
        )}
      </div>
    </nav>
  );
}