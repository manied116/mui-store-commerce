import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Templates from './views/template/Template.tsx';
import TemplateInfo from "./views/templateInfo/TemplateInfo.tsx";
const AppRouter: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />\
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/item/:id" element={<TemplateInfo />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default AppRouter;
