import Navbar from "../components/Navbar";
import "../styles.css";

export default function Exhibitions() {
  const exhibitions = [
    {
      title: "Modern Art Expo 2024",
      img: "https://static.vecteezy.com/system/resources/thumbnails/028/857/947/small_2x/3d-render-of-modern-art-gallery-interior-with-paintings-on-the-wall-ai-generated-free-photo.jpg",
      desc: "Explore the future of modern abstract art.",
    },
    {
      title: "Cultural Heritage Exhibition",
      img: "https://tse2.mm.bing.net/th/id/OIP.h-iHb1-dhmXff-nmnbzvxQHaFN?pid=Api&P=0&h=180",
      desc: "A walk through ancient cultural artworks.",
    },
    {
      title: "Nature & Harmony",
      img: "https://fogsl.cmb.ac.lk/wp-content/uploads/2019/03/52823457_2439146736110004_9159802208726810624_n.jpg",
      desc: "Celebrating nature’s beauty through paintings.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="exhibition-container">
        <h1 className="exhibition-title">Art Exhibitions</h1>
        <p className="exhibition-sub">Upcoming & ongoing exhibitions</p>

        <div className="exhibition-grid">
          {exhibitions.map((ex, index) => (
            <div key={index} className="exhibition-card">
              <img src={ex.img} alt="" />
              <h3>{ex.title}</h3>
              <p>{ex.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}