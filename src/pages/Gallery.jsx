import Navbar from "../components/Navbar";
import "../styles.css";

export default function Gallery() {
  const galleryImages = [
    "https://prettyhomesindia.com/cdn/shop/files/1_031fa141-fec2-49ed-ac94-228a40067afc.jpg?v=1726906771&width=1100",
    "https://tiimg.tistatic.com/fp/1/002/789/oil-paintings-538.jpg",
    "https://fromlight2art.com/wp-content/uploads/2023/08/szureikat_the_philosophy_of_art_classical_painting_no_text_a7587cd8-8e29-4b80-9cda-f11185433a51-768x430.jpg",
    "https://img.freepik.com/premium-vector/aesthetic-illustration-chinese-scenic-view-made-basis-ai-generation-vector-watercolor-world-travel-asia-silhouette-tourism-paint-culture-nature-concept-vector-illustration_579956-3342.jpg?w=2000",
    "https://img.freepik.com/premium-photo/background-flowers-leafs-carved-artwork-wallpaper-classic-pattern-ai-generator_616652-11313.jpg",
    "https://www.keblog.it/wp-content/uploads/2016/05/cucchiai-legno-intagliati-manici-decorati-giles-newman-14-700x525.jpg"
  ];

  return (
    <>
      <Navbar />

      <div className="gallery-container">
        <h1 className="gallery-title">Art Gallery</h1>
        <p className="gallery-sub">Explore aesthetic and handcrafted artworks</p>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <img key={index} src={img} className="gallery-img" />
          ))}
        </div>
      </div>
    </>
  );
}