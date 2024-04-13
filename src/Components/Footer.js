import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavLink, Row, Col } from "reactstrap";
import "../CSS/Main.css"

function Footer(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar
                expand="lg"
                dark
                style={{

                    backgroundColor: "#0C2D57",
                    flexDirection: "column",
                    padding: "0.5rem 1rem",
                }}
            >
                <NavbarToggler onClick={toggle} className="NBtoggle" />

                <Collapse isOpen={isOpen} navbar>
                    <Row style={{
                        width: "100%"
                    }}>
                        <Col md="4" sm="12">
                            <NavLink href="/" className="centered NLcolor">
                                Über Uns1
                            </NavLink>
                            <NavLink href="/" className="centered NLcolor">
                                Über Uns1
                            </NavLink>
                        </Col>
                        <Col md="4" sm="12">
                            <NavLink href="/" className="centered NLcolor">
                                Produkte1
                            </NavLink>
                            <NavLink href="/" className="centered NLcolor">
                                Produkte2
                            </NavLink>
                            <NavLink href="/" className="centered NLcolor">
                                Produkte3
                            </NavLink>
                        </Col>
                        <Col md="4" sm="12">
                            <NavLink href="/" className="centered NLcolor">
                                Kontaktseite1
                            </NavLink>
                            <NavLink href="/" className="centered NLcolor">
                                Kontaktseite2
                            </NavLink>
                            <NavLink href="/" className="centered NLcolor">
                                Kontaktseite3
                            </NavLink>
                        </Col>
                    </Row>
                </Collapse>
            </Navbar>

        </div>
    );
}

export default Footer;
