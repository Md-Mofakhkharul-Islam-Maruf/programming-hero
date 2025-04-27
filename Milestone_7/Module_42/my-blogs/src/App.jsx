import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

function App() {

  const [bookmarked, setBookmarked] = useState([])

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog])
    // console.log(bookmarked)
  }

  const [readingTime, setReadingTime] = useState(0)
  const handleMarkAsRead = (time, id) => {
    // console.log(time)
    // console.log(id)
    setReadingTime(readingTime + time)
    handleRemoveFromBookmark(id)
  }

  const handleRemoveFromBookmark = (id) => {
    const reaminingBookMark = bookmarked.filter(mark => mark.id !== id)
    setBookmarked(reaminingBookMark)
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%] text-3xl">
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>

        <div className="right-container w-[30%] text-xl my-5">
          <h3>Reading Time: {readingTime}</h3>
          <h3>Bookmarked count: {bookmarked.length}</h3>
          {
            bookmarked.map((marked, index) => <p className='bg-red-600 text-white py-2 font-medium my-2' key={index}>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
