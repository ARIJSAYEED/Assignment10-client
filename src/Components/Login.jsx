import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signInWithGoogle } = use(AuthContext)
    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                console.log('after google sign in',result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div></div>
            <div>
                <button className='btn btn-huboutline capitalize' onClick={handleGoogleSignin}>
                    <FcGoogle></FcGoogle> 
                    signin with google
                </button>
            </div>
        </div>
    );
};

export default Login;