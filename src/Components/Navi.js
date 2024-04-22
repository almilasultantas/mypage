import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
function Navi(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="maindiv">
            <Navbar
                expand="lg"
                color="faded"
                light
                style={{ padding: "1.5rem", backgroundColor: "#1F2544" }}
            >
                <NavbarBrand href="/" className="NLcolor">
                    <NavLink href="/" className="NLcolor">
                        Almıla Sultan TAŞ
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className="NBtoggle" />
                <div className="ml-auto">
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="/about" className="NLcolor">
                                    Hakkımda
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/experiences" className="NLcolor">
                                    Deneyimlerim
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" className="NLcolor">
                                    Projelerim
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact" className="NLcolor">
                                    İletişim
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Navi;
