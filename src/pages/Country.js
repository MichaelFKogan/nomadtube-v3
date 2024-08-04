import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from "../components/Card"
import Breadcrumbs from "../components/Breadcrumbs"
import TotalVideos from "../components/TotalVideos"

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
        <div className="country-page">
            <h1>{countryData.name}</h1>

        {/* CITIES */}
            <div className="cities-wrapper">
                <Link to={`/${continent}/${country}`}><button>{countryData.name}</button></Link>
                {countryData.cities.map((city, index) => (
                    <Link to={`/${continent}/${country}/${city.toLowerCase().replace(/\s+/g, '')}`} key={index}>
                        <button>{city}</button>
                    </Link>
                ))}
            </div>

        {/* CATEGORIES */}
            <div className="categories-wrapper">
                {countryData.categories.map((category, index) => (
                    <Link to={`/${continent}/${country}/${category.toLowerCase().replace(/\s+/g, '')}`} key={index}>
                        <button>{category}</button>
                    </Link>
                ))}
            </div>

        <TotalVideos/>
        <Breadcrumbs/>

        {/* CARDS */}
        <div className="cards-wrapper">
            {countryData.videos.slice(startIndex, endIndex).map((video, index) => (
                <Card data={video} key={index} cardKey={index} />
            ))}
        </div>

        {/* PAGINATION CONTROLS */}
        <div className="pagination" style={{marginTop:"30px", marginBottom: "150px"}}>
            <button onClick={() => {handlePageChange(currentPage - 1); document.documentElement.scrollTop = 0;}}
                disabled={currentPage === 1}>Previous</button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={() => {handlePageChange(currentPage + 1); document.documentElement.scrollTop = 0;}}
                disabled={currentPage === totalPages}>Next</button>
        </div>

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>

        </div>
    );
};

export default Country;