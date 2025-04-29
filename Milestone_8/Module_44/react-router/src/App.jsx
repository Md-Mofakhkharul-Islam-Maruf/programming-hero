import React, { Suspense } from 'react';
import Nav from './Components/Nav/Nav';
import Navbar from './Components/Navbar/Navbar';
import PricingOptions from './Components/PricingOptions/PricingOptions';
import ResultsChart from './Components/ResultCharts/ResultsChart';
import MarksCharts from './Components/MarksCharts/MarksCharts';
import axios from 'axios';

const App = () => {
  const pricingPromise = fetch('pricingData.json').then(res => res.json())
  const MarksPromise = axios.get('marksData.json')
  return (
    <div>
      {/* <h1 className='text-9xl font-bold'>Bangladesh</h1> */}
      {/* <Nav></Nav> */}
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <Suspense fallback={'Waiting for marks'}>
        <MarksCharts MarksPromise={MarksPromise}></MarksCharts>
      </Suspense>
      <ResultsChart></ResultsChart>


    </div>
  );
};

export default App;