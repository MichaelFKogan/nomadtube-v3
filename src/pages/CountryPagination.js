import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from "../components/Card"

const ITEMS_PER_PAGE = 200;

function Country() {
    const { continent, country, city, category } = useParams();
    const countryData = require(`../data/${continent}/${country}/${country}.json`);

    const capitalizedContinent= continent.charAt(0).toUpperCase() + continent.slice(1);
    const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);

    // Add pagination
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(countryData.videos.length / ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    // Calculate the start and end index of the items to display
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, countryData.videos.length);

    return (
        <div>
            <h1>{countryData.name}</h1>

        {/* BREADCRUMBS */}
            <div class="breadcrumbs d-flex col-gap-5">
                <Link to={"/"}><div>Home</div></Link><div>{`>`}</div>
                <Link to={`/${continent}`}><div>{`${capitalizedContinent}`}</div></Link><div>{`>`}</div>
                <Link to={`/${continent}/${country}`}><div className="bold">{`${capitalizedCountry}`}</div></Link>
            </div>

        {/* CITIES */}
            <div className="cities">
                <Link to={`/${continent}/${country}`}><button>{capitalizedCountry}</button></Link>
                {countryData.cities.map((city, index) => (
                    <Link to={`/${continent}/${country}/${city.toLowerCase().replace(/\s+/g, '')}`} key={index}>
                        <button>{city}</button>
                    </Link>
                ))}
            </div>

        {/* CATEGORIES */}
            <div className="categories">
                {countryData.categories.map((category, index) => (
                    <Link to={`/${continent}/${country}/${category.toLowerCase().replace(/\s+/g, '')}`} key={index}>
                        <button>{category}</button>
                    </Link>
                ))}
            </div>
            <div>

                {/* <h2>{`Continent: ${capitalizedContinent}`}</h2>
                <h2>{`Country: ${capitalizedCountry}`}</h2> */}
                <p>Total Videos: {countryData.videos.length}</p>

            </div>

        {/* PAGINATION CONTROLS */}
        <div className="pagination" style={{marginTop:"30px", marginBottom: "150px"}}>
            <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>

        {/* CARDS */}
        <div className="cards-wrapper">
                {countryData.videos.slice(startIndex, endIndex).map((video, index) => (
                    <Card data={video} key={index} cardKey={index} />
                ))}
            </div>

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>

        </div>
    );
};

export default Country;