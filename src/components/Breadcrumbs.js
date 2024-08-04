import React from 'react';
import { useParams, Link } from 'react-router-dom';
import  "../styles/breadcrumbs.css"

function Breadcrumbs() {
    const { continent, country, city, category } = useParams();

    const capitalizedContinent = continent.charAt(0).toUpperCase() + continent.slice(1);
    const capitalizedCountry = country ? country.charAt(0).toUpperCase() + country.slice(1) : '';
    const capitalizedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';
    const capitalizedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

    const lastSegment = category ? 'category' : city ? 'city' : country ? 'country' : 'continent';

    return (
        <div>
            {/* BREADCRUMBS */}
            <div className="breadcrumbs d-flex col-gap-5">
                <Link to={"/"}><div>Home</div></Link><div>{`>`}</div>
                <Link to={`/${continent}`}><div className={lastSegment === 'continent' ? 'bold' : ''}>{`${capitalizedContinent}`}</div></Link>
                {country && (
                    <>
                        <div>{`>`}</div>
                        <Link to={`/${continent}/${country}`}><div className={lastSegment === 'country' ? 'bold' : ''}>{`${capitalizedCountry}`}</div></Link>
                    </>
                )}
                {city && (
                    <>
                        <div>{`>`}</div>
                        <Link to={`/${continent}/${country}/${city}`}><div className={lastSegment === 'city' ? 'bold' : ''}>{`${capitalizedCity}`}</div></Link>
                    </>
                )}
                {category && (
                    <>
                        <div>{`>`}</div>
                        <Link to={`/${continent}/${country}/${city}/${category}`}><div className={lastSegment === 'category' ? 'bold' : ''}>{`${capitalizedCategory}`}</div></Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Breadcrumbs;
