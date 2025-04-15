//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <Student name="Maruf" dept="cse"></Student>
      <Teacher name='Maruf' subject="Math"></Teacher>
    </>
  )

  function Student(props){
    return(
      <div>
        <ul>
          <p>Name: {props.name}</p>
          <p>Dept: {props.dept}</p>
        </ul>
      </div>
    )
  }

  function Teacher({name, subject}){
    return(
      <div className='stl'>
        <p>Name: {name}</p>
        <p>Subject: {subject}</p>
      </div>
    )
  }
}


export default App
