import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from "../components/Card"
import Breadcrumbs from "../components/Breadcrumbs"
import TotalVideos from "../components/TotalVideos"



const ITEMS_PER_PAGE = 80;



function Country() {
    const { continent, country, city, category } = useParams();
    const countryData = require(`../data/${continent}/${country}/${country}.json`);




    

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










    // Code for Infinite Scroll using Intersection Observer API
    const [numCardsToShow, setNumCardsToShow] = useState(40);
    const loadMoreRef = useRef(null);

    const loadMoreCards = useCallback(() => {
        setNumCardsToShow(prevNum => Math.min(prevNum + 40, countryData.videos.length));
    }, [countryData.videos.length]);

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
        console.log(`startIndex2: ${startIndex}`);  
    }, [startIndex]);

    useEffect(() => {
        console.log(`endIndex2: ${endIndex}`);    
    }, [endIndex]);

    useEffect(() => {
        console.log(`numCardsToShow: ${numCardsToShow}`);      
    }, [numCardsToShow]);






    return (
        <div className="country-page">

        <TotalVideos/>














        {/* CARDS */}
        <div className="cards-wrapper">







        {/* PAGINATION MAP */}
            {countryData.videos.slice(startIndex, endIndex).map((video, index) => (
                <Card data={video} key={index} cardKey={index} />
            ))}







        {/* INFINITE SCROLL MAP */}
            {countryData.videos.slice(0, numCardsToShow).map((video, index) => (
                <Card data={video} key={index} cardKey={index} />
            ))}
            {numCardsToShow < countryData.videos.length && (
                <div ref={loadMoreRef} style={{ height: '20px', backgroundColor: 'transparent' }} />
            )}








        </div>





        {/* PAGINATION CONTROLS */}
        <div className="pagination" style={{marginTop:"30px", marginBottom: "150px"}}>
            <button onClick={() => {handlePageChange(currentPage - 1); document.documentElement.scrollTop = 0;}}
                disabled={currentPage === 1}>Previous</button>
            <span className='pages'>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={() => {handlePageChange(currentPage + 1); document.documentElement.scrollTop = 0;}}
                disabled={currentPage === totalPages}>Next</button>
        </div>

        </div>
    );
};

export default Country;