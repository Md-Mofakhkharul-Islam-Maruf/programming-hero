import React from 'react';

const Login = () => {
    const handleGoogleSignin=()=>{
        console.log('Sign in with google')
    }
    return (
        <div>
           <h2>Please log in</h2> 
           <button onClick={handleGoogleSignin}>Sign in with Google</button>
        </div>
    );
};

export default Login;