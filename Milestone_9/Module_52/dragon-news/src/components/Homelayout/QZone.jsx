import React from 'react';
import swimming from '../../assets/swimming.png';
import classp from '../../assets/class.png';
import play from '../../assets/playground.png';
const QZone = () => {
    return (
        <div className='bg-base-200'>
            <h2 className='font-bold my-5 p-5'>QZone</h2>
            <div className='space-y-5'>
                <img className='w-full' src={swimming}alt="" />
                <img  className='w-full' src={classp} alt="" />
                <img  className='w-full' src={play} alt="" />
            </div>
        </div>
    );
};

export default QZone;