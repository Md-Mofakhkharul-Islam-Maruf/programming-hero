import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import login from '../assets/login.json'
import Lottie from 'lottie-react';
import SocialLogin from './Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {

    const {signInUser} = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state || '/'

    console.log('location in signin page', location)

    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value;
        console.log(email, password)

        // set user
        signInUser(email, password)
            .then((result) => {
                console.log(result)
                navigate(from)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={login} style={{ width: '300px' }} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign In</h1>
                        <form action="" onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign In</button>
                            </fieldset>
                        </form>
                        <SocialLogin from={from}></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;