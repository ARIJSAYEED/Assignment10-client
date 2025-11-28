import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    const { signInWithGoogle } = use(AuthContext)
    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                console.log('after google sign in', result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className='space-y-5 p-20 flex flex-col justify-center items-center'>
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="border border-neutral-400 rounded-lg bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">

                            {/* email  */}
                            <label className='font-semibold'>Email</label>
                            <input type="email" className="input" placeholder="Email" />

                            {/* password  */}
                            <label className='font-semibold'>Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div>
                                <p className='text-center font-semibold text-neutral-600'>or</p>
                            </div>
                            <button className='btn btn-huboutline capitalize' onClick={handleGoogleSignin}>
                                <FcGoogle></FcGoogle>
                                signin with google
                            </button>
                            <button className="btn btn-hubprimary mt-4">Login</button>
                        </fieldset>
                        <div className='text-center'>
                            <p>New to our website? <Link className='link font-semibold' to='/auth/register'>Register Now!</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;