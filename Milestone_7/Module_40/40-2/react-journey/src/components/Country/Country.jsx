const Country = ({country}) => {
    // console.log(country.name.official);
    return (
        <div className="card">
            <h3>Name: {country.name.common}</h3>
        </div>
    );
};

export default Country;