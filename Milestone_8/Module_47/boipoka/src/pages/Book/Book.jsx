import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';


const Book = ({ singlebook }) => {
    console.log(singlebook);
    const { image, author, bookId, bookName, publisher, review, totalPages, yearOfPublishing, rating, category, tags } = singlebook
    return (
        <Link to={`bookDetails/${bookId}`}>
            <div>
                <div className="card bg-base-200  shadow-sm border">
                    <figure className='p-8 bg-gray-200 w-2/3 mx-auto rounded-xl my-3'>
                        <img className=' h-[170px]'
                            src={image}
                            alt="Book" />
                    </figure>
                    <div className='flex justify-around font-semibold text-blue-400'>
                        {
                            tags.map(btn => <p>{btn}</p>)
                        }
                    </div>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            {bookName}
                            <div className="badge badge-secondary">{yearOfPublishing}</div>
                        </h2>
                        <p>Booked by: {publisher}</p>
                        <div className='border-t-2 border-dotted'></div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{category}</div>
                            <div className="badge badge-outline">{rating}<FaStarHalfStroke /></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    );
};

export default Book;