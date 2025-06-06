import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate();
    return (
        <div>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
            <button onClick={()=> navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetails;