import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import highlight from "../../assets/highlight.jpg";

const Features = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="align-items-center">
        <Col md={6} className="position-relative">
          <div
            className="position-absolute  fw-bold text-uppercase"
            style={{
              fontSize: "100px",
              left: "-30px",
              top: "20%",
              transform: "rotate(-90deg)",
              color: "#eaeaea",
              zIndex: -1,
              opacity: 0.2,
            }}
          >
            Highlight
          </div>

          <h6 className=" fw-bold fs-5">Highlight</h6>
          <h2 className="fw-bold display-5 text-dark mb-4">
            Elevating Properties: <br /> Our Spotlight Features
          </h2>

          <div className="d-flex align-items-start gap-3 mb-3">
            <div
              className="rounded-3 text-dark fw-bold px-3 py-2"
              style={{
                background: "#f8f9fa",
                border: "2px solid #ddd",
                fontSize: "18px",
              }}
            >
              01
            </div>
            <p className="text-muted fs-5 m-0">
              Uninterrupted river and city view
            </p>
          </div>

          <div className="d-flex align-items-start gap-3 mb-3">
            <div
              className="rounded-3 text-dark fw-bold px-3 py-2"
              style={{
                background: "#f8f9fa",
                border: "2px solid #ddd",
                fontSize: "18px",
              }}
            >
              02
            </div>
            <p className="text-muted fs-5 m-0">
              India's Biggest Brand is coming to Pune
            </p>
          </div>

          <div className="d-flex align-items-start gap-3 mb-3">
            <div
              className="rounded-3 text-dark fw-bold px-3 py-2"
              style={{
                background: "#f8f9fa",
                border: "2px solid #ddd",
                fontSize: "18px",
              }}
            >
              03
            </div>
            <p className="text-muted fs-5 m-0">
              Experience the Pinnacle of Luxury Living!
            </p>
          </div>

          <div className="d-flex align-items-start gap-3">
            <div
              className="rounded-3 text-dark fw-bold px-3 py-2"
              style={{
                background: "#f8f9fa",
                border: "2px solid #ddd",
                fontSize: "18px",
              }}
            >
              04
            </div>
            <p className="text-muted fs-5 m-0">
              State-of-the-art clubhouse with 40+ amenities
            </p>
          </div>
        </Col>

        {/* Right Image */}
        <Col md={6}>
          <Image src={highlight} alt="Luxury Building" fluid className="rounded-4 shadow" />
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
