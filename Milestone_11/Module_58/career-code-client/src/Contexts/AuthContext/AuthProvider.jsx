import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [loading, setLoding] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = ()=>{
        setLoding(true);
        return signInWithPopup(auth, googleProvider)
    }
    const signOutUser = () => {
        setLoding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoding(false)
            currentUser ? console.log('User in authstate change ', currentUser) : console.log('There is no current User')
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;