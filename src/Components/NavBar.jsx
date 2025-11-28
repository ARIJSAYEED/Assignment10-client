import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';

const NavBar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
    }


    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allproducts">All Products</NavLink>
        {
            user && <>
                <NavLink to="/myexports">My Exports</NavLink>
                <NavLink to="/myimports">My Imports</NavLink>
                <NavLink to="/exportproducts">Export Products</NavLink>
                <NavLink to="/importproducts">Import Products</NavLink>
            </>
        }
    </>
    return (
        <div className='sticky top-0 z-10 bg-white'>
            <div className='grid grid-cols-12 gap-5 shadow-lg rounded-xl p-3 items-center justify-center'>
                <div className='col-span-3'>
                    <h1 className='text-sm font-semibold'>Export-Import<br /><span className='text-5xl uppercase font-extrabold logotext'>Hub</span></h1>
                </div>
                <div className='col-span-6'>
                    <ul className='flex justify-center gap-7 text-sm'>
                        {links}
                    </ul>
                </div>
                <div className='col-span-3 flex justify-end gap-5'>
                    {
                        user ?
                            <button onClick={handleSignOut} className='btn btn-huboutline'>Logout</button>
                            :
                            <div className=' flex justify-end gap-5'>
                                <Link to='/auth/login'>
                                    <button className='btn btn-huboutline'>Login</button>
                                </Link>
                                <Link to='/auth/register'>
                                    <button className='btn btn-hubprimary'>Register</button>
                                </Link>
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;