import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Templates from './views/template/Template.tsx';
import TemplateInfo from "./views/templateInfo/TemplateInfo.tsx";
import OrderCart from "./views/orderCart/OrderCart.tsx";
import OrderPayment from "./views/orderPayment/OrderPayment.tsx";
import OrderConfirm from "./views/orderConfirm/OrderConfirm.tsx";
import SignIn from "./views/signIn/SignIn.tsx";
import SignUp from "./views/signUp/SignUp.tsx";
const AppRouter: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />\
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/items/:id" element={<TemplateInfo />} />
                    <Route path="/order-cart" element={<OrderCart />} />
                    <Route path="/order-payment" element={<OrderPayment />} />
                    <Route path="/order-confirm" element={<OrderConfirm />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default AppRouter;
