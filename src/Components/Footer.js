import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavLink, Row, Col } from "reactstrap";
import "../CSS/Main.css"
import { FaAt, FaLinkedin, FaGithub } from "react-icons/fa";
function Footer(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div style={{
            position: "fixed",
            bottom: "0"
        }}>
            <Navbar
                expand="lg"
                color="faded"
                light
                style={{
                    flexDirection: "column",
                    padding: "1rem 1rem",
                }}
            >
                <NavbarToggler onClick={toggle} className="NBtoggle" />

                <Collapse isOpen={isOpen} navbar>
                    <Row style={{
                        width: "100%"
                    }}>
                        <Col md="4" sm="12">
                            <NavLink href="/contact" className="centered NLcolor">
                                <FaAt size="2rem" />
                            </NavLink>
                        </Col>
                        <Col md="4" sm="12">
                            <NavLink href="https://www.linkedin.com/in/almilasultantas/" title="LinkedIn Profilim" rel="nofollow" target="_blank" className="centered NLcolor">
                                <FaLinkedin size="2rem" />
                            </NavLink>
                        </Col>
                        <Col md="4" sm="12">
                            <NavLink href="https://github.com/almilasultantas" title="GitHub Profilim" rel="nofollow" target="_blank" className="centered NLcolor">
                                <FaGithub size="2rem" />
                            </NavLink>

                        </Col>
                    </Row>
                </Collapse>
            </Navbar>

        </div>
    );
}

export default Footer;
