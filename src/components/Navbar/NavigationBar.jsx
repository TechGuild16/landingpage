import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import { FaHome, FaRupeeSign, FaProjectDiagram, FaWifi, FaImages, FaMapMarkerAlt, FaYoutube, FaFileDownload, FaPhoneAlt, FaTimes, FaCarSide } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.jpg";
import dellogo from '../../assets/developer-logo.png'
import { FaPhoneFlip } from "react-icons/fa6";
import pdf from '../../assets/Birla.pdf'

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

const NavigationBar = () => {
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
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
      .then(() => {
        alert("Form submitted successfully!");
  
        const link = document.createElement("a");
        link.href = pdf; 
        link.setAttribute("download", "Brochure.pdf")
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
      })
      
      .catch(() => alert("Failed to submit form. Please try again."));
  };

  const handleOpen = () => {
    setShow(true)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("white");
      } else {
        setNavbarBg("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <Navbar
      expand="lg"
      className="custom-navbar shadow-sm sticky-top"
      style={{
        backgroundColor: navbarBg,
        transition: "background-color 0.3s ease-in-out"
      }}
    >
      <Container fluid>
        <Navbar.Brand className="fw-bold borderno pe-3">
          <img src={dellogo} width={180} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="nav-links">
            <a href="#home" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center", gap: "5px",paddingLeft:"8px" }} duration={500} className="border-end px-1 border-secondary"><FaHome /> Home</a>
            <a href="#price" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center", gap: "5px",paddingLeft:"8px" }} duration={500} className="border-end px-1 border-secondary"><FaRupeeSign />Cost Sheet</a>
            <a href="#floor-plan" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center", gap: "5px",paddingLeft:"8px" }} duration={500} className="border-end px-1 border-secondary"><FaProjectDiagram /> Floor Plan</a>
            <a href="#amenities" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center", gap: "5px",paddingLeft:"8px" }} duration={500} className="border-end px-1 border-secondary"><FaWifi /> Amenities</a>
            <a href="#gallery" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center", gap: "5px",paddingLeft:"8px" }} duration={500} className="border-end px-1 border-secondary">
              <FaImages /> Gallery
            </a>
            <a href="#location" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center", gap: "5px",paddingLeft:"8px" }} duration={500} className="border-end px-1 border-secondary "><FaMapMarkerAlt /> Location</a>
            <a href="#virtual-tour border-end px-1 border-secondary" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center", gap: "5px",paddingLeft:"8px" }} duration={500}><FaYoutube /> Virtual Site Tour</a>
            <a
      href="#brochure"
      style={{
        textDecoration: "none",
        color: "black",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
      duration={500}
      className=""
      onClick={handleOpen}
    >
      {/* Animated Map Marker Icon */}
      <motion.div
        animate={{
          y: [0, -5, 0], // Moves up (-5px) and back to original position
        }}
        transition={{
          duration: 1, // 1 second per cycle
          repeat: Infinity, // Infinite loop
          ease: "easeInOut",
        }}
      >
      <IoMdDownload />
      </motion.div>
      Brochure
    </a>
          </Nav>

          <div className="d-flex align-items-center gap-4">
            <Button href="#brochure" className="brochure-btn mx-1">
              <FaPhoneFlip className="icon-bounce" /> <a href="tel:+919773086484" style={{ color: "white", textDecoration: "none" }}>+919773086484</a>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
      {show && (
        <motion.div className="popup-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="popup-container">
            <button className="close-btn" onClick={() => setShow(false)}><FaTimes /></button>
            <div className="popup-content">
              <div className="left-section">
                <h3>We Promise</h3>
                <div><FaPhoneAlt /> Assured Call Back</div>
                <div><FaCarSide /> Free Site Visit</div>
                <div><FaRupeeSign /> Best Price</div>
              </div>
              <div className="right-section">
                <h4>Register For Exclusive Offers</h4>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                  {errors.name && <p>{errors.name}</p>}
                  <PhoneInput style={{width:"100%"}} className="mt-2 border"  country="in" value={phone} onChange={setPhone} />
                  {errors.phone && <p>{errors.phone}</p>}
                  <input type="email" name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} />
                  {errors.email && <p>{errors.email}</p>}
                  <textarea name="message" className="mt-2 border" style={{width:"100%"}} placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                  <button className="submit-btn" type="submit">Get Call Back</button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      )}

<style>
        {`
          /* Overlay Background */
         
        `}
      </style>
    </Navbar>
  );
};

export default NavigationBar;