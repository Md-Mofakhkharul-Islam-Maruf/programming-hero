import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/addToDb';
import Book from '../Book/Book';

const ReadList = () => {

    const [ReadList, setReadList] = useState([])
    // console.log(ReadList)
    const data = useLoaderData()
    // console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        // console.log(storedBookData)
        const convertedStoredBookData = storedBookData.map(id => parseInt(id))
        // console.log(convertedStoredBookData)
        const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId))
        // console.log(myReadList)
        setReadList(myReadList)


    }, [])

    const [sort, setSort] = useState('')
    const handleSort = (type) => {
        setSort(type)
        if(type==='pages'){
            const sortedByPage = [...ReadList].sort((a,b)=>b.totalPages - a.totalPages)
            setReadList(sortedByPage)
        }
        if(type=== 'ratings'){
            const sortedByRating = [...ReadList].sort((a,b)=>a.rating - b.rating)
            setReadList(sortedByRating)
        }
    }
    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort by: {sort ? sort : ''}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort('pages')}><a>Pages</a></li>
                    <li onClick={() => handleSort('ratings')}><a>Rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I Read: {ReadList.length}</h2>
                    {
                        ReadList.map(boi => <Book key={boi.bookId} singlebook={boi}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;