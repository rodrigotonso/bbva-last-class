/* This file is ignored to Prettier, more info in .pretterIgnore */
import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AboutUs, Home, Login, MyTransactions, History, Error404 } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about-us" element={<><AboutUs/><Outlet/></>}>
                    <Route path="about-us/history" element={<History />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="my-transactions" element={<MyTransactions />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
