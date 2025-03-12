import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCarSide, FaRupeeSign } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./BrochureForm.css";

const Brochure = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim() || formData.phone.length < 10)
      newErrors.phone = "Valid phone number is required.";
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="brochure-modal">
        <div className="brochure-header">
          <h5>Download Brochure</h5>
          <button className="close-btn" onClick={handleClose}>✖</button>
        </div>

        <div className="brochure-content">
          {/* Left Side - Promises */}
          <div className="brochure-left">
            <h6>We Promise</h6>
            <p><FaPhoneAlt className="icon" /> Assured Call Back</p>
            <p><FaCarSide className="icon" /> Free Site Visit</p>
            <p><FaRupeeSign className="icon" /> Best Price</p>
          </div>

          {/* Right Side - Form */}
          <div className="brochure-right">
            <h6>Register For Exclusive Project</h6>
            <p className="offer-text">Presentation & Offers!!</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-2">
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputStyle={{ width: "100%" }}
                />
                {errors.phone && <p className="text-danger small">{errors.phone}</p>}
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="E-Mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Button className="download-btn" type="submit">
                Download Now
              </Button>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Brochure;
