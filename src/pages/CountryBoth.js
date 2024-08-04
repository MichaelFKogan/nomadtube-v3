import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from "../components/Card"

const ITEMS_PER_PAGE = 200;

function Country() {
    const { continent, country, city, category } = useParams();
    const countryData = require(`../data/${continent}/${country}/${country}.json`);

    const capitalizedContinent= continent.charAt(0).toUpperCase() + continent.slice(1);
    const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);

    // Code for Infinite Scroll using Intersection Observer API
    const [numCardsToShow, setNumCardsToShow] = useState(50);
    const loadMoreRef = useRef(null);

    const loadMoreCards = useCallback(() => {
        setNumCardsToShow(prevNum => Math.min(prevNum + 50, countryData.videos.length));
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

    // Add pagination
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(countryData.videos.length / ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    // Calculate the start and end index of the items to display
    // const [startIndex, setStartIndex] = useState(400);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, countryData.videos.length);

    // useEffect(() => {
    //     if (numCardsToShow >= 400) {
    //         setStartIndex((currentPage - 1) * ITEMS_PER_PAGE);
    //     }
    // }, [numCardsToShow, currentPage]);

    
    useEffect(() => {
        console.log(`numCardsToShow: ${numCardsToShow}`);
    }, [numCardsToShow]);

    useEffect(() => {
        console.log(`startIndex: ${startIndex}`);
    }, [startIndex]);

    useEffect(() => {
        console.log(`endIndex: ${endIndex}`);
    }, [endIndex]);

    return (
        <div>
            <h1>{countryData.name}</h1>

        {/* BREADCRUMBS */}
            <div class="breadcrumbs d-flex col-gap-5">
                <Link to={"/"}><div>Home</div></Link><div>{`>`}</div>
                <Link to={`/${continent}`}><div>{`${capitalizedContinent}`}</div></Link><div>{`>`}</div>
                <Link to={`/${continent}/${country}`}><div className="bold">{`${capitalizedCountry}`}</div></Link>
            </div>

        {/* CITIES */}
            <div className="cities">
                <Link to={`/${continent}/${country}`}><button>{capitalizedCountry}</button></Link>
                {countryData.cities.map((city, index) => (
                    <Link to={`/${continent}/${country}/${city.toLowerCase().replace(/\s+/g, '')}`} key={index}>
                        <button>{city}</button>
                    </Link>
                ))}
            </div>

        {/* CATEGORIES */}
            <div className="categories">
                {countryData.categories.map((category, index) => (
                    <Link to={`/${continent}/${country}/${category.toLowerCase().replace(/\s+/g, '')}`} key={index}>
                        <button>{category}</button>
                    </Link>
                ))}
            </div>
            <div>

                {/* <h2>{`Continent: ${capitalizedContinent}`}</h2>
                <h2>{`Country: ${capitalizedCountry}`}</h2> */}
                <p>Total Videos: {countryData.videos.length}</p>

            </div>

        {/* PAGINATION CONTROLS */}
            <div className="pagination" style={{marginTop:"30px", marginBottom: "150px"}}>
                <button 
                    onClick={() => {handlePageChange(currentPage - 1)}}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button 
                    onClick={() => {handlePageChange(currentPage + 1)}}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>

        {/* CARDS */}
            {numCardsToShow < 400 ? (
                <h2 style={{position:"fixed", width: "100%", background: "white", height: "100px", top: 0, zIndex: "10"}}>Less Than 400</h2>
            ):(
                <h2 style={{position:"fixed", width: "100%", background: "white", height: "100px", top: 0, zIndex: "10"}}>Greater Than 400</h2>
                )}
            <div className="cards-wrapper">

            {numCardsToShow < 400 ? (
                <>
                {countryData.videos.slice(0, numCardsToShow).map((video, index) => (
                    <Card data={video} key={index} cardKey={index} />
                ))}
                </>
             ) : (
                <>
                {countryData.videos.slice(startIndex, endIndex).map((video, index) => (
                    <Card data={video} key={index} cardKey={index} />
                ))}
                </>
            )}

                {numCardsToShow < 400 && numCardsToShow < countryData.videos.length && (
                    <div ref={loadMoreRef} style={{ height: '20px', backgroundColor: 'transparent' }} />
                )}

                {/* {countryData.videos.slice(startIndex, endIndex).map((video, index) => (
                    <Card data={video} key={index} cardKey={index} />
                ))} */}
            </div>

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>

        </div>
    );
};

export default Country;