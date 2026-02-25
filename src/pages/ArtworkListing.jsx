import Navbar from "../components/Navbar";
import { useState } from "react";
import "../styles.css";

export default function ArtworkListing() {
  const initialArtworks = [
    { title: "Sunset Glory", img: "https://tse2.mm.bing.net/th/id/OIP.d58dyPXuQcaRp1nhVYGhjQHaEO?pid=Api&P=0&h=180", price: 1200, qty: 1 },
    { title: "Forest Calm", img: "https://png.pngtree.com/background/20230519/original/pngtree-photo-of-the-sun-shining-through-a-forest-of-rocks-picture-image_2652087.jpg", price: 1800, qty: 1 },
    { title: "Abstract Art Broken Geometry", img: "https://designyoutrust.com/wp-content/uploads/2022/12/unknown_311129778_816338826457689_3497320601644774132_n.jpg", price: 2500, qty: 1 },
    { title: "Ancient Golden Mask", img: "https://tse3.mm.bing.net/th/id/OIP.nOC4hPrUrMG9HDbOWeU3pgHaHa?pid=Api&P=0&h=180", price: 3000, qty: 1 },
    { title: "Cultural Art Folk Harmony", img: "https://i.pinimg.com/originals/0f/7d/96/0f7d96a46cc825acdafe59e1dfc1df25.jpg", price: 2000, qty: 1 },
    { title: "Ethereal Beauty Art", img: "https://img.freepik.com/premium-photo/ethereal-expressions-captivating-portraits-enigmatic-beauty-emotions-by-masterful-artists_1015980-9595.jpg", price: 3500, qty: 1 },
  ];

  const [artworks, setArtworks] = useState(initialArtworks);

  function increaseQty(index) {
    const updated = [...artworks];
    updated[index].qty += 1;
    setArtworks(updated);
  }

  function decreaseQty(index) {
    const updated = [...artworks];
    if (updated[index].qty > 1) updated[index].qty -= 1;
    setArtworks(updated);
  }

  function addToCartHandler(art) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(art);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cart-updated"));
    alert(`🛒 Added ${art.qty} × ${art.title}`);
  }

  function buyNowHandler(art) {
    localStorage.setItem("cart", JSON.stringify([art]));
    window.dispatchEvent(new Event("cart-updated"));
    window.location.href = "/checkout";
  }

  return (
    <>
      <Navbar />

      <div className="artwork-container">
        <h1 className="artwork-title">Artwork Listing</h1>
        <p className="artwork-sub">Browse all available artworks</p>

        <div className="artwork-grid">
          {artworks.map((art, index) => (
            <div className="art-card" key={index}>
              <img src={art.img} alt="" />
              <p className="art-name">{art.title}</p>
              <p className="art-price">₹{art.price}</p>

              {/* QUANTITY SELECTOR */}
              <div className="qty-box">
                <button className="qty-btn" onClick={() => decreaseQty(index)}>−</button>
                <span className="qty-number">{art.qty}</span>
                <button className="qty-btn" onClick={() => increaseQty(index)}>+</button>
              </div>

              {/* BUTTONS */}
              <div className="art-buttons">
                <button className="add-cart-btn" onClick={() => addToCartHandler(art)}>
                  Add to Cart
                </button>

                <button className="buy-btn" onClick={() => buyNowHandler(art)}>
                  Buy Now
                </button>

                <button className="wishlist-btn" onClick={() => addToWishlist(art)}>
                   Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ADD THIS BELOW OUTSIDE COMPONENT
function addToWishlist(art) {
  const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
  saved.push(art);
  localStorage.setItem("wishlist", JSON.stringify(saved));
  window.dispatchEvent(new Event("wishlist-updated"));
  alert(` "${art.title}" added to Wishlist`);
}