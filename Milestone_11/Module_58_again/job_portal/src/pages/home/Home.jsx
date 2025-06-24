import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ScaleLoader } from 'react-spinners';
import Banner from './Banner';

const Home = () => {
    const { loading } = use(AuthContext)
    return (
        <div className='min-h-screen'>
            {
                loading && <div className=' flex justify-center'><ScaleLoader color="#4557b6" barCount={5} height={50} width={20} /></div>
            }
            <Banner></Banner>
        </div>
    );
};

export default Home;