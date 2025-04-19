const Country = ({country}) => {
    // console.log(country.name.official);
    return (
        <div className="card">
            <h3>Name: {country.name.common}</h3>
            <p>flag:</p>
            <img src={country?.flags?.png}></img>
            <p>Independent: {country.independent?'Free' : 'Not free'}</p>
            <p>Population: {country.population}</p>
        </div>
    );
};

export default Country;