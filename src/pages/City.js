import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Cities from '../components/Cities';
import TotalVideos from "../components/TotalVideos"
import Breadcrumbs from "../components/Breadcrumbs"
import Cards from "../components/Cards"
import Pagination from "../components/Pagination"

const ITEMS_PER_PAGE = 400;
const INITIAL_CARDS_TO_SHOW = 40;
const INCREMENT_CARDS = 40;

function City() {
    const { continent, country, city, category } = useParams();
    const data = require(`../data/${continent}/${country}/${city}/${city}.json`);
    const dataCities = require(`../data/${continent}/${country}/${country}-cities.json`);
    const dataCityCategories = require(`../data/${continent}/${country}/${city}/${city}-categories.json`);

    // const dataCountryCategories = require(`../data/${continent}/${country}/${country}-categories.json`);

    const capitalizedContinent= continent.charAt(0).toUpperCase() + continent.slice(1);
    const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

    const imgRoute = city === data.categoryRoute ? country : city;

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
        document.documentElement.scrollTop = 0;
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

        // console.log(`city: ${city}`);
        // console.log(`data.category: ${data.categoryRoute}`);

    return (
        <div className={`city-page ${country} ${city}`}>      

            {/* <div className='cities-wrapper'>
            
            <Link to={`/${continent}/${country}`} className={`${country}-img background-img`} style={{width: "100%"}} 
                onClick={() => { document.documentElement.scrollTop = 0; }}>
                <div>{dataCities.name}</div>
            </Link>
            </div> */}

        {dataCities.cities.map((item, index) => (
            city === item.route ? 
                <PageBanner key={index} title={item.name} imgRoute={imgRoute}/> 
                : null
        ))}

        {/* CITIES */}
            <Cities dataCities={dataCities} className={"desktop"} />


        {/* <h2 style={{fontFamily: "Edo", fontWeight: "100", fontSize: "2em", marginTop: "10px", marginBottom: "5px"}}>Cities</h2> */}

        {/* <h2 style={{fontFamily: "Edo", fontWeight: "100", marginTop: "0px", fontSize: "2em",marginBottom: "5px"}}>Categories</h2> */}  

        {/* <h2 style={{fontFamily: "Edo", fontWeight: "100", marginTop: "15px", fontSize: "2em",marginBottom: "0px"}}>Videos</h2> */}

        {/* CATEGORIES */}
            <div className='categories-wrapper categories-row'>
                <div className="inner-categories">
                    {/* This route is for categories of cities */}
                        <Link to={`/${continent}/${country}/${city}`} className="active">
                            <div>💯 All</div>
                        </Link>
                        {dataCityCategories.categories.map((category, index) => (
                            <Link to={`/${continent}/${country}/${city}/${category.route}`} key={index}>
                                <div>{category.name}</div>
                            </Link>
                        ))}
                </div>
            </div>             

            <div className="d-flex space-between align-center">
        <div className="page-back d-flex align-center mobile">
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "0px"}} width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            <Link to={`/${continent}/${country}`} className=""><div>{capitalizedCountry}</div></Link>
        </div>
        <TotalVideos data={data} className={"mobile"}/>
        </div>

        <div className="breadcrumbs-and-videos">
                <Breadcrumbs/>
                <TotalVideos data={data} className={"desktop"}/>
            </div>

        {/* CATEGORY TITLE */}
            <div className="category-title"><h2>💯 All</h2></div> 

            <Cards data={data} startIndex={startIndex} endIndex={endIndex} numCardsToShow={numCardsToShow} loadMoreRef={loadMoreRef}/>
            
            {data.videos.length > 399 && (
                <Pagination handlePageChange={handlePageChange} currentPage={currentPage} pageNumbers={pageNumbers} totalPages={totalPages}/>
            )}

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>
            
        </div>
    );
};

export default City;