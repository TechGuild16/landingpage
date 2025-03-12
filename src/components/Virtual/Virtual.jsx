import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import background from "../../assets/background.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";

const Virtual = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleShowForm = () => setShow(true);
  const handleCloseForm = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!phone || phone.length < 10) newErrors.phone = "Phone number must be 10 digits.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const templateParams = { name: formData.name, email: formData.email, message: formData.message, phone };
    emailjs
      .send("service_gr9oxba", "template_2h8x1qs", templateParams, "TztJaR0LXFRcGec-g")
      .then(() => alert("Form submitted successfully!"))
      .catch(() => alert("Failed to submit form. Please try again."));
  };

  return (
    <Container id="virtual-tour" className="virtual-tour">
      <Row className="justify-content-center text-center">
        <Col md={12}>
          <h2 className="title fs-1">Virtual Site Tour</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} lg={8} className="text-center">
          <div className="virtual-tour-box">
            <img src={background} alt="Virtual Tour" className="tour-image" />
            <div className="overlay">
              <motion.div
                className="play-button"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={handleShowForm}
              >
                <FaPlay color="black" size={30} />
              </motion.div>
              <div className="text-content">
                <h3 className="tour-text">VIRTUAL TOUR</h3>
                <p className="sub-text">Birla Punya</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Form Modal */}
      <Modal show={show} onHide={handleCloseForm} centered>
        <Modal.Body className="p-4 ">
          <h3 className="text-center text-black mb-4">BIRLA PUNYA PHASE 1</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <PhoneInput country={"in"} inputStyle={{ width: "100%" }} placeholder="Enter Number" value={phone} onChange={setPhone} />
              {errors.phone && <p className="text-danger small mt-1">{errors.phone}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={3} name="message" placeholder="Enter Message" value={formData.message} onChange={handleChange} />
            </Form.Group>
            <Button className="w-100 purple" type="submit" style={{ color: "#ffff" }}>
              Submit Now
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Virtual;