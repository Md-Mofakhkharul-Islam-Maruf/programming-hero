import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.config';
const Login = () => {

    const provider = new GoogleAuthProvider();


    const handleGoogleSignin = () => {
        console.log('Sign in with google')

        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
 
    }
    return (
        <div>
            <h2>Please log in</h2>
            <button onClick={handleGoogleSignin}>Sign in with Google</button>
        </div>
    );
};

export default Login;