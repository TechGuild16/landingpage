import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import background from "../../assets/background.jpg";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
const Hero = () => {
    const [phone, setPhone] = useState("");
    const [scrollBottom, setScrollBottom] = useState(20);
    const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "" });
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [formopne, setopenm] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const newBottom = Math.min(120, 20 + scrolled * 0.2);
            setScrollBottom(newBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };
    const formopoen = () => {
        setopenm(true)
    }
    const handleCloseForm = () => setopenm(false);
    const phoneWithoutCountryCode = phone.replace(/^\+91/, "");

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (!/^[a-zA-Z\s]{3,}$/.test(formData.name.trim())) {
            newErrors.name = "Name must contain only letters (min 3 characters).";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!phone || phone.length < 10)
            newErrors.phone = "Phone number must be 10 digits.";

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: phone,
            message: formData.message,
        };

        emailjs
            .send("service_gr9oxba", "template_2h8x1qs", templateParams, "TztJaR0LXFRcGec-g")
            .then(() => {
                setShowModal(true);
                setAnimate(true);
                setTimeout(() => {
                    setAnimate(false);
                    setShowModal(false);
                }, 4000);
            })
            .catch(() => alert("❌ Failed to submit form. Please try again."));
    };

    return (
        <>
            <div
                className="hero-section text-white d-flex align-items-center"
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "80px 0",
                    minHeight: "100vh",
                }}
            >
                <Container id="home">
                    <Row className="align-items-center">
                        <Col lg={7} className="text-start">
                            <h1 className="fw-bold display-4 mytext">BIRLA PUNYA PHASE 1</h1>
                            <p className="mb-3 lead d-flex align-items-center" >
                                <FaMapMarkerAlt className="me-2 " /> <p className="pt-2" style={{ fontWeight: "500" }}>Sangamwadi, Central Pune, next to the Sheraton Hotel</p>

                            </p>
                            <h4 className="fw-semibold">2, 3 & 4 BHK APARTMENTS</h4>
                            <ul className="list-unstyled mybackground mt-4 fs-5">
                                <li className="mb-2 mylilist">
                                    <FaCheckCircle className="text-success me-2" /> Status: New Launch
                                </li>
                                <li className="mb-2 mylilist">
                                    <FaCheckCircle className="text-success me-2" /> Green Spaces: 80%
                                </li>
                                <li className="mb-2 mylilist">
                                    <FaCheckCircle className="text-success me-2" /> Largest Land Parcel of 5.76 Acre in Central Pune
                                </li>
                                <li className="mb-2 mylilist">
                                    <FaCheckCircle className="text-success me-2" /> Tallest Tower of Central Pune
                                </li>
                                <li className="mb-2 mylilist">
                                    <FaCheckCircle className="text-success me-2" /> 1.5 Acres of Grand Clubhouse
                                </li>
                            </ul>
                            <Button className="mt-3 purple px-5 py-2 fw-bold shadow-lg" onClick={formopoen}>Know More →</Button>
                            <div className="mt-4 p-4 rounded shadow-lg price-card">
                                <h5 className="fw-bold text-uppercase text-white">Starting Price</h5>
                                <h3 className="text-warning fw-bold display-5">₹ 1.75 Cr*</h3>
                            </div>
                        </Col>

                        {/* Form Section */}
                        <Col lg={5} className="mt-5 mt-lg-0">
                            <div className="p-4 rounded shadow-lg backdrop-blur">
                                <h4 className="text-center fw-bold mb-3">Book A Site Visit!</h4>
                                <Form onSubmit={handleSubmit}>
                                    {/* Name Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="p-3 rounded-3"
                                            required
                                        />
                                        {errors.name && <p className="text-danger mt-1">{errors.name}</p>}
                                    </Form.Group>

                                    {/* Email Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="p-3 rounded-3"
                                            required
                                        />
                                        {errors.email && <p className="text-danger mt-1">{errors.email}</p>}
                                    </Form.Group>

                                    {/* Phone Field */}
                                    <Form.Group className="mb-3">
                                        <PhoneInput
                                            country="in"
                                            value={phone}
                                            onChange={(phone) => setPhone(phone)}
                                            inputStyle={{ width: "100%" }}
                                            className="mt-2"
                                        />
                                        {errors.phone && <p className="error-text" style={{ color: "red" }}>{errors.phone}</p>}
                                    </Form.Group>

                                    {/* Message Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="message"
                                            placeholder="Enter Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="p-3 rounded-3"
                                            required
                                        />
                                        {errors.message && <p className="text-danger mt-1">{errors.message}</p>}
                                    </Form.Group>

                                    <Button type="submit" className="w-100 purple fw-bold py-3 shadow-lg">
                                        Submit Now
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="absolutepos" style={{
                    position: "fixed",
                    right: "20px",
                    bottom: `${scrollBottom}px`,
                    transition: "bottom 0.3s ease-in-out",
                }}>
                    <a
                        href="https://wa.me/+919773086484"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-button"
                    >
                        <FaWhatsapp className="" size={100} />
                    </a>
                    <a
                        href="tel:+919773086484"
                        className="call-button"
                    >
                        <FaPhone className="" size={100} />
                    </a>
                </div>

            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
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

            <Modal show={formopne} onHide={handleCloseForm} centered>
                <Modal.Body className="p-4 ">
                    <h4 className="text-center text-black fw-bold mb-3">Book A Site Visit!</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="p-3 rounded-3"
                                required
                            />
                            {errors.name && <p className="text-danger mt-1">{errors.name}</p>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-3 rounded-3"
                                required
                            />
                            {errors.email && <p className="text-danger mt-1">{errors.email}</p>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <PhoneInput
                                country="in"
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                inputStyle={{ width: "100%" }}
                                className="mt-2"
                            />
                            {errors.phone && <p className="error-text" style={{ color: "red" }}>{errors.phone}</p>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                placeholder="Enter Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="p-3 rounded-3"
                                required
                            />
                            {errors.message && <p className="text-danger mt-1">{errors.message}</p>}
                        </Form.Group>

                        <Button type="submit" style={{ color: "#000" }} className="w-100 purple text-white  fw-bold py-3 shadow-lg">
                            Submit Now
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>


        </>

    );
};

export default Hero;