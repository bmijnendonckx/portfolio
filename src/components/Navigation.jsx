import React from 'react'
import { Navbar, Nav } from 'react-bootstrap/lib'

const Navigation = ({isTop}) => {
    return <Navbar variant="dark" expand="md" fixed="top" style={{ backgroundColor: isTop ? "inherit" : "#008E9E" }}>
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item>
                    <Nav.Link className="mr-3" href="#about">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="mr-3" href="#skills">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="mr-3" href="#portfolio">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="mr-3" href="#contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Navigation