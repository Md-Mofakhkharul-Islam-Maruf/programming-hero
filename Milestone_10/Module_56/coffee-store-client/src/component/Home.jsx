import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;