import Navbar from "../components/Navbar";
import "../styles.css";

export default function AdminOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <h1 className="admin-title">Orders</h1>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Artwork</th>
              <th>Buyer</th>
              <th>Price</th>
              <th>Qty</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr><td colSpan="4">No orders yet.</td></tr>
            ) : (
              orders.map((o, i) => (
                <tr key={i}>
                  <td>{o.title}</td>
                  <td>{o.buyer}</td>
                  <td>₹{o.price}</td>
                  <td>{o.qty}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}