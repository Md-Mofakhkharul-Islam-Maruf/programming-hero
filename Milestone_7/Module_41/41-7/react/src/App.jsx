import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/Bottles'
const bottlesPromise = fetch('bottles.json').then(res => res.json())

function App() {
  return (
    <>
      <div>
        <h1>Hello</h1>
        <Suspense fallback={<h3>Bottles are loading...............</h3>}>
          <Bottles bottlesPromise={bottlesPromise}></Bottles>
        </Suspense>
      </div>
    </>
  )
}

export default App
