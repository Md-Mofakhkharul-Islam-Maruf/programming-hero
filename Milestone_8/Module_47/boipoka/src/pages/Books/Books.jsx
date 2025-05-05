// import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    // const [allBooks, setAllBooks]= useState([])
    // console.log(data);
    
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setAllBooks(data)
    //     })
    // },[])
    return (
        <div>
            <Suspense fallback={'Loading..............'}>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
                data.map(singlebook=><Book singlebook={singlebook} key={singlebook.bookId}></Book>)
            }
           </div>
            </Suspense>
        </div>
    );
};

export default Books;