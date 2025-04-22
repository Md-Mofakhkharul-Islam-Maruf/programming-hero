import { useState } from 'react';
import './country.css'
const Country = ({ country, handleVisitedCountries }) => {
    // console.log(country.name.official);
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // setVisited(true)

        // if (visited) {
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }
        
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <p>flag:</p>
            <img src={country?.flags?.png}></img>
            <p>Independent: {country.independent ? 'Free' : 'Not free'}</p>
            <p>Population: {country.population}</p>
            <button onClick={handleVisited}>
                {
                    visited ? 'Visited' : 'Not visited'
                }
            </button>
        </div>
    );
};

export default Country;