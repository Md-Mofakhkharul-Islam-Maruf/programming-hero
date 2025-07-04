import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../pages/firebase/Firebase.init';

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)    
    }
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log('User in the authState: ', currentUser)
        })
        // return unSubscribe()
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        loading,
        user,
        createUser,
        singInUser,
        logOut

    }
    // Authprovider muloto authcontext er value akare ei page er sob info main.jsx file a pathacche amar question holo children gulo ki kaj kore ekhane

    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;