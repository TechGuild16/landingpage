import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { animate } from 'framer-motion';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone : ''
    });
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});
    const [modalInfo, setModalInfo] = useState({ show: false, message: '', success: false });

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
        if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
        }
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

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            phone: phone,
        };

        emailjs
            .send("service_gr9oxba", "template_2h8x1qs", templateParams, "TztJaR0LXFRcGec-g")
            .then(() => setModalInfo({ show: true, message: "🎉 Form submitted successfully!", success: true }))
            .catch(() => setModalInfo({ show: true, message: "❌ Failed to submit form. Please try again.", success: false }));
    };

    return (
        <Container className="py-5">
            <Row className="align-items-center">
                <Col md={6}>
                    <h3 className="text-purple fw-bold">
                        About Developer
                        <span 
                            className="ms-2" 
                            style={{ borderBottom: '3px solid #6A1B9A', width: '50px', display: 'inline-block' }}
                        ></span>
                    </h3>
                    <p className="mt-3">
                        Birla Estates is the real estate vertical of Century Textiles and Industries Ltd.,
                        the over Rs. 8000 crore flagship Company of the B. K. Birla Group of Companies with
                        presence in cement, textiles, rayon yarn, pulp & paper, salt, chemicals and more.
                    </p>
                </Col>

                <Col md={6}>
                    <Card className="p-4 text-white purple" style={{ borderRadius: '12px' }}>
                        <h3 className="text-center mb-4" style={{ color: '#fff' }}>Keep In Touch</h3>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    type="text" 
                                    name="name"
                                    placeholder="Enter Name" 
                                    value={formData.name} 
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid" style={{color : "red"}}>{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter Email" 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid" style={{color : "red"}}>{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <PhoneInput
                                    country={'in'}
                                    inputStyle={{ width: '100%' }}
                                    placeholder="Enter Number"
                                    value={phone}
                                    onChange={setPhone}
                                    className="slecect"
                                />
                                {errors.phone && <p className="text-danger small mt-1" style={{color : "red"}} >{errors.phone}</p>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    name="message"
                                    placeholder="Enter Message"
                                    value={formData.message} 
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button 
                                className="w-100" 
                                type="submit"
                                style={{ backgroundColor: '#fff', color: "black", border: 'none' }}
                            >
                                Submit Now
                            </Button>
                        </Form>

                        <Form.Group className="mt-3 d-flex align-items-start">
                            <Form.Check type="checkbox" className="me-2" defaultChecked />
                            <small>
                                I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers.
                                This consent overrides any registration for DNC/NDNC.
                            </small>
                        </Form.Group>
                    </Card>
                </Col>
            </Row>

            <Modal show={modalInfo.show} onHide={() => setModalInfo({ show: false, message: '', success: false })} centered>
                 <Modal.Body className={`text-center p-4 ${animate ? "fade-in" : ""}`}>
                                    <IoCheckmarkCircleSharp size={70} className="text-success animate-checkmark" />
                                    <h4 className="fw-bold text-success mt-3">
                                        🎉 Success! Thank you, {formData.name || "Guest"}!
                                    </h4>
                                    <p className="text-muted">We'll get back to you shortly.</p>
                                    <Button
                                        className="w-100 mt-3 purple fw-bold"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Back to Home
                                    </Button>
                                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Contact;