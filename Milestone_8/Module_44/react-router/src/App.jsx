import React, { Suspense } from 'react';
import Nav from './Components/Nav/Nav';
import Navbar from './Components/Navbar/Navbar';
import PricingOptions from './Components/PricingOptions/PricingOptions';

const App = () => {
  const pricingPromise = fetch('pricingData.json').then(res => res.json())
  return (
    <div>
      {/* <h1 className='text-9xl font-bold'>Bangladesh</h1> */}
      {/* <Nav></Nav> */}
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
    </div>
  );
};

export default App;