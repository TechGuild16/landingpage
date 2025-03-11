import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import amenities from "../../assets/amenities.webp";

const Amenities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Container
      fluid
      className="py-5 position-relative"
      style={{
        background: "linear-gradient(to right, #f1eedb, #e3dcc2)",
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <Row className="justify-content-center text-center mb-5">
        <Col lg={8}>
          <h6 className="text-warning fw-bold" style={{ letterSpacing: "1px" }}>
            Premium Amenities
          </h6>
          <h2 className="fw-bold display-5 text-dark">
            Elevate Your Living with World-Class Facilities
          </h2>
        </Col>
      </Row>

      {/* Content Section */}
      <Row className="align-items-center position-relative">
        {/* Left Side Image */}
        <Col md={6} className="p-4">
          <img
            src={amenities}
            alt="Amenities"
            className="img-fluid rounded shadow w-100"
            style={{
              height: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </Col>

        {/* Right Side Slider - Overlapping Effect */}
        <Col md={6} className="p-4">
          <div>
            <Slider {...settings}>
              {[img1, img2, img3, img4].map((img, index) => (
                <div key={index} className="position-relative">
                  {/* Image */}
                  <img
                    src={img}
                    alt="Amenity"
                    className="img-fluid rounded w-100"
                    style={{
                      height: "100%",
                      maxHeight: "400px",
                      objectFit: "cover",
                      borderRadius: "20px",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                    }}
                  />
                  {/* Overlay Text with Glassmorphism Effect */}
                  <div
                    className="position-absolute p-3 rounded"
                    style={{
                      bottom: "15px",
                      left: "10px",
                      right: "10px",
                      background: "rgba(0, 0, 0, 0.5)",
                      backdropFilter: "blur(10px)",
                      color: "white",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    }}
                  >
                    <h3 className="fw-bold text-warning text-center">
                      Yoga & Wellness
                    </h3>
                    <p
                      className="m-0 text-center"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                      }}
                    >
                      Experience tranquility and well-being with our dedicated
                      wellness amenities, designed for a balanced lifestyle.
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Amenities;
