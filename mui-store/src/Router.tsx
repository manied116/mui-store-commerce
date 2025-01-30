import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Templates from './views/templates/TemplateList.tsx'
const AppRouter: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />\
                    <Route path="/templates" element={<Templates />} />\
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default AppRouter;
