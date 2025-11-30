import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, signInWithGoogle, updateUser, setUser } = use(AuthContext)

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        // Password validation regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long');
            return;
        }

        createUser(email, password)
            .then(result => {
                let user = result.user;
                toast('your account has been created successfully', result.user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className='space-y-5 p-5 md:p-10 flex flex-col justify-center items-center'>
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold logotext py-1">Register now!</h1>
                </div>
                <div className="border border-neutral-400 rounded-lg bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body p-5 md:p-8">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset space-y-3">

                                {/* name  */}
                                <div>
                                    <label className='font-semibold text-sm md:text-base'>Name</label>
                                    <input type="text" name='name' className="input w-full" placeholder="Enter your name" />
                                </div>

                                {/* email  */}
                                <div>
                                    <label className='font-semibold text-sm md:text-base'>Email</label>
                                    <input type="email" name='email' className="input w-full" placeholder="Enter your email" />
                                </div>

                                {/* photo url  */}
                                <div>
                                    <label className='font-semibold text-sm md:text-base'>Photo URL</label>
                                    <input type="text" name='photo' className="input w-full" placeholder="Paste your photo url" />
                                </div>

                                {/* password  */}
                                <div>
                                    <label className='font-semibold text-sm md:text-base'>Password</label>
                                    <input type="password" name='password' className="input w-full" placeholder="Password" />
                                    <p className='text-xs text-neutral-500 mt-1'>
                                        Must contain uppercase, lowercase, and be at least 6 characters
                                    </p>
                                </div>
                                <div>
                                    <p className='link'>Forgot password</p>
                                </div>
                                <div>
                                    <p className='text-center font-semibold text-neutral-600 text-sm'>or</p>
                                </div>

                                <button type="button" onClick={handleGoogleSignin} className='btn btn-huboutline capitalize w-full text-sm md:text-base'>
                                    <FcGoogle className="text-xl" />
                                    signin with google
                                </button>

                                <button type="submit" className="btn btn-hubprimary w-full text-sm md:text-base">Register</button>
                            </fieldset>
                        </form>
                        <div className='text-center mt-3'>
                            <p className='text-sm md:text-base'>Already have an account? <Link className='link font-semibold' to='/auth/login'>Login Now!</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;