import Navbar from "../components/Navbar";
import "../styles.css";

export default function AdminArtworks() {
  const artworks = JSON.parse(localStorage.getItem("allArtworks")) || [];

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <h1 className="admin-title">Manage Artworks</h1>

        <div className="admin-artwork-grid">
          {artworks.length === 0 ? (
            <p>No artworks uploaded yet.</p>
          ) : (
            artworks.map((art, i) => (
              <div className="admin-art-card" key={i}>
                <img src={art.img} className="admin-art-img" />

                <p className="admin-art-name">{art.title}</p>

                <p className="admin-art-price">₹{art.price}</p>

                <button className="remove-btn">Remove</button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}