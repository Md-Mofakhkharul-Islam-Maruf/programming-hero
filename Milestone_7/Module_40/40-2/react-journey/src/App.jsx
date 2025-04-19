import './App.css'
import Countries from './components/countries'
import React, { Suspense } from 'react';

function App() {
  const countriesPromise = fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
  return (
    <>
      <Suspense fallback='Country loading...........'>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
