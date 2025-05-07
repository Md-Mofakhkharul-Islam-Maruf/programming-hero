import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utilities/addToDb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams()
    const newId = parseInt(id)

    const data = useLoaderData()
    // console.log(data)
    const singleBook = data.find(book => book.bookId === newId)
    // console.log(newId, singleBook)
    const { image, author, bookId, bookName, publisher, review, totalPages, yearOfPublishing, rating, category, tags } = singleBook;

    const handleMarkAsRead = (id) => {

        Swal.fire({
            title: "Good Job....",
            icon: "success",
            text: 'Mark as read',
            draggable: true
        });

        toast("Wow so easy!");

        addToStoredDB(id)
        
    }

    return (
        <div className='flex gap-10 justify-center'>
            <div>
                <img className='h-[400px]' src={image} alt="" />
                <div className='flex justify-center gap-10 my-5'>
                    <button onClick={() => handleMarkAsRead(id)} className='px-6 py-3 bg-blue-500 text-white rounded'>Mark as read</button>
                    <button className='px-6 py-3 bg-gray-500 text-white rounded'>Add to Wishlist</button>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='text-5xl font-bold'>{author}</h2>
                <p>{bookId}</p>
                <p>{publisher}</p>
                <p>{totalPages}</p>
                <p>{yearOfPublishing}</p>
                <p>{tags}</p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BookDetails;