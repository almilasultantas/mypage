import React from "react";

import {
    NavbarBrand,
    NavItem,
    NavLink,
} from "reactstrap";
import Footer from "./Footer"
import photo from "../Media/vesikalık.jpeg"

function SideBar() {

    return (
        <div className="maindiv container" style={{
            height: "90vh",
        }}>
            <div style={{ marginTop: "2.5rem" }}>
                <NavbarBrand href="/" className="NLcolor" >
                    <img
                        alt="photo"
                        src={photo}
                        style={{

                            width: "203px"
                        }}
                    />
                    <h1 className="NLcolor">
                        Almıla Sultan TAŞ
                    </h1>
                    <p style={{ fontSize: "1rem" }}>Bilgisayar Mühendisi</p>
                </NavbarBrand>
            </div>

            <div style={{ paddingTop: "0", marginTop: "0" }}>
                <NavLink href="/about" className="NLcolor sidebarMargin">
                    HAKKIMDA
                </NavLink>
                <NavLink href="/experiences" className="NLcolor sidebarMargin">
                    DENEYİMLERİM
                </NavLink>
                <NavLink href="/" className="NLcolor sidebarMargin">
                    PROJELERİM
                </NavLink>
                <NavLink href="/contact" className="NLcolor sidebarMargin">
                    İLETİŞİM
                </NavLink>
                <NavLink href="/contact" className="NLcolor sidebarMargin">
                    BLOG
                </NavLink></div>
            <Footer />
        </div>)
}

export default SideBar
