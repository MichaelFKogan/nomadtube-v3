import React from 'react';
import { useParams, Link } from 'react-router-dom';


function Cities({dataCities}) {

    const { continent, country, city, category } = useParams();

    return (
        <>
            <div className='cities-wrapper'>
                <Link to={`/${continent}/${country}`} className={`${country}-img background-img`} 
                    onClick={() => { document.documentElement.scrollTop = 0; }}>
                    <div>{dataCities.name}</div>
                </Link>
                {dataCities.cities.map((city, index) => (
                    <Link to={`/${continent}/${country}/${city.route}`} className={`${city.route}-img background-img`} key={index} 
                    onClick={() => { document.documentElement.scrollTop = 0; }}>
                        <div>{city.name}</div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Cities;
