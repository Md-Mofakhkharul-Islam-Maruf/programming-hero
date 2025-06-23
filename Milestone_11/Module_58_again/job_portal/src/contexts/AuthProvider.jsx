import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../pages/firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    console.log(children)
    const [loading, setLoading] =useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        loading,
        createUser,

    }
    // Authprovider muloto authcontext er value akare ei page er sob info main.jsx file a pathacche amar question holo children gulo ki kaj kore ekhane

    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;