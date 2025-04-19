import './country.css'
const Country = ({country}) => {
    // console.log(country.name.official);
    const handleVisited=()=>{
        console.log('visited')
    }
    return (
        <div className="country">
            <h3>Name: {country.name.common}</h3>
            <p>flag:</p>
            <img src={country?.flags?.png}></img>
            <p>Independent: {country.independent?'Free' : 'Not free'}</p>
            <p>Population: {country.population}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;