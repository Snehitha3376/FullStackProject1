import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("loggedInUser")); // ONLY THIS

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}