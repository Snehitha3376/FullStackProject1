import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles.css";

export default function ArtworkUpload() {
  const [imagePreview, setImagePreview] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  }

  function handleUpload() {
    alert("🎉 Artwork Uploaded Successfully!");
  }

  return (
    <>
      <Navbar />

      <div className="upload-container">
        <h1 className="upload-title">Upload New Artwork</h1>
        <p className="upload-sub">Fill the details and publish your artwork</p>

        <div className="upload-card">

          <input
            className="input-box"
            placeholder="Artwork Title"
          />

          <textarea
            className="input-box textarea-box"
            placeholder="Artwork Description"
          ></textarea>

          <select className="input-box">
            <option>Select Category</option>
            <option>Abstract</option>
            <option>Modern Art</option>
            <option>Renaissance</option>
            <option>Cultural</option>
            <option>Nature</option>
          </select>

          <input
            type="number"
            className="input-box"
            placeholder="Price (₹)"
          />

          <label className="upload-label">Upload Artwork Image</label>

          <input
            type="file"
            accept="image/*"
            className="input-box"
            onChange={handleImageChange}
          />

          {imagePreview && (
            <img className="preview-img" src={imagePreview} alt="Preview" />
          )}

          <button className="primary-btn upload-btn" onClick={handleUpload}>
            Upload Artwork
          </button>
        </div>
      </div>
    </>
  );
}