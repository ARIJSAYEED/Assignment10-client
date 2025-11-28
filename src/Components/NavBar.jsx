import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allproducts">All Products</NavLink>
        <NavLink to="/myexports">My Exports</NavLink>
        <NavLink to="/myimports">My Imports</NavLink>
        <NavLink to="/exportproducts">Export Products</NavLink>
        <NavLink to="/importproducts">Import Products</NavLink>
    </>
    return (
        <div className='sticky top-0 z-10 bg-white'>
            <div className='grid grid-cols-12 gap-5 shadow-lg rounded-xl p-3 items-center justify-center'>
                <div className='col-span-3'>
                    <h1 className='text-sm font-semibold'>Export-Import<br /><span className='text-5xl uppercase font-extrabold logotext'>Hub</span></h1>
                </div>
                <div className='col-span-6'>
                    <ul className='flex justify-center gap-5'>
                        {links}
                    </ul>
                </div>
                <div className='col-span-3 flex justify-end gap-5'>
                    <button className='btn btn-huboutline'>Login</button>
                    <button className='btn btn-hubprimary'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;