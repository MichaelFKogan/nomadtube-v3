import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';

import PageBanner from '../components/PageBanner';
import Cities from '../components/Cities';
import TotalVideos from "../components/TotalVideos"
import Breadcrumbs from "../components/Breadcrumbs"
import Cards from "../components/Cards"
import Pagination from "../components/Pagination"

const ITEMS_PER_PAGE = 100;

function Category() {
    const { continent, country, city, category } = useParams();
    const data = require(`../data/${continent}/${country}/${city}/${category}.json`);
    const dataCities = require(`../data/${continent}/${country}/${country}-cities.json`);
    const dataCategories = require(`../data/${continent}/${country}/${city}/${city}-categories.json`);

    const capitalizedContinent= continent.charAt(0).toUpperCase() + continent.slice(1);
    const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    let cityName;

    dataCities.cities.map((item, index) => {
        if (city === item.route) {
            cityName = item.noemoji;
        }
        return null; // Ensure that the map function returns something
    });

    const scrollToTop = () => {
        document.documentElement.scrollTop = 0;
    }

    // Pagination using URL search params
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;

    const totalPages = Math.ceil(data.videos.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setSearchParams({ page: pageNumber });
        scrollToTop();  // Optionally scroll to top when the page changes
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return (
        <div className={`category-page ${country} ${city}`}>

        {currentPage === 1 && (<>

            {dataCities.cities.map((item, index) => (
                city === item.route ? 
                    <PageBanner key={index} title={item.name} imgRoute={city} /> 
                    : null
            ))}

        {/* CITIES */}
            <Cities dataCities={dataCities} className={"desktop"}/>    
        </>)}

        {/* CATEGORY TITLE */}
        {dataCategories.categories.map((item, index) => (category === item.route ? <div className="category-title"><div className="subtitle">{cityName}</div><h2>{item.name}</h2></div> : null))}    

        {currentPage === 1 && (<>
        {/* CATEGORIES */}
        <div className="categories-wrapper categories-row">
                <div className="inner-categories">
                    <Link to={`/${continent}/${country}/${city}`}>
                        <div>💯 All</div>
                    </Link>
                {dataCategories.categories.map((item, index) => (
                    category === item.route ? (
                        <Link to={`/${continent}/${country}/${city}/${item.route}`} key={index} className="active">
                            <div>{item.name}</div>
                        </Link>
                    ) : (
                        <Link to={`/${continent}/${country}/${city}/${item.route}`} key={index}>
                            <div>{item.name}</div>
                        </Link>
                    )
                ))}
                </div>
            </div>
        </>)}

        {/* PAGE BACK and PAGE NUMBER */}
        <div className="d-flex align-center space-between breadcrumb-page-back">
                <div className="page-back d-flex align-center">
                    {currentPage === 1 ? (
                        <Link to={`/${continent}/${country}`} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                            <div>{capitalizedCountry}</div>
                        </Link>
                    ) : (
                        <Link to={`/${continent}/${country}/${city}`} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                            <div>{capitalizedCity}</div>
                        </Link>
                    )}

                </div>
                {currentPage !== 1 && (
                    <div className='d-flex bold'>
                        <div style={{ marginRight: "5px" }}>Page:</div>
                        <div>{currentPage}</div>
                    </div>
                )}
            </div>

            <div className="breadcrumbs-and-videos">
                <Breadcrumbs/>
                <TotalVideos data={data} className={"desktop"}/>
            </div>

            <Cards data={data} startIndex={startIndex} endIndex={endIndex} />

            <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>
            
        </div>
    );
};

export default Category;