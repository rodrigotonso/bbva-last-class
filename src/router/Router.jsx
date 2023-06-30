/* This file is ignored to Prettier, more info in .pretterIgnore */
import React from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AboutUs, Home, Login, MyTransactions, History, Error404 } from "../pages";

const Router = () => {
    const ISLOGGED = false
    return (
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="about-us" element={<><AboutUs/><Outlet/></>}>
                    <Route path="history" element={<History />} />
                </Route>
                <Route path="login" element={<Login />} />
                
                {/* privateRoutes */}
                <Route path="/" element={ISLOGGED? <Outlet/> : <Navigate to='login'/>}>
                    <Route path="my-transactions" element={<MyTransactions />} />
                </Route>

                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
