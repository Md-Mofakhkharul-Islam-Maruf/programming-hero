import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
    // console.log(blog.id);


    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img className='w-full h-[400px]'
                        src={blog.cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="author flex items-center justify-between my-2">
                        <h3 className='text-2xl font-bold'>{blog.author}</h3>
                        <img className="w-15 h-15 rounded-full" src={blog.author_img} alt="" />
                        <button onClick={() => handleBookMark(blog)}>
                            <FaBookmark size={30} />
                        </button>
                    </div>
                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className='hashtag flex text-xl font-medium justify-center gap-'>
                        {
                            blog.hashtag.map((tag, index) => <p key={index}>{tag}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() =>
                            handleMarkAsRead(blog.reading_time, blog.id)}>Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;