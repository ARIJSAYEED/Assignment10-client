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
        <NavLink className="px-3 py-2 rounded-sm" to="/">Home</NavLink>
        <NavLink className="px-3 py-2 rounded-sm" to="/allproducts">All Products</NavLink>
        {
            user && <>
                <NavLink className="px-3 py-2 rounded-sm" to="/myexports">My Exports</NavLink>
                <NavLink className="px-3 py-2 rounded-sm" to="/myimports">My Imports</NavLink>
                <NavLink className="px-3 py-2 rounded-sm" to="/exportproducts">Export Products</NavLink>
                {/* <NavLink to="/importproducts">Import Products</NavLink> */}
            </>
        }
    </>
    return (
        <div className='sticky top-0 z-10 bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5 shadow-lg rounded-xl p-3 items-center justify-center'>
                <div className='md:col-span-3 text-center md:text-left'>
                    <h1 className='text-sm font-semibold'>Export-Import<br /><span className='text-5xl uppercase font-extrabold logotext'>Hub</span></h1>
                </div>
                <div className='md:col-span-6'>
                    <ul className='flex flex-wrap justify-center items-center gap-3 md:gap-7 text-sm'>
                        {links}
                    </ul>
                </div>
                <div className='md:col-span-3 flex flex-wrap justify-center md:justify-end gap-3 md:gap-5'>
                    {
                        user ?
                            <div className='flex justify-center md:justify-end gap-5'>
                                <div>
                                    <img className='h-10 w-10 rounded-full object-cover' src={user.photoURL} alt="" />
                                </div>
                                <button onClick={handleSignOut} className='btn btn-huboutline'>Logout</button>
                            </div>
                            :
                            <div className='flex justify-center md:justify-end gap-5'>
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