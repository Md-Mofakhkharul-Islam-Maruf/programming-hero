import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {

    const {name, email, phone, id}= user
    const userStyle ={
        border: '2px solid red',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }

    const [showInfo, setShowInfo]= useState(false)
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const [takeHome, setTakeHome]= useState(false)
    // return takeHome && <Navigate to='/' />;
    if(takeHome){
        return <Navigate to='/'></Navigate>
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><small> phone: {phone}</small></p>
            <Link to={`/users2/${id}`}>Show details</Link>
            <button onClick={()=> setShowInfo(!showInfo)}>{showInfo? 'Hide' : 'Show'}</button>
            {
                showInfo && <Suspense fallback={'loading.........'}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={()=> setTakeHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;