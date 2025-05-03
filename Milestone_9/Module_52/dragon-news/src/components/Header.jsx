import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';


const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 my-10'>
            <img className='w-[400px]' src={logo}/>
            <p className='text-accent'>Journalism Without Fear or Favout</p>
            <p className='font-semibold text-accent'>{format(new Date(), 'eeee, LLLL dd yyyy')}</p>
        </div>
    );
};

export default Header;