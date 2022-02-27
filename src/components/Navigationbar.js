import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigationbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Categories</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Licensing</Nav.Link>
                        <Nav.Link href="#pricing">Activity</Nav.Link>
                        <Nav.Link href="#pricing">Visa</Nav.Link>
                        <Nav.Link href="#pricing">Office</Nav.Link>
                        <Nav.Link href="#pricing">How It Works</Nav.Link>
                    </Nav>
                    <Navbar.Brand href="#home">Contact Us</Navbar.Brand>

                </Container>
            </Navbar>
        </>
    )
}

export default Navigationbar;