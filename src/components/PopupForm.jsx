import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaPhoneAlt, FaCarSide, FaRupeeSign } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import { Modal, Button } from "react-bootstrap";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { animate } from "framer-motion";
const PopupForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!phone || phone.length < 10)
      newErrors.phone = "Phone number must be 10 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      subject: formData.subject,
      name: formData.name,
      message: formData.message,
      email: formData.email,
      phone: phone,
    };

    emailjs
      .send(
        "service_gr9oxba",
        "template_2h8x1qs",
        templateParams,
        "TztJaR0LXFRcGec-g"
      )
      .then(() => {
        setModalMessage("🎉 Form submitted successfully!");
        setShowModal(true);
      })
      .catch(() => {
        setModalMessage("❌ Failed to submit form. Please try again.");
        setShowModal(true);
      });
  };

  return (
    <>
      {showForm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="popup-overlay"
        >
          <div className="popup-container">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              <FaTimes />
            </button>

            <div className="popup-content">
              <div className="left-section">
                <h3>We Promise</h3>
                <div className="promise-item">
                  <FaPhoneAlt className="icon" size={40} />
                  <span>Assured Call Back</span>
                </div>
                <div className="promise-item">
                  <FaCarSide className="icon" size={40} />
                  <span>Free Site Visit</span>
                </div>
                <div className="promise-item">
                  <FaRupeeSign className="icon" size={40} />
                  <span>Best Price</span>
                </div>
              </div>

              <div className="right-section">
                <h4>Register For Exclusive Project</h4>
                <p className="highlight-text">Presentation & Offers!!</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="error-text" style={{color : "red"}}>{errors.name}</p>}

                  <PhoneInput
                    country="in"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputStyle={{ width: "100%" }}
                    className="mt-2"
                  />
                  {errors.phone && <p className="error-text" style={{color : "red"}}>{errors.phone}</p>}

                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error-text" style={{color : "red"}}>{errors.email}</p>}

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="border mt-2 p-2"
                    style={{ width: "100%", }}
                  />

                  <button className="submit-btn" type="submit">
                    Get Instant Call Back
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <style>
        {`
          /* Overlay Background */
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
          }

          /* Popup Container */
          .popup-container {
            background: white;
            display: flex;
            flex-direction: column;
            width: 90%;
            max-width: 600px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            position: relative;
            padding: 0;
          }

          /* Close Button */
          .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
          }

          /* Popup Content */
          .popup-content {
            display: flex;
          }

          /* Left Section */
          .left-section {
            width: 40%;
            background: #f8f3f9;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
          }

          .left-section h3 {
            color: #7c2182;
            font-size: 18px;
            margin-bottom: 10px;
          }

          .promise-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            color: #7c2182;
            margin-bottom: 10px;
          }

          .icon {
            font-size: 18px;
          }

          /* Right Section */
          .right-section {
            width: 60%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .right-section img {
            margin-bottom: 10px;
          }

          .right-section h4 {
            font-size: 18px;
            font-weight: bold;
          }

          .highlight-text {
            color: red;
            font-weight: bold;
            font-size: 14px;
          }

          input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-top: 10px;
          }

          .submit-btn {
            width: 100%;
            padding: 10px;
            background: linear-gradient(to right, #c79234, #8b5d25);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
          }

          .submit-btn:hover {
            background: linear-gradient(to right, #8b5d25, #c79234);
          }

          /* Responsive Design */
          @media (max-width: 600px) {
            .popup-content {
              flex-direction: column;
            }

            .left-section {
              width: 100%;
              border-top-right-radius: 10px;
              border-bottom-left-radius: 0;
            }

            .right-section {
              width: 100%;
            }
          }
        `}
      </style>
      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} style={{zIndex : "900000000000000000000"}}  centered>
        <Modal.Body className={`text-center  p-4 ${animate ? "fade-in" : ""}`} >
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
    </>
  );
};

export default PopupForm;
