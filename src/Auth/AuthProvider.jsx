import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from './firebase.config';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log('in the state the user is', user);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('this is the current user', currentUser);
            // setLoading(false);
            return () => {
                unsubscribe();
            }
        })
    }, [])

    const authInfo = {
        signInWithGoogle,
        user,
        setUser,
        signOutUser,
        loading,
    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;