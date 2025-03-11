import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import qrcode from '../../assets/qrcode.jpg';

const Footer = () => {
    return (
        <div className="bg-light py-4">
            <Container>
                <Row className="text-center">
                    <Col>
                        <Image src={qrcode} alt="QR Code" width={100} className="mb-3" />
                        <p className="fw-bold mb-0">Aurthorize Channel Partner : <span className="fw-normal">A53000023809</span> | Project Rera No : <span className="fw-normal">P52100079533</span></p>
                        <p className="mt-2">
                            <strong>Disclaimer -</strong> The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed.
                        </p>
                        <p className="fw-bold">Read More</p>
                        <a style={{color : "black", textDecoration :"none"}} href='https://www.termsfeed.com/live/67d53f87-c6a6-46fd-849d-13ec4e8b34fb' target='_blank'>Disclaimer & Privacy Policy</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
