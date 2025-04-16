import { Suspense } from 'react'
import './App.css'
import Users from './Users'
import Friends from './friends'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

function App() {
const friends = fetchFriends();
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Amar sonar Bangla</h3>}>
        <Users fetchUser={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are comming for treats</h3>}>
        <Friends friends={friends}></Friends>
      </Suspense>
    </>
  )
}

export default App
