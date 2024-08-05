import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Breadcrumbs from "../components/Breadcrumbs"
import TotalVideos from "../components/TotalVideos";
import Card from "../components/Card";

const ITEMS_PER_PAGE = 400;
const INITIAL_CARDS_TO_SHOW = 40;
const INCREMENT_CARDS = 40;

function Country() {
    const { continent, country, city, category } = useParams();
    const countryData = require(`../data/${continent}/${country}/${country}.json`);

    const capitalizedContinent= continent.charAt(0).toUpperCase() + continent.slice(1);
    const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);
    // const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    // const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    // Add Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(countryData.videos.length / ITEMS_PER_PAGE);
    
    const [numCardsToShow, setNumCardsToShow] = useState(INITIAL_CARDS_TO_SHOW);
    const loadMoreRef = useRef(null);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
            setNumCardsToShow(INITIAL_CARDS_TO_SHOW); // Reset for new page
        }
    };

    // Calculate the start and end index of the items to display
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, countryData.videos.length);

    const loadMoreCards = useCallback(() => {
        setNumCardsToShow(prevNum => Math.min(prevNum + INCREMENT_CARDS, endIndex));
    }, [endIndex]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreCards();
                }
            },
            { threshold: 0.1 }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [loadMoreCards]);

    return (
        <div className="country-page">

            <PageBanner country={country} title={capitalizedCountry}/>

        {/* CITIES */}
            <div className='cities-wrapper'>
                <Link to={`/${continent}/${country}`} className={`${country}-img background-img`}><div>{capitalizedCountry}</div></Link>
                {countryData.cities.map((city, index) => (
                    <Link to={`/${continent}/${country}/${city.toLowerCase().replace(/\s+/g, '')}`} className={`${city.toLowerCase().replace(/\s+/g, '')}-img background-img`} key={index}>
                        <div>{city}</div>
                    </Link>
                ))}
            </div>

        {/* CATEGORIES */}
            <div className='categories-wrapper'>
                <div className="inner-categories">
                {countryData.categories.map((category, index) => (
                    <Link to={`/${continent}/${country}/${city}/${category.toLowerCase().replace(/\s+/g, '')}`} key={index}>
                        <div>{category}</div>
                    </Link>
                ))}
                </div>
            </div>

            <TotalVideos/>
            <Breadcrumbs/>

            {/* CARDS */}
            <div className="cards-wrapper">
                {countryData.videos.slice(startIndex, startIndex + numCardsToShow).map((video, index) => (
                    <Card data={video} key={index} cardKey={index} />
                ))}
                {numCardsToShow < endIndex - startIndex && (
                    <div ref={loadMoreRef} className="load-more-cards" style={{ height: '20px', backgroundColor: 'transparent' }} />
                )}
            </div>

            {/* PAGINATION CONTROLS */}
            <div className="pagination" style={{ marginTop: "30px", marginBottom: "150px" }}>
                <button onClick={() => { handlePageChange(currentPage - 1); document.documentElement.scrollTop = 0; }}
                    disabled={currentPage === 1}>Previous</button>
                <span className='pages'>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={() => { handlePageChange(currentPage + 1); document.documentElement.scrollTop = 0; }}
                    disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}

export default Country;
