import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs, Home, Login, MyTransactions, History, Error404 } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about-us" element={<AboutUs />}>
                    <Route path="history" element={<History />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="my-transactions" element={<MyTransactions />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
