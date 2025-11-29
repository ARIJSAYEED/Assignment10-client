import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading}=use(AuthContext)
    // if (loading) {
    //     return <span className="loading loading-spinner loading-xl"></span>;
    // }
    if (user) {
        return children
    }
    return <Navigate to='/auth/login'></Navigate>
    
};

export default PrivateRoute;