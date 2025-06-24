import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ScaleLoader } from 'react-spinners';

const Home = () => {
    const { loading } = use(AuthContext)
    return (
        <div className='min-h-screen'>
            This is homepage
            {
                loading && <div className=' flex justify-center'><ScaleLoader color="#4557b6" barCount={5} height={50} width={20} /></div>
            }
        </div>
    );
};

export default Home;