import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate =useNavigate()
    const handleNavigate = () => {
        navigate('/mobiles')
    }
    return (
        <div style={{ border: '2px solid green', margin: '5px' }}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
                <button>Show details</button>
            </Link>
            <button onClick={handleNavigate}>Details of: {id}</button>
        </div>
    );
};

export default Post;