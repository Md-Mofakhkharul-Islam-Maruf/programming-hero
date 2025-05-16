import './App.css'
import Users from './component/users'

const promise = fetch("http://localhost:3000/users").then(res=>res.json())

function App() {

  return (
    <>
        <h1>Simple CRUD operation</h1>
        <Users promise={promise}></Users>
    </>
  )
}

export default App
