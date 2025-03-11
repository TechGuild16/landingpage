import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaRegEye } from 'react-icons/fa';
import img1 from '../../assets/floorplan-sm (1).jpg';
import img2 from '../../assets/floorplan-sm.jpg';
import img3 from '../../assets/floorplan1-sm.jpg';

const FloorPlan = () => {
    const plans = [
        { title: 'Master Plan', img: img1 },
        { title: '2 BHK', img: img2 },
        { title: '3 BHK', img: img3 },
        { title: '4 BHK', img: img2 },
    ];

    return (
        <Container className="text-center py-5">
            <h3 className="fs-1 mb-3">Floor Plan</h3>
            <h2 className="mb-4">Choose Your Perfect Plan</h2>
            <Row className='justify-content-center'>
                {plans.map((plan, index) => (
                    <Col key={index} md={4} className="mb-4 justify-content-center">
                        <Card className="border rounded-3 shadow-sm">
                            <Card.Img variant="top" src={plan.img} className="img-fluid blur" style={{filter : "blur(5px)"}} />
                            <Button  className="position-absolute purple top-50 start-50 translate-middle">
                                <FaRegEye className="me-2" /> View Plan
                            </Button>
                            <Card.Footer className="text-center fs-2 purple text-white fw-bold">
                                {plan.title}
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FloorPlan;