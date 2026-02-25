import Navbar from "../components/Navbar";
import "../styles.css";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="admin-container">
        <h1 className="admin-title">Admin Dashboard</h1>
        <p className="admin-sub">Manage Virtual Art Gallery Platform</p>

        <div className="admin-grid">
          <a href="/admin/users" className="admin-card">👥 Manage Users</a>
          <a href="/admin/artworks" className="admin-card">🎨 Manage Artworks</a>
          <a href="/admin/orders" className="admin-card">📦 View Orders</a>
          <a href="/upload-art" className="admin-card">⬆ Upload New Artwork</a>
          <a href="/admin/analytics" className="admin-card">📊 Analytics</a>
        </div>
      </div>
    </>
  );
}