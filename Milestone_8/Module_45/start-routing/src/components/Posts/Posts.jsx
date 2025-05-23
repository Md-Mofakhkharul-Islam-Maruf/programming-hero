import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {

    const posts = useLoaderData();
    return (
        <div>
            <h2>There are my posts length: {posts.length}</h2>
            {
                posts.map(post=> <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Posts;