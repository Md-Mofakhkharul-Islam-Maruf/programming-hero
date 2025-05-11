import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target)
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ name, email, photo, password })
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-center font-bold text-2xl mt-5'>Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input required name="name" type="text" className="input" placeholder="Name" />
                        <label className="label">Photo</label>
                        <input required name="photo" type="url" className="input" placeholder="Photo url" />
                        <label className="label">Email</label>
                        <input required name="email" type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input required name="password" type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4" type='submit'>Register</button>
                        <p className='text-center'>Already have an Account?<Link to={'/auth/login'} className=' font-bold text-red-600'> Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register; Register