import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Exhibitions from "./pages/Exhibitions";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gallery from "./pages/Gallery";
import VisitorDashboard from "./pages/VisitorDashboard";
import ArtworkListing from "./pages/ArtworkListing";
import ArtworkUpload from "./pages/ArtworkUpload";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";

import ProtectedRoute from "./components/ProtectedRoute";

import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import AdminUsers from "./pages/AdminUsers";
import AdminArtworks from "./pages/AdminArtworks";
import AdminOrders from "./pages/AdminOrders";
import AdminAnalytics from "./pages/AdminAnalytics";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* USER PROTECTED */}
        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />

        <Route
          path="/visitor"
          element={
            <ProtectedRoute>
              <VisitorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/artworks"
          element={
            <ProtectedRoute>
              <ArtworkListing />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload-art"
          element={
            <ProtectedRoute>
              <ArtworkUpload />
            </ProtectedRoute>
          }
        />
        <Route
  path="/exhibitions"
  element={
    <ProtectedRoute>
      <Exhibitions />
    </ProtectedRoute>
  }
/>

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminUsers />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/artworks"
          element={
            <AdminRoute>
              <AdminArtworks />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <AdminOrders />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <AdminRoute>
              <AdminAnalytics />
            </AdminRoute>
          }
        />

      </Routes>
    </Router>
  );
}