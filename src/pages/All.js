import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import HomeBanner from "../components/HomeBanner"
import Card from "../components/Card"
import TotalVideos from "../components/TotalVideos"

const ITEMS_PER_PAGE = 400;
const INITIAL_CARDS_TO_SHOW = 40;
const INCREMENT_CARDS = 40;

function Home() {
    const { continent, country, city, category } = useParams();
    const homeData = require(`../data/home.json`);

    // const capitalizedContinent= continent.charAt(0).toUpperCase() + continent.slice(1);
    // const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(homeData.videos.length / ITEMS_PER_PAGE);
    
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
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, homeData.videos.length);

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
        <div className="all">

        {/* PAGE TITLE */}
            <h1>💯 All</h1>

        <TotalVideos/>

            {/* CARDS */}
            <div className="cards-wrapper">
                {homeData.videos.slice(startIndex, startIndex + numCardsToShow).map((video, index) => (
                    <Card data={video} key={index} cardKey={index} />
                ))}
                {numCardsToShow < endIndex - startIndex && (
                    <div ref={loadMoreRef} className="load-more-cards" style={{ height: '20px', backgroundColor: 'transparent' }} />
                )}
            </div>

        {/* PAGINATION CONTROLS */}
        <div className="pagination">
            <div className='d-flex align-center justify-center'>
                <button onClick={() => { handlePageChange(currentPage - 1); document.documentElement.scrollTop = 0; }}
                    disabled={currentPage === 1}>Previous</button>
                
                {/* <div className='pages'>{`Page ${currentPage} of ${totalPages}`}</div> */}

                <div className='pages page-numbers'>
                    {pageNumbers.map(pageNumber => (
                        <div key={pageNumber}
                            onClick={() => {if (currentPage !== pageNumber) {handlePageChange(pageNumber);document.documentElement.scrollTop = 0;}}}
                            className={`page-number ${currentPage === pageNumber ? 'disabled' : ''}`}>
                            {pageNumber}
                        </div>
                    ))}
                </div>
                
                <button onClick={() => { handlePageChange(currentPage + 1); document.documentElement.scrollTop = 0; }}
                    disabled={currentPage === totalPages}>Next</button>
            </div>

        </div>


        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>

        </div>
    );
};

export default Home;