import Navbar from "../components/Navbar";

export default function AdminAnalytics() {
  const users = JSON.parse(localStorage.getItem("allUsers")) || [];
  const artworks = JSON.parse(localStorage.getItem("allArtworks")) || [];
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <h1 className="admin-title">Analytics</h1>

        <div className="analytics-box">
          <h2>Total Users: {users.length}</h2>
          <h2>Total Artworks: {artworks.length}</h2>
          <h2>Total Orders: {orders.length}</h2>
        </div>
      </div>
    </>
  );
}