import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const {name, email, phone, id}= user
    const userStyle ={
        border: '2px solid red',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><small> phone: {phone}</small></p>
            <Link to={`/users2/${id}`}>Show details</Link>
        </div>
    );
};

export default User;