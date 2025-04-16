import { Suspense } from 'react'
import './App.css'
import Friends from './friends'
import Posts from './posts'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

  const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=> res.json())

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Suspense fallback={<h3>Amar sonar Bangla</h3>}>
        <Friends fetchUser={fetchUsers}></Friends>
      </Suspense> */}

      <Suspense fallback={<h4>Loading data</h4>}>
        <Posts fetchPosts={fetchPosts}></Posts>
      </Suspense>
    </>
  )
}

export default App
