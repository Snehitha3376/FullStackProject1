import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles.css";

export default function VisitorDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    // If no user → redirect
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }

    // If you want role checking later:
    // if (user.role !== "Visitor") navigate("/login");
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <h1 className="dash-title">Welcome to the Virtual Art Gallery</h1>
        <p className="dash-sub">Explore artworks from different cultures and eras</p>

        <div className="category-section">
          <h2 className="section-title">Categories</h2>

          <div className="category-grid">
            <div className="category-card">Modern Art</div>
            <div className="category-card">Renaissance</div>
            <div className="category-card">Abstract</div>
            <div className="category-card">Cultural Art</div>
          </div>
        </div>

        <div className="featured-section">
          <h2 className="section-title">Featured Artworks</h2>

          <div className="art-grid">
            <div className="art-card">
              <img src="https://images.unsplash.com/photo-1504199367641-aba815d29b86" />
              <p className="art-name">Sunset Portrait</p>
            </div>

            <div className="art-card">
              <img src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa" />
              <p className="art-name">Cultural Mask</p>
            </div>

            <div className="art-card">
              <img src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922" />
              <p className="art-name">Nature Harmony</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}