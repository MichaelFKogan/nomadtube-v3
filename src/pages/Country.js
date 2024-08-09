import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Cities from "../components/Cities"
import Breadcrumbs from "../components/Breadcrumbs"
import TotalVideos from "../components/TotalVideos";
import Cards from "../components/Cards"
import Pagination from "../components/Pagination";

const ITEMS_PER_PAGE = 400;
const INITIAL_CARDS_TO_SHOW = 40;
const INCREMENT_CARDS = 40;

function Country() {
    const { continent, country, city, category } = useParams();
    const data = require(`../data/${continent}/${country}/${country}.json`);
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

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            if (scrollTop + windowHeight >= documentHeight - 100) { // 100px before the bottom
                loadMoreCards();
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreCards]);

        // Generate page numbers
        const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className={`country-page ${country}`}>

            <PageBanner title={dataCities.name} imgRoute={country}/>

        {/* <h2 style={{fontFamily: "Edo", fontWeight: "100", fontSize: "2em", marginTop: "10px", marginBottom: "5px"}}>Cities</h2> */}
        {/* CITIES */}
            <Cities dataCities={dataCities} />

        {/* <h2 style={{fontFamily: "Edo", fontWeight: "100", marginTop: "0px", fontSize: "2em",marginBottom: "5px"}}>Categories</h2> */}
        {/* CATEGORIES */}
            <div className='categories-wrapper'>
                <div className="inner-categories">
                    <Link to={`/${continent}/${country}`} className="active">
                        <div>💯 All</div>
                    </Link>
                {dataCategories.categories.map((category, index) => (
                    <Link to={`/${continent}/${country}/category/${category.route}`} key={index} onClick={() => { scrollToTop(); }}>
                        <div>{category.name}</div>
                    </Link>
                ))}
                </div>
            </div>

        {/* <h2 style={{fontFamily: "Edo", fontWeight: "100", marginTop: "15px", fontSize: "2em",marginBottom: "0px"}}>Videos</h2> */}

        {/* CATEGORY TITLE */}
            <div className="category-title"><h2>💯 All</h2></div>    

            <TotalVideos data={data}/>
            <Breadcrumbs/>
            <Cards data={data} startIndex={startIndex} endIndex={endIndex} numCardsToShow={numCardsToShow} loadMoreRef={loadMoreRef}/>
            
            {data.videos.length > 399 && (
                <Pagination handlePageChange={handlePageChange} currentPage={currentPage} pageNumbers={pageNumbers} totalPages={totalPages}/>
            )}

            {/* BOTTOM NAVIGATION BUTTONS */}
                <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>

        </div>
    );
}

export default Country;
