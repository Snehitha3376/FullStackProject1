import Navbar from "../components/Navbar";
import GoldButton from "../components/GoldButton";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <div
        className="banner"
        style={{
          backgroundImage:
            "url('https://st2.depositphotos.com/1110663/43053/i/450/depositphotos_430532652-stock-photo-art-gallery-canvas-abstract-istallation.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="banner-title">Virtual Art Gallery</h1>

        <div className="btn-row">
          <Link to="/gallery" style={{ textDecoration: "none" }}>
            <GoldButton text="Explore Gallery" />
          </Link>

          <Link to="/exhibitions" style={{ textDecoration: "none" }}>
            <button className="primary-btn">Start Virtual Tour</button>
          </Link>
        </div>
      </div>
    </>
  );
}