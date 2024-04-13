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
                style={{ padding: "1.5rem", backgroundColor: "#0C2D57" }}
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
                                <NavLink href="/" className="NLcolor">
                                    Hakkımda
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/produkte" className="NLcolor">
                                    Deneyimlerim
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/kontaktseite" className="NLcolor">
                                    Projelerim
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/kontaktseite" className="NLcolor">
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
