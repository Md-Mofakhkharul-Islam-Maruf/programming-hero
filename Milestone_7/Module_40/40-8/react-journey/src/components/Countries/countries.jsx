import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise)


    const [visitedCountry, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountries(newVisitedCountry)
    }

    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedFlag = (flag) => {
        // console.log('Flags are added', flag)
        const newvisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newvisitedFlags)
    }
    return (
        <div>
            <h2>Country length: {countries.length}</h2>
            <h2>Travels so Far: {visitedCountry.length}</h2>
            <div className='flags-container'>
                {
                    visitedFlags.map((flag, index)=><img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)}
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;