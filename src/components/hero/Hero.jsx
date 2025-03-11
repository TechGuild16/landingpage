import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import background from "../../assets/background.jpg";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
const Hero = () => {
    const [phone, setPhone] = useState("");
    const [formData, setFormData] = useState({ name: "", email: "", message: "",phone : "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: phone,
            message: formData.message,
        };

        emailjs
            .send(
                "service_gr9oxba",
                "template_2h8x1qs",
                templateParams,
                "TztJaR0LXFRcGec-g"
            )
            .then(() => toast.success("🎉 Form submitted successfully!"))
            .catch(() => toast.error("❌ Failed to submit form. Please try again."));
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
            <Container>
                <Row className="align-items-center ">
                    <Col lg={7} className="text-start  text-lg-start">
                        <h1 className="fw-bold display-5">BIRLA PUNYA PHASE 1</h1>
                        <p className="mb-3 lead">
                            <FaMapMarkerAlt className="me-2" /> At Mangalwar Peth, Kasba Peth, Pune
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
                        <Button variant="primary" className="mt-3 px-5 py-2 fw-bold shadow">
                            Know More →
                        </Button>
                        <div className="mt-4 p-4 rounded shadow-lg price-card">
                            <h5 className="fw-bold text-uppercase text-white">Starting Price</h5>
                            <h3 className="text-warning fw-bold display-5">₹ 1.75 Cr*</h3>
                        </div>
                    </Col>

                    <Col lg={5} className="mt-5 mt-lg-0">
                        <div className="p-4 rounded shadow-lg backdrop-blur">
                            <h4 className="text-center fw-bold mb-3">Book A Site Visit !</h4>
                            <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="p-2"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="p-2"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <PhoneInput
                                            country="in"
                                            enableSearch={true}
                                            containerClass="w-100"
                                            inputClass="form-control w-100"
                                            value={phone}
                                            onChange={setPhone}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="message"
                                            placeholder="Enter Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="p-2"
                                        />
                                    </Form.Group>

                                    <Button type="submit" variant="primary" className="w-100 fw-bold py-2 shadow">
                                        Submit Now
                                    </Button>

                                    <Form.Check
                                        type="checkbox"
                                        className="mt-3 small text-white d-flex align-items-center gap-2"
                                        label="I authorize company representatives to Call, SMS, Email, or WhatsApp me about its products and offers."
                                    />
                                </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer 
    position="top-center" 
    autoClose={3000} 
    toastContainerClassName="custom-toast-container"
/>
            <style>
                {`
          .backdrop-blur {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            }
            
            .price-card {
                background: linear-gradient(135deg, #ff8c00, #ff3d00);
                color: white;
                text-align: center;
                max-width: 300px;
            }
            `}
            </style>
        </div>
            </>
    );
};

export default Hero;
