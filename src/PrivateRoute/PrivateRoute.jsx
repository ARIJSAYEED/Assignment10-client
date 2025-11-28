import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user}=use(AuthContext)

    if (user) {
        return children
    }
    return <Navigate to='/auth/login'></Navigate>
    
};

export default PrivateRoute;