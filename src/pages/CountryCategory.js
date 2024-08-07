import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import TotalVideos from "../components/TotalVideos"
import Breadcrumbs from "../components/Breadcrumbs"
import Cards from "../components/Cards"
import Pagination from "../components/Pagination"

const ITEMS_PER_PAGE = 400;
const INITIAL_CARDS_TO_SHOW = 40;
const INCREMENT_CARDS = 40;

function CountryCategory() {
    const { continent, country, city, category } = useParams();
    const data = require(`../data/${continent}/${country}/category/${category}.json`);
    const dataCities = require(`../data/${continent}/${country}/${country}-cities.json`);
    const dataCategories = require(`../data/${continent}/${country}/${country}-categories.json`);

    const capitalizedContinent= continent.charAt(0).toUpperCase() + continent.slice(1);
    const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);

    // Code For Pagination and Infinite Scroll
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.videos.length / ITEMS_PER_PAGE);
    
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
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, data.videos.length);

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

        // Generate page numbers
        const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="category-page">

        <PageBanner title={dataCities.name} imgRoute={country}/>


        {/* CITIES */}
            <div className="cities-wrapper">
                <Link to={`/${continent}/${country}`} className={`${country}-img background-img`}>
                    <div>{dataCities.name}</div>
                </Link>
                {dataCities.cities.map((city, index) => (
                    <Link to={`/${continent}/${country}/${city.route}`} className={`${city.route}-img background-img`} key={index}>
                        <div>{city.name}</div>
                    </Link>
                ))}
            </div>

        {/* CATEGORIES */}
            <div className="categories-wrapper">
                <div className="inner-categories">
                    <Link to={`/${continent}/${country}`}>
                        <div>💯 All</div>
                    </Link>
                {dataCategories.categories.map((item, index) => (
                    category === item.route ? (
                        <Link to={`/${continent}/${country}/${city}/${item.route}`} key={index} className="active">
                            <div>{item.name}</div>
                        </Link>
                    ) : (
                        <Link to={`/${continent}/${country}/category/${item.route}`} key={index}>
                            <div>{item.name}</div>
                        </Link>
                    )
                ))}
                </div>
            </div>

            <div>
                <h2>{data.category}</h2>
            </div>

        <TotalVideos/>
        <Breadcrumbs/>
        <Cards data={data} startIndex={startIndex} endIndex={endIndex} numCardsToShow={numCardsToShow} loadMoreRef={loadMoreRef}/>
        <Pagination handlePageChange={handlePageChange} currentPage={currentPage} pageNumbers={pageNumbers} totalPages={totalPages}/>

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>
            
        </div>
    );
};

export default CountryCategory;