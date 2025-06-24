import React, { use } from 'react';
import login from '../../assets/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../contexts/AuthContext';

const SignIn = () => {

    const { singInUser } = use(AuthContext);

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset()

        //sign in user

        singInUser(email, password)
            .then(result => {
                console.log(result.user)
                console.log('user sign In successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '200px' }} loop={true} animationData={login}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <h1 className="text-5xl font-bold text-center">Login</h1>
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;