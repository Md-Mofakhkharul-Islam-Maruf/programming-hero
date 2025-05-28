import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, GithubAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.config';

const Login = () => {
    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();


    const handleGoogleSignin = () => {
        console.log('Sign in with google')

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handleGoogleSignOut = () => {
        console.log('sign Out successfully')

        const auth = getAuth();
        signOut(auth).then(() => {
            setUser(null)
        }).catch((error) => {
            console.log(error)
        });

    }
    const handleGithubSignin = () => {

        const auth = getAuth();

        signInWithPopup(auth, GithubProvider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            }).catch((error) => {
                console.log(error)
            });
    }
    return (
        <div>
            <h2>Please log in</h2>
            {
                user ?
                    <button onClick={handleGoogleSignOut}>Sign Out</button> :
                    <>
                        <button onClick={handleGoogleSignin}>Sign in with Google</button>
                        <button onClick={handleGithubSignin}>Sign in with Github</button>
                    </>
            }
            {
                user && (
                    <div>
                        <h2>UserName is: {user?.displayName}</h2>
                        <h2>User Email is: {user?.email}</h2>
                        <h2>User Photo is: </h2>
                        <img src={user?.photoURL} referrerPolicy='no-referrer' alt="" />
                    </div>
                )
            }

        </div>
    );
};

export default Login;