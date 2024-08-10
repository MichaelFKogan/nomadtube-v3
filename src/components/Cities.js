import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Cities({dataCities, className}) {

    const { continent, country, city, category } = useParams();

    return (
        <>
            <div className={`cities-wrapper ${className}`}>
                <div className="inner-cities">
                    {city &&
                        <Link to={`/${continent}/${country}`} className={`${country}-img background-img`}>
                            <div>{dataCities.name}</div>
                        </Link>
                    }
                    {dataCities.cities.map((item, index) => (
                        city === item.route ? (null) : (
                        <Link to={`/${continent}/${country}/${item.route}`} className={`${item.route}-img background-img`} key={index}>
                            <div>{item.name}</div>
                        </Link>
                        )
                    ))}
                </div>
            </div>
        </>
    );
}

export default Cities;
