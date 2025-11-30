import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AuthLayout;