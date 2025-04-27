import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

function App() {

  const [bookmarked, setBookmarked]=useState([])

  const handleBookMark = (blog)=>{
    setBookmarked([...bookmarked, blog])
    // console.log(bookmarked)
  }

  const [readingTime, setReadingTime ]=useState(0)
  const handleReadingTime = (time)=>{
    // console.log(time)
    setReadingTime(readingTime + time)
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%] text-3xl">
          <Blogs handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}></Blogs>
        </div>

        <div className="right-container w-[30%] text-xl my-5">
          <h3>Reading Time: {readingTime}</h3>
          <h3>Bookmarked count: 0</h3>
          {
            bookmarked.map(marked=><p>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
