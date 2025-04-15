//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'

function App() {
  const time =50;
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
      <ToDo task='learn React' isDone={true} time={time}></ToDo>
      <ToDo task='Revise js' isDone={false}></ToDo>
      <ToDo task='Ha Hutas' isDone={true} time='Always'></ToDo>
    </>
  )

  // function Student(props){
  //   return(
  //     <div>
  //       <ul>
  //         <p>Name: {props.name}</p>
  //         <p>Dept: {props.dept}</p>
  //       </ul>
  //     </div>
  //   )
  // }

  // function Teacher({name, subject}){
  //   return(
  //     <div className='stl'>
  //       <p>Name: {name}</p>
  //       <p>Subject: {subject}</p>
  //     </div>
  //   )
  // }
}


export default App
