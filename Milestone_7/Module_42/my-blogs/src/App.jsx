import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%] text-3xl">
          <Blogs></Blogs>
        </div>

        <div className="right-container w-[30%] text-xl">
          <h3>Reading Time: 0</h3>
          <h3>Bookmarked count: 0</h3>
        </div>
      </div>
    </>
  )
}

export default App
