import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    const { signInWithGoogle, signInUser } = use(AuthContext)

    const handleSignIn = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        
        signInUser(email, password)
            .then(result => {
                alert('logged in successfully')
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
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
            <div className='space-y-5 p-5 md:p-20 flex flex-col justify-center items-center'>
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>
                </div>
                <div className="border border-neutral-400 rounded-lg bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body p-5 md:p-8">
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset space-y-3">

                                {/* email  */}
                                <div>
                                    <label className='font-semibold text-sm md:text-base'>Email</label>
                                    <input type="email" name='email' className="input w-full" placeholder="Email" />
                                </div>

                                {/* password  */}
                                <div>
                                    <label className='font-semibold text-sm md:text-base'>Password</label>
                                    <input type="password" name='password' className="input w-full" placeholder="Password" />
                                </div>
                                
                                <div>
                                    <p className='text-center font-semibold text-neutral-600 text-sm'>or</p>
                                </div>
                                
                                <button type="button" className='btn btn-huboutline capitalize w-full text-sm md:text-base' onClick={handleGoogleSignin}>
                                    <FcGoogle className="text-xl"/>
                                    signin with google
                                </button>
                                
                                <button type="submit" className="btn btn-hubprimary w-full text-sm md:text-base">Login</button>
                            </fieldset>
                        </form>
                        <div className='text-center mt-3'>
                            <p className='text-sm md:text-base'>New to our website? <Link className='link font-semibold' to='/auth/register'>Register Now!</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;