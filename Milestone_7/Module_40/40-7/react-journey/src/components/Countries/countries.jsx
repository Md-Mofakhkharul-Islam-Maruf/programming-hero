import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise)


    const [visitedCountry, setVisitedCountries]= useState([])

    const handleVisitedCountries=(country)=>{
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountries(newVisitedCountry)
    }
    return (
        <div>
            <h3>Country length: {countries.length}</h3>
            <h2>Travels so Far: {visitedCountry.length}</h2>
            <ol>
                {visitedCountry.map(country =><li key={country.cca3}>{country.name.common}</li>)}
            </ol>
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