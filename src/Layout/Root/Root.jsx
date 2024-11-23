import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import Navbar from '../../pages/Shared/Navbar/Navbar'
import Footer from '../../pages/Shared/Footer/Footer'
const Root = () => {
    return (
        <div>
            <ToastContainer />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;