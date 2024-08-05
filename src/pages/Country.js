import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Card from "../components/Card";
import TotalVideos from "../components/TotalVideos";

const ITEMS_PER_PAGE = 300;
const INITIAL_CARDS_TO_SHOW = 40;
const INCREMENT_CARDS = 40;

function Country() {
    const { continent, country } = useParams();
    const countryData = require(`../data/${continent}/${country}/${country}.json`);

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
            <TotalVideos />

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
