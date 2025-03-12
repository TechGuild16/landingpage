import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";
import img1 from "../../assets/floorplan-sm (1).jpg";
import img2 from "../../assets/floorplan-sm.jpg";
import img3 from "../../assets/floorplan1-sm.jpg";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const FloorPlan = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "" });
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const plans = [
    { title: "2 BHK", img: img2 },
    { title: "3 BHK", img: img3 },
    { title: "4 BHK", img: img2 },
  ];

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
    
    const templateParams = { name: formData.name, email: formData.email, message: formData.message, phone: phone };
    emailjs.send("service_gr9oxba", "template_2h8x1qs", templateParams, "TztJaR0LXFRcGec-g")
      .then(() => {
        setShow(false);
        setShowModal(true);
      })
      .catch(() => alert("Failed to submit form. Please try again."));
  };

  return (
    <Container id="floor-plan" className="text-center py-5">
      <h3 className="fs-1 mb-3">Floor Plan</h3>
      <h2 className="mb-4">Choose Your Perfect Plan</h2>
      <Row className="justify-content-center">
        {plans.map((plan, index) => (
          <Col key={index} md={4} className="mb-4 justify-content-center">
            <Card className="border rounded-3 shadow-sm">
              <Card.Img variant="top" src={plan.img} className="img-fluid blur" style={{ filter: "blur(5px)" }} />
              <Button className="position-absolute purple top-50 start-50 translate-middle" onClick={handleShowForm}>
                <FaRegEye className="me-2" /> View Floor Plan
              </Button>
              <Card.Footer className="text-center fs-2 purple text-white fw-bold">{plan.title}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleCloseForm} centered>
        <Modal.Body className="p-4">
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
              <PhoneInput country={'in'} inputStyle={{ width: '100%' }} placeholder="Enter Number" value={phone} onChange={setPhone} />
              {errors.phone && <p className="text-danger small mt-1">{errors.phone}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={3} name="message" placeholder="Enter Message" value={formData.message} onChange={handleChange} />
            </Form.Group>
            <Button className="w-100 purple" type="submit" style={{ color: "#fff" }}>
              Submit Now
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center p-4">
          <IoCheckmarkCircleSharp size={70} className="text-success" />
          <h4 className="fw-bold text-success mt-3">🎉 Success! Thank you, {formData.name || "Guest"}!</h4>
          <p className="text-muted">We'll get back to you shortly.</p>
          <Button className="w-100 mt-3 purple fw-bold" onClick={() => setShowModal(false)}>
            Back to Home
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FloorPlan;