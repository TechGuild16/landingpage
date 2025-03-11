import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import aboutimg1 from "../../assets/about-image.jpg";
import aboutimg2 from "../../assets/about-img2.jpg";

const About = () => {
  return (
    <Container className="my-5 py-5 position-relative">
      <Row className="align-items-center justify-content-center gap-5">
        <Col md={5} className="position-relative">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="position-absolute imagerrrr floatimg shadow-lg rounded-4 overflow-hidden"
            style={{
              top: "-40px",
              left: "-40px",
              width: "280px",
              height: "210px",
              zIndex: 2,
              border: "6px solid white",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Image src={aboutimg2} alt="Luxury Pool" fluid className="h-100 w-100  object-fit-cover" />
          </motion.div>

          {/* Main Background Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-4 shadow-lg overflow-hidden"
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)" }}
          >
            <Image src={aboutimg1} alt="Luxury Apartments" fluid className="w-100" />
          </motion.div>
        </Col>

        {/* Text Section */}
        <Col md={6} className="position-relative">
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h6 className="text-primary fw-bold position-relative d-inline-block fs-5">
              Overview
              <span className="d-block mt-2" 
                style={{
                  width: "60px",
                  height: "4px",
                  background: "#7a287a",
                  borderRadius: "5px",
                }}
              ></span>
            </h6>
            <h2 className="fw-bold display-3 text-dark mb-4">
              Building Dreams, <br /> Creating Homes: <br /> Our Story
            </h2>
            <p className="text-muted fs-5 lh-lg">
              Welcome to <strong>Birla Sangamwadi</strong> – an exclusive residential oasis in Pune. 
              With breathtaking architecture, cutting-edge amenities, and a peaceful setting, 
              it redefines luxury living.
            </p>
            <p className="text-muted fs-5 lh-lg">
              Our <strong>3 and 4-bedroom apartments</strong> are designed for modern lifestyles, 
              offering spacious layouts, **top-tier furnishings**, and **well-ventilated spaces**. 
              Live in elegance with a home that blends opulence and comfort.
            </p>
          </motion.div>

          {/* Stylish "OVERVIEW" Background Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            className="position-absolute fw-bold text-uppercase"
            style={{
              fontSize: "120px",
              right: "-60px",
              top: "50%",
              transform: "translateY(-50%) rotate(90deg)",
              color: "#eaeaea",
              zIndex: -1,
            }}
          >
            Overview
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
