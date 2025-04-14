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
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
    </>
  )
  function Person() {
    const name = 'Maruf';
    const age = 25;
    return (<>
      <p>My name is {name}</p>
      <p>I am {age} years old</p>
    </>
    )
  }

  function Sports() {
    return (
      <div>
        <h2>Sports</h2>
        <ul>
          <li>Football</li>
          <li>Cricket</li>
          <li>High-Jump</li>
        </ul>
      </div>
    )
  }
}

export default App
