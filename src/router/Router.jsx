import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs, Home, Login, MyTransactions } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="Login" element={<Login />} />
                <Route path="MyTransactions" element={<MyTransactions />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
