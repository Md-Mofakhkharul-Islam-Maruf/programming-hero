import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between w-11/12 items-center mx-auto'>
            <div></div>
            <div className='nav space-x-5 text-accent font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-2'>
                <img src={user} alt="" />
                <Link to='/auth/login' className='px-10 btn btn-primary'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;