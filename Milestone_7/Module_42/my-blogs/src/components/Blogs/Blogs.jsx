import React, { useEffect, useState } from 'react';
import Blog from '../blog/blog';

const Blogs = ({handleBookMark}) => {

    const[blogs, setBlogs]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setBlogs(data))
    },[])
    // console.log(blogs)
    return (
        <div className='my-5'>            
          <h3>Total Blogs: {blogs.length}</h3>
          <div className="all-blogs grid grid-cols-2 gap-20 m-10">
            {
                blogs.map(blog=><Blog blog={blog} key= {blog.id} handleBookMark={handleBookMark}></Blog>)
            }
          </div>
        </div>
    );
};

export default Blogs;