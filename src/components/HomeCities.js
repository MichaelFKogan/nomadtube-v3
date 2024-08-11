import React from 'react';
import { useParams, Link } from 'react-router-dom';


function HomeCities({dataCities, countriesDropdown}) {

    const { continent, country, city, category } = useParams();

    return (
        <>
            <div className={`cities-wrapper ${countriesDropdown ? 'd-flex' : 'd-none'}`}>
                {dataCities.cities.map((item, index) => (
                    <Link to={`/${item.route}`} className={`${item.imgRoute}-img background-img`} key={index} 
                    onClick={() => { document.documentElement.scrollTop = 0; }}>
                        <div>{item.name}</div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default HomeCities;
