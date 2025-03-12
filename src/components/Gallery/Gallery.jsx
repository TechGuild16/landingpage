import React from "react";
import { Container } from "react-bootstrap";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import "./Gallery.css"; // Custom CSS File

const Gallery = () => {
  const galleryImages = [gallery1, gallery2, gallery3, gallery4];

  return (
    <Container id="gallery" className="py-5">
      <h3 className="text-purple fw-bold">
        Gallery
        <span
          className="ms-2"
          style={{
            borderBottom: "3px solid #6A1B9A",
            width: "50px",
            display: "inline-block",
          }}
        ></span>
      </h3>
      <h2 className="mb-4">Discover Your Dream Home: Explore Our Stunning Gallery</h2>

      <div className="gallery-container">
        <div className="gallery-slider">
          {galleryImages.concat(galleryImages).map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} className="rounded-4" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
