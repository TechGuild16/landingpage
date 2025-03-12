import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';

const Price = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const data = [
    { type: '2 BHK', price: '₹ 1.75 Cr*', size: '860-906 Sq.Ft' },
    { type: '3 BHK', price: '₹ 3.40 Cr*', size: '1450 Sq.Ft' },
    { type: '4 BHK', price: '₹ 4.35 Cr*', size: '1800 Sq.Ft' },
  ];

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!phone || phone.length < 10) newErrors.phone = 'Phone number must be 10 digits.';
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
    emailjs.send('service_gr9oxba', 'template_2h8x1qs', templateParams, 'TztJaR0LXFRcGec-g')
      .then(() => {
        setShow(false);
        setShowModal(true);
      })
      .catch(() => alert('Failed to submit form. Please try again.'));
  };

  return (
    <Container id='price' className='py-5 text-center' style={{ backgroundColor: '#f3f4f6' }}>
      <h6 className='fw-bold mb-2' style={{ letterSpacing: '2px', color: 'purple' }}>Price List</h6>
      <h2 className='fw-bold display-5 mb-5'>Unlock the Door to Affordable Luxury</h2>
      <Row>
        {data.map((item, index) => (
          <Col key={index} md={4} className='mb-4'>
            <Card className='shadow-lg border-0 rounded-4 p-3' style={{ background: 'linear-gradient(135deg, #f0f2f5 0%, #e6eaf0 100%)' }}>
              <Card.Header className='purple text-white rounded-3 text-uppercase fw-bold py-3 fs-2'>
                {item.type}
              </Card.Header>
              <Card.Body>
                <h4 className='fw-bold fs-3 text-dark'>{item.price} <span className='text-muted'>Onwards</span></h4>
                <p className='text-secondary fs-5'>Size: {item.size}</p>
                <Button className='rounded-pill px-4 fs-6 purple' onClick={handleShow}>
                  Price Breakup <FaArrowRight className='ms-2' />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Form */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className='p-4'>
          <h3 className='text-center text-black mb-4'>BIRLA PUNYA PHASE 1</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Control type='text' name='name' placeholder='Enter Name' value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
              <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control type='email' name='email' placeholder='Enter Email' value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
              <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
              <PhoneInput country={'in'} inputStyle={{ width: '100%' }} placeholder='Enter Number' value={phone} onChange={setPhone} />
              {errors.phone && <p className='text-danger small mt-1'>{errors.phone}</p>}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control as='textarea' rows={3} name='message' placeholder='Enter Message' value={formData.message} onChange={handleChange} />
            </Form.Group>
            <Button className='w-100 purple' type='submit' style={{ color: '#ffff' }}>
              Submit Now
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className='text-center p-4'>
          <IoCheckmarkCircleSharp size={70} className='text-success animate-checkmark' />
          <h4 className='fw-bold text-success mt-3'>🎉 Success! Thank you, {formData.name || 'Guest'}!</h4>
          <p className='text-muted'>We'll get back to you shortly.</p>
          <Button className='w-100 mt-3 purple fw-bold' onClick={() => setShowModal(false)}>
            Back to Home
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Price;