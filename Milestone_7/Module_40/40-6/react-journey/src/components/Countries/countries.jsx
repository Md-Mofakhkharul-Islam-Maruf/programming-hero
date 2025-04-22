import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise)
    const [visitedCountry, setVisitedCountries]= useState([])
    const handleVisitedCountries=(country)=>{
        console.log('Country visited',country)
    }
    return (
        <div>
            <h3>Country length: {countries.length}</h3>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        country={country} 
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;