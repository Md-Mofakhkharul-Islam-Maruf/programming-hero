//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './ToDo'
import Singers from './singers'

function App() {
  const actors = ['Bappa', 'Sunny', 'Salman Shah', 'Jashim'];
  const singers = [ 
  {id:'1', name: 'Hero Alam', age: 35 },
  {id:'2', name: 'Sonu Nigga', age:50 },
  {id:'3', name: 'Mahfuz Alam', age:65}
  ]
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
      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }
      {
        singers.map(singer =><Singers  key={singer.id} singer={singer}></Singers>
        )
      }
    </>
  )
}


export default App
