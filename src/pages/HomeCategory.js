import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';
import HomeCities from '../components/HomeCities';
import TotalVideos from "../components/TotalVideos"
import Breadcrumbs from "../components/Breadcrumbs"
import Cards from "../components/Cards"
import Pagination from "../components/Pagination"

const ITEMS_PER_PAGE = 400;
const INITIAL_CARDS_TO_SHOW = 40;
const INCREMENT_CARDS = 40;

function HomeCategory() {
    const { continent, homeCategory, country, city, category } = useParams();
    const data = require(`../data/category/${homeCategory}.json`);
    const dataCities = require(`../data/home-cities.json`);
    const dataCategories = require(`../data/home-categories.json`);



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
        <div className="home category-page">

        <HomeBanner />

        {/* CITIES */}
            <HomeCities dataCities={dataCities} />

        {/* CATEGORIES */}
            <div className="categories-wrapper">
                <div className="inner-categories">
                    <Link to={`/`}>
                        <div>💯 All</div>
                    </Link>
                {dataCategories.categories.map((item, index) => (
                    item.imgRoute ? (
                        <Link to={`/category/${item.route}`}  className={`${item.imgRoute}-img background-img`} key={index}>
                            <div>{item.name}</div>
                        </Link>
                    ) : (
                        homeCategory === item.route ? (
                            <Link to={`/category/${item.route}`} key={index} className="active">
                                <div>{item.name}</div>
                            </Link>
                            ) : (
                            <Link to={`/category/${item.route}`} key={index}>
                                <div>{item.name}</div>
                            </Link>
                        )
                    )
                ))}
                </div>
            </div>

        {/* CATEGORY TITLE */}
            {dataCategories.categories.map((item, index) => (homeCategory === item.route ? <div className="category-title"><h2>{item.name}</h2></div> : null))}

        <TotalVideos data={data}/>
        {/* <Breadcrumbs/> */}
        <Cards data={data} startIndex={startIndex} endIndex={endIndex} numCardsToShow={numCardsToShow} loadMoreRef={loadMoreRef}/>
        {data.videos.length > 399 && (
            <Pagination handlePageChange={handlePageChange} currentPage={currentPage} pageNumbers={pageNumbers} totalPages={totalPages}/>
        )}

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>
            
        </div>
    );
};

export default HomeCategory;