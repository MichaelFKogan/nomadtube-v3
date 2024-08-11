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

function HomeCategory({continentsDropdown, handleContinentsDropdown, countriesDropdown, handleCountriesDropdown, categoriesDropdown, handleCategoriesDropdown}) {
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

    const scrollToTop = () => {
        document.documentElement.scrollTop = 0;
    }

    const scrollToCategories = () => {
        document.documentElement.scrollTop = 0;
        // const categoriesSection = document.getElementById("home-categories");
        // categoriesSection.scrollIntoView({ behavior: "smooth" });
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
        <div className="home home-category-page">

        {/* <HomeBanner /> */}

        {/* <div className='d-flex space-between black-bar-title' onClick={handleContinentsDropdown}>
            <svg style={{opacity:"0", visibility: "0"}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            <h2 className="">🌎 Continents</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </div> */}

        {/* CONTINENTS */}
            {/* <div className={`cities-wrapper continents-wrapper ${continentsDropdown ? 'd-flex' : 'd-none'}`}>
                <Link to={`/asia`} className="asia-img background-img" onClick={() => { scrollToTop(); }}><div>⛩ Asia</div></Link>
                <Link to={`/southamerica`} className="southamerica-img background-img" onClick={() => { scrollToTop(); }}><div>💃🏻 South America</div></Link>
                <Link to={`/europe`} className="europe-img background-img" onClick={() => { scrollToTop(); }}><div>🇪🇺 Europe</div></Link>
                <Link to={`/middleeast`} className="middleeast-img background-img" onClick={() => { scrollToTop(); }}><div>🕋 Middle East</div></Link>
            </div>

            <div className='d-flex space-between black-bar-title' onClick={handleCountriesDropdown}>
                <svg style={{opacity:"0", visibility: "0"}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                <h2 className="">🗺 Countries</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </div> */}

        {/* CITIES */}
            {/* <HomeCities dataCities={dataCities} countriesDropdown={countriesDropdown}/>

            <div className='d-flex space-between black-bar-title' onClick={handleCategoriesDropdown}>
                <svg style={{opacity:"0", visibility: "0"}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                <h2 className="">📁 Categories</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </div> */}

        {/* CATEGORIES */}
            <div className={`categories-wrapper ${categoriesDropdown ? 'd-flex' : 'd-none'}`}>
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

        <div className="page-back d-flex align-center mobile">
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "0px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            <Link to={"/"} className="" onClick={() => { scrollToCategories(); }}><div>Back</div></Link>
        </div>

        {/* CATEGORY TITLE */}
            {dataCategories.categories.map((item, index) => (homeCategory === item.route ? <div className="category-title"><h2>{item.name}</h2></div> : null))}

        {/* BREADCRUMBS */}
        <div className="breadcrumbs-and-videos">
        <div className="breadcrumbs d-flex col-gap-5 align-center">
            <Link to={"/"}><div>Home</div></Link><div>{`>`}</div>
            <Link to={`/category/${homeCategory}`}><div className={'bold'}>{dataCategories.categories.map((item, index) => (homeCategory === item.route ? <>{item.name}</> : null))}</div></Link>
        </div>
        <TotalVideos data={data}/>
        </div>


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