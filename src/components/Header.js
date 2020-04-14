import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import AOS from 'aos';
import {
    Link
} from 'react-router-dom';
const Header = () => {
    AOS.init();

    return (
        <Navbar bg="transparent" expand="lg" id="siteNav">
            <Navbar.Brand><Link to="/">Timothy Lukau</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/Creative">Creative</Link></Nav.Link>
                    <Nav.Link><Link to="/Press">Press</Link></Nav.Link>
                    <Nav.Link href="./Assets/resume.pdf">Resume</Nav.Link>
                    <Nav.Link href="https://github.com/mothydula">Github</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header