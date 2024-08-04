import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from "../components/Card"

function Country() {
    const { continent, country, city, category } = useParams();
    const countryData = require(`../data/${continent}/${country}/${country}.json`);

    const capitalizedContinent= continent.charAt(0).toUpperCase() + continent.slice(1);
    const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);

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

        {/* CARDS */}
            <div className="cards-wrapper">
                {countryData.videos.slice(0, numCardsToShow).map((video, index) => (
                    <Card data={video} key={index} cardKey={index} />
                ))}
                {numCardsToShow < countryData.videos.length && (
                    <div ref={loadMoreRef} style={{ height: '20px', backgroundColor: 'transparent' }} />
                )}
            </div>

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>

        </div>
    );
};

export default Country;