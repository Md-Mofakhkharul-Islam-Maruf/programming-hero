import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='w-11/12 mx-auto flex items-center gap-3 bg-base-200 p-2'>
            <p className='text-white bg-secondary p-2'>Latest</p>
            <Marquee pauseOnHover={true} speed='50'>
                <p className='font-medium text-accent'>An ideal newspaper provides accurate news, unbiased opinions, timely updates, engaging articles, clear headlines, and trusted sources to inform and educate readers.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;