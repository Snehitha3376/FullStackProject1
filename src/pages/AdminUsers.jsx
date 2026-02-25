import Navbar from "../components/Navbar";
import "../styles.css";

export default function AdminUsers() {
  const users = JSON.parse(localStorage.getItem("allUsers")) || [];

  return (
    <>
      <Navbar />

      <div className="admin-container">
        <h1 className="admin-title">Manage Users</h1>
        <p className="admin-sub">All registered users</p>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3">No users found.</td>
              </tr>
            ) : (
              users.map((u, i) => (
                <tr key={i}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}