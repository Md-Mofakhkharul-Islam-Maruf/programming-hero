import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-center font-bold text-2xl mt-5'>Login your account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                        <label className="label">Photo</label>
                        <input type="url" className="input" placeholder="Photo url" />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Login</button> 
                        <p className='text-center'>Already have an Account?<Link to={'/auth/login'} className=' font-bold text-red-600'> Login</Link></p>
                    </fieldset>
                </div>  
            </div>
        </div>
    );
};

export default Register; Register