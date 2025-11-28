import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from './firebase.config';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null)
    console.log('in the state the user is',user);
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log('this is the current user',currentUser);
            return ()=>{
                unsubscribe()
            }
        })
    },[])

    const authInfo = {
        signInWithGoogle,
        user,
        setUser,
    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;