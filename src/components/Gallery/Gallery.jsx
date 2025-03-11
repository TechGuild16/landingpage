import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';

const Gallery = () => {
    const galleryImages = [gallery1, gallery2, gallery3, gallery4];

    return (
        <Container className="py-5">
            <h3 className="text-purple fw-bold">
                Gallery 
                <span 
                    className="ms-2" 
                    style={{ borderBottom: '3px solid #6A1B9A', width: '50px', display: 'inline-block' }}
                ></span>
            </h3>
            <h2 className="mb-4">Discover Your Dream Home: Explore Our Stunning Gallery</h2>

            <Row className="d-flex flex-wrap g-4 py-3">
                {galleryImages.map((image, index) => (
                    <Col key={index} md={4} sm={6}>
                        <Card className="shadow-sm border-0 rounded-4">
                            <Card.Img 
                                variant="top" 
                                src={image} 
                                className="rounded-4"
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Gallery;
