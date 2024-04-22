import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
import ContactForm from "./ContactForm";
import About from "./About";
import Experiences from "./Experiences";
export default function RouterPage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/about" element={<About />} />
                <Route path="/experiences" element={<Experiences />} />
            </Routes>
        </Router>
    );
}
