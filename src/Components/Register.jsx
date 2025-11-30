import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';

const Register = () => {
    const {createUser,signInWithGoogle}=use(AuthContext)

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                console.log('after google sign in', result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        const name =e.target.name.value;
        const email =e.target.email.value;
        const photo =e.target.photo.value;
        const password =e.target.password.value;

        console.log(name,email,photo,password);

        createUser(email,password)
        .then(result=>{
            alert('your account has been created successfully',result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className='space-y-5 p-10 flex flex-col justify-center items-center'>
                <div className="text-center">
                    <h1 className="text-5xl font-bold logotext">Register now!</h1>
                </div>
                <div className="border border-neutral-400 rounded-lg bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form  onSubmit={handleRegister}>
                            <fieldset className="fieldset">

                                {/* name  */}
                                <label className='font-semibold'>Name</label>
                                <input type="text" name='name' className="input" placeholder="Enter your name" />

                                {/* email  */}
                                <label className='font-semibold'>Email</label>
                                <input type="email" name='email' className="input" placeholder="Enter your email" />

                                {/* photo url  */}
                                <label className='font-semibold'>Photo URL</label>
                                <input type="text" name='photo' className="input" placeholder="Paste your photo url" />

                                {/* password  */}
                                <label className='font-semibold'>Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div>
                                    <p className='text-center font-semibold text-neutral-600'>or</p>
                                </div>
                                <button onClick={handleGoogleSignin} className='btn btn-huboutline capitalize'>
                                    <FcGoogle></FcGoogle>
                                    signin with google
                                </button>
                                <button className="btn btn-hubprimary mt-4">Register</button>
                            </fieldset>
                        </form>
                        <div className='text-center'>
                            <p>New to our website? <Link className='link font-semibold' to='/auth/login'>Login Now!</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;