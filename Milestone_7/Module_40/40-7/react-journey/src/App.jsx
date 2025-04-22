import './App.css'
import Countries from './components/Countries/countries';
import React, { Suspense } from 'react';

function App() {
  const countriesPromise = fetch('/data.json')
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
