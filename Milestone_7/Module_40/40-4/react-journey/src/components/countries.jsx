import React, { use } from 'react';
import Country from './Country/Country';
import '../components/countries.css';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise)
    console.log(countries)
    return (
        <div>
            <h3>Country length: {countries.length}</h3>
            <div className='countries'>
                {
                    countries.map(country => <Country country={country} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;