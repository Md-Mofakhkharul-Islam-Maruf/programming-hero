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
      <Name></Name>
      <Developer keys='Maruf' tec='js'></Developer>
      <Developer keys='Munna' tec='python'></Developer>
      <Developer keys='Muhit' tec='Anaconda'></Developer>
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
      <div className='person'>
        <h2>Sports</h2>
        <ul>
          <li>Football</li>
          <li>Cricket</li>
          <li>High-Jump</li>
        </ul>
      </div>
    )
  }
  function Name(){
    const stl = {
      color: 'blue',
      fontSize: '32px',
    }
    return(
      <div>
        <ul style={stl}>
          <li>Maruf</li>
          <li>Munna</li>
          <li>Muhit</li>
        </ul>
      </div>
    )
  }
  
  function Developer(props){
    const stl = {
      color: 'teal',
      border: '2px solid teal',
      borderRadius:'20px',
      margin:'10px',
    }
    return(
      <div style={stl}>
        <ul>
          <li>Developer: {props.keys} </li>
          <li>Tech: {props.tec}</li>
        </ul>
      </div>
    )
  }
}

export default App
