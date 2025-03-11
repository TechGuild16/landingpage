import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaHome, FaRupeeSign, FaProjectDiagram, FaWifi, FaImages, FaMapMarkerAlt, FaFileDownload, FaPhoneAlt } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.jpg";
import dellogo from '../../assets/developer-logo.png'
const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm sticky-top">
      <Container>
        <Navbar.Brand className="fw-bold borderno border-end border-secondary pe-3">
          <img src={logo} width={220} alt="Logo" className="hiddeninmobile" />
          <img src={dellogo} width={140} alt="" className="hiddenindek" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content" className="justify-content-between">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home" className="border-end border-secondary"><FaHome /> Home</Nav.Link>
            <Nav.Link href="#price" className="border-end border-secondary"><FaRupeeSign /> Price</Nav.Link>
            <Nav.Link href="#floor-plan" className="border-end border-secondary"><FaProjectDiagram /> Floor Plan</Nav.Link>
            <Nav.Link href="#amenities" className="border-end border-secondary"><FaWifi /> Amenities</Nav.Link>
            <Nav.Link href="#gallery" className="border-end border-secondary"><FaImages /> Gallery</Nav.Link>
            <Nav.Link href="#location" className="border-end border-secondary"><FaMapMarkerAlt /> Location</Nav.Link>
            <Nav.Link href="#virtual-tour" className=""><BsPlayCircle /> Virtual Site Tour</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">

            <Button href="#brochure" className="brochure-btn mx-1">
              <FaFileDownload className="icon-bounce" /> Brochure
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
