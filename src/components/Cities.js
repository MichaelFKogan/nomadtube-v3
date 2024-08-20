import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Cities({dataCities}) {

    const { continent, country, city, category } = useParams();

    const scrollToTop = () => {
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
        {/* DESKTOP: Showing on Homepage, HomeCategory, Country, and CountryCategory */}
            <div className={`cities-wrapper desktop`}>
                <div className="inner-cities">

                {dataCities.cities.length === 0 ? null :
                    <Link to={`/${continent}/${country}`} className={`${country}-img background-img`} onClick={() => { scrollToTop(); }}>
                        <div>{dataCities.name}</div>
                    </Link>
                }

                    {dataCities.cities.map((item, index) => (
                        <Link to={`/${continent}/${country}/${item.route}`} className={`${item.route}-img background-img`} key={index} onClick={() => { scrollToTop(); }}>
                            <div>{item.name}</div>
                        </Link>
                    ))}
                </div>
            </div>

        {/* MOBILE: Showing on Homepage, HomeCategory, Country, and CountryCategory */}
            <div className={`cities-wrapper mobile`}>
                <div className="inner-cities marquee">
                    {city &&
                        <Link to={`/${continent}/${country}`} className={`${country}-img background-img`} onClick={() => { scrollToTop(); }}>
                            <div>{dataCities.name}</div>
                        </Link>
                    }
                    {dataCities.cities.map((item, index) => (
                        city === item.route ? (null) : (
                        <Link to={`/${continent}/${country}/${item.route}`} className={`${item.route}-img background-img`} key={index} onClick={() => { scrollToTop(); }}>
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
