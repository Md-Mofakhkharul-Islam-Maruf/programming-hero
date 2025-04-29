import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    // console.log(user)
    const {website, name }= user;
    return (
        <div>
            <h3>Users details nice</h3>
            <h4>Name: {name}</h4>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;