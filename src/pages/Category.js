import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from "../components/Card"
import Breadcrumbs from "../components/Breadcrumbs"
import TotalVideos from "../components/TotalVideos"

function Category() {
    const { continent, country, city, category } = useParams();
    const categoryData = require(`../data/${continent}/${country}/${city}/${category}.json`);

    const capitalizedContinent= continent.charAt(0).toUpperCase() + continent.slice(1);
    const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    // Code for Infinite Scroll using Intersection Observer API
    const [numCardsToShow, setNumCardsToShow] = useState(40);
    const loadMoreRef = useRef(null);

    const loadMoreCards = useCallback(() => {
        setNumCardsToShow(prevNum => Math.min(prevNum + 40, categoryData.videos.length));
    }, [categoryData.videos.length]);

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
        <div className="category-page">
            <h1>{categoryData.name} {capitalizedCategory}</h1>

        {/* CITIES */}
            <div className="cities-wrapper">
                <Link to={`/${continent}/${country}`} className={`${country}-img background-img`}><div>{capitalizedCountry}</div></Link>
                {categoryData.cities.map((city, index) => (
                    <Link to={`/${continent}/${country}/${city.toLowerCase().replace(/\s+/g, '')}`} className={`${city.toLowerCase().replace(/\s+/g, '')}-img background-img`} key={index}>
                        <div>{city}</div>
                    </Link>
                ))}
            </div>

        {/* CATEGORIES */}
            <div className="categories-wrapper">
                <div className="inner-categories">
                {categoryData.categories.map((category, index) => (
                    <Link to={`/${continent}/${country}/${city}/${category.toLowerCase().replace(/\s+/g, '')}`} key={index}>
                        <div>{category}</div>
                    </Link>
                ))}
                </div>
            </div>

            {/* <div>
                <h2>{capitalizedCategory}</h2>
            </div> */}

        <TotalVideos/>
        <Breadcrumbs/>

        {/* CARDS */}
            <div className="cards-wrapper">
                {categoryData.videos.slice(0, numCardsToShow).map((video, index) => (
                    <Card data={video} key={index} cardKey={index} />
                ))}
                {numCardsToShow < categoryData.videos.length && (
                    <div ref={loadMoreRef} style={{ height: '20px', backgroundColor: 'transparent' }} />
                )}
            </div>

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>
            
        </div>
    );
};

export default Category;