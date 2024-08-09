import React from 'react';
import { useParams, Link } from 'react-router-dom';


function Cities({dataCities}) {

    const { continent, country, city, category } = useParams();

    console.log(dataCities.name);
    console.log(country)

    return (
        <>
            <div className='cities-wrapper'>
                {city &&
                    <Link to={`/${continent}/${country}`} className={`${country}-img background-img`} 
                        onClick={() => { document.documentElement.scrollTop = 0; }}>
                        <div>{dataCities.name}</div>
                    </Link>
                }
                {dataCities.cities.map((item, index) => (
                    city === item.route ? (null) : ( 
                    <Link to={`/${continent}/${country}/${item.route}`} className={`${item.route}-img background-img`} key={index} 
                    onClick={() => { document.documentElement.scrollTop = 0; }}>
                        <div>{item.name}</div>
                    </Link>
                    )
                ))}
            </div>
        </>
    );
}

export default Cities;
