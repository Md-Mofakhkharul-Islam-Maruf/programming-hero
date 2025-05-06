import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";


const Book = ({ singlebook }) => {
    console.log(singlebook);
    const { image, author, bookId, bookName, publisher, review, totalPages, yearOfPublishing, rating, category } = singlebook
    return (
        <div>
            <div className="card bg-base-200  shadow-sm border">
                <figure className='p-8 bg-gray-200 w-2/3 mx-auto rounded-xl my-3'>
                    <img className=' h-[170px]'
                        src={image}
                        alt="Book" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary p-4">{author}</div>
                    </h2>
                    <p>A book title plays a crucial role in setting the tone and expectations for the reader. To Kill a Mockingbird suggests a deeper</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<FaStarHalfStroke /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;