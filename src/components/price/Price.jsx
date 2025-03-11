import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Price = () => {
  const data = [
    { type: '2 BHK', price: '₹ 1.75 Cr*', size: '860-906 Sq.Ft' },
    { type: '3 BHK', price: '₹ 3.40 Cr*', size: '1450 Sq.Ft' },
    { type: '4 BHK', price: '₹ 4.35 Cr*', size: '1800 Sq.Ft' },
  ];

  return (
    <Container className="py-5 text-center" style={{ backgroundColor: '#f3f4f6' }}>
      <h6 className=" fw-bold mb-2" style={{ letterSpacing: '2px', color : "purple" }}>Price List</h6>
      <h2 className="fw-bold display-5 mb-5 ">Unlock the Door to Affordable Luxury</h2>
      <Row>
        {data.map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="shadow-lg border-0 rounded-4 p-3" style={{ background: 'linear-gradient(135deg, #f0f2f5 0%, #e6eaf0 100%)' }}>
              <Card.Header className="purple text-white rounded-3 text-uppercase fw-bold py-3 fs-2">
                {item.type}
              </Card.Header>
              <Card.Body>
                <h4 className="fw-bold fs-3  text-dark">{item.price} <span className="text-muted">Onwards</span></h4>
                <p className="text-secondary fs-5">Size: {item.size}</p>
                <Button  className="rounded-pill px-4 fs-6 purple">
                  Know More <FaArrowRight className="ms-2" />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Price;