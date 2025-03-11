import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapSec = () => {
    const locations = [
        "Shivaji Nagar - 1.6 Km",
        "Boat Club - 2.5 Km",
        "Koregaon Park - 3.4 Km",
        "Mangalwar Peth Metro Station - 2 Min",
        "Pune Railway Station - 5 Min",
        "Pune International Airport – 15 Min",
        "Old Mumbai Pune Highway - 10 Min",
    ];

    return (
        <Container fluid className="py-5 bg-light">
            <Row className="align-items-center">
                {/* Google Maps Iframe */}
                <Col md={6} className="p-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.758797553778!2d73.8559659!3d18.5308398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07e4f63b735%3A0x9f476aee9dbe6495!2sBirla%20Estate!5e0!3m2!1sen!2sin!4v1647934406852!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Col>

                {/* Locations List */}
                <Col md={6} className="p-4">
                    <h3 className="text-purple fw-bold">
                        Location
                        <span className="ms-2" style={{ borderBottom: '3px solid #6A1B9A', width: '50px', display: 'inline-block' }}></span>
                    </h3>
                    <h2 className="mb-4">Perfectly Positioned: Discover Our Ideal Locations</h2>
                    <ul className="list-unstyled">
                        {locations.map((location, index) => (
                            <li key={index} className="d-flex border-bottom border-secondary pb-2 align-items-center mb-3">
                                <FaMapMarkerAlt className="me-2 text-purple" />
                                {location}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default MapSec;