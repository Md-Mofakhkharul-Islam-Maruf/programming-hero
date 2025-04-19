const Country = ({country}) => {
    // console.log(country.name.official);
    return (
        <div>
            <h3>Name: {country.name.common}</h3>
        </div>
    );
};

export default Country;