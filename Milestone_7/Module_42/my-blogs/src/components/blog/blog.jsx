import React from 'react';

const Blog = ({ blog }) => {
    console.log(blog.id);


    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img className='w-full h-[400px]'
                        src={blog.cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;