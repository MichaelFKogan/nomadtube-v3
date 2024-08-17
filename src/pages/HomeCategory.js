import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';

import HomeBanner from '../components/HomeBanner';
import HomeCities from '../components/HomeCities';
import TotalVideos from "../components/TotalVideos"
import Breadcrumbs from "../components/Breadcrumbs"
import Cards from "../components/Cards"
import Pagination from "../components/Pagination"

import QuickLinks from '../components/QuickLinks';
import QuickLinkCountries from '../components/QuickLinkCountries';
import "../styles/home.css"

const ITEMS_PER_PAGE = 100;

function HomeCategory({ continentsDropdown, handleContinentsDropdown, countriesDropdown, handleCountriesDropdown, categoriesDropdown, handleCategoriesDropdown }) {

    const { continent, homeCategory, country, city, category } = useParams();
    const data = require(`../data/category/${homeCategory}.json`);
    const dataCities = require(`../data/home-cities.json`);
    const dataCategories = require(`../data/home-categories.json`);

    // MOBILE COUNTRIES BUTTON & MENU
    const [countryMenu, setCountryMenu] = useState(false);
    const openCountryMenu = () => { setCountryMenu(true); }

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
        <div className="home home-category-page">

            {currentPage === 1 && (
            <HomeBanner />
            )}

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
            </div> */}


            {/* QUICK LINKS - DESKTOP */}
            {currentPage === 1 && (
            <div className='d-flex space-between black-bar-title desktop' onClick={handleCountriesDropdown}><h2 className="">🌎 Countries</h2></div>
            )}

            {/* COUNTRIES */}
            {currentPage === 1 && (
            <div className={`cities-wrapper desktop`}>
                <Link to={`/asia/bali`} className="bali-img background-img" onClick={() => { scrollToTop(); }}><div>🏝 Bali</div></Link>
                <Link to={`/asia/thailand`} className="thailand-img background-img" onClick={() => { scrollToTop(); }}><div>🇹🇭 Thailand</div></Link>
                <Link to={`/asia/japan`} className="japan-img background-img" onClick={() => { scrollToTop(); }}><div>🇯🇵 Japan</div></Link>
                <Link to={`/asia/korea`} className="korea-img background-img" onClick={() => { scrollToTop(); }}><div>🇰🇷 Korea</div></Link>
                <Link to={`/asia/vietnam`} className="vietnam-img background-img" onClick={() => { scrollToTop(); }}><div>🇻🇳 Vietnam</div></Link>

                <Link to={`/southamerica/brazil`} className="brazil-img background-img" onClick={() => { scrollToTop(); }}><div>🇧🇷 Brazil</div></Link>
                <Link to={`/southamerica/colombia`} className="colombia-img background-img" onClick={() => { scrollToTop(); }}><div>🇨🇴 Colombia</div></Link>
                <Link to={`/southamerica/mexico`} className="mexico-img background-img" onClick={() => { scrollToTop(); }}><div>🇲🇽 Mexico</div></Link>
                <Link to={`/southamerica/costarica`} className="costarica-img background-img" onClick={() => { scrollToTop(); }}><div>🇨🇷 Costa Rica</div></Link>
                <Link to={`/europe/portugal`} className="portugal-img background-img" onClick={() => { scrollToTop(); }}><div>🇵🇹 Portugal</div></Link>
                <Link to={`/europe/italy`} className="italy-img background-img" onClick={() => { scrollToTop(); }}><div>🇮🇹 Italy</div></Link>
                <Link to={`/europe/spain`} className="spain-img background-img" onClick={() => { scrollToTop(); }}><div>🇪🇸 Spain</div></Link>
            </div>
            )}

            {/* QUICK LINKS - DESKTOP */}
            {currentPage === 1 && (
            <div className='d-flex space-between black-bar-title desktop' onClick={handleCountriesDropdown}><h2 className="">🔗 Quick Links</h2></div>
            )}
            {currentPage === 1 && (
            <div id="home-categories" className={`categories-wrapper hp-quick-links desktop`}>
                <div className="inner-categories justify-center">
                    <Link to={`/asia/bali/category/vlog`} className="bali-img background-img" onClick={() => { scrollToTop(); }}><div>🏝 Bali Vlog</div></Link>
                    <Link to={`/asia/japan/category/walkingtour`} className="japan-img background-img" onClick={() => { scrollToTop(); }}><div>🇯🇵 Japan Walking Tour</div></Link>
                    <Link to={`/asia/taiwan/category/bubbletea`} className="taiwan-img background-img" onClick={() => { scrollToTop(); }}><div>🧋 Taiwan Bubble Tea</div></Link>
                    <Link to={`/asia/thailand/bangkok/khaosanroad`} className="bangkok-img background-img" onClick={() => { scrollToTop(); }}><div>🍻 Khao San Road</div></Link>
                    <Link to={`/asia/korea/seoul/cafetour`} className="seoul-img background-img" onClick={() => { scrollToTop(); }}><div>☕️ Seoul Cafe Tour</div></Link>
                    <Link to={`/asia/thailand/kophangan/fullmoonparty`} className="kophangan-img background-img" onClick={() => { scrollToTop(); }}><div>🌙 Full Moon Party</div></Link>
                    <Link to={`/asia/vietnam/category/streetfood`} className="vietnam-img background-img" onClick={() => { scrollToTop(); }}><div>🇻🇳 Vietnam Street Food</div></Link>
                    <Link to={`/europe/germany/category/oktoberfest`} className="germany-img background-img" onClick={() => { scrollToTop(); }}><div>🇩🇪 Oktoberfest</div></Link>
                </div>
            </div>
            )}


            {/* COUNTRIES */}
            {currentPage === 1 && (
            <div className='d-flex space-between black-bar-title mobile quick-links-countries-btn-mobile' onClick={openCountryMenu}>
                <h2 className="">🌏 Countries</h2>
            </div>
            )}
            {currentPage === 1 && (
            <QuickLinkCountries openCountryMenu={openCountryMenu} countryMenu={countryMenu} setCountryMenu={setCountryMenu} />
            )}
            {/* QUICK LINKS - MOBILE */}
            {currentPage === 1 && (
            <div className='d-flex space-between black-bar-title mobile quick-links-btn-mobile' onClick={handleCategoriesDropdown}>
                <h2 className="">🔗 Quick Links</h2>
            </div>
            )}
            {currentPage === 1 && (
            <QuickLinks scrollToTop={scrollToTop} categoriesDropdown={categoriesDropdown} handleCategoriesDropdown={handleCategoriesDropdown} />
            )}

            {/* CATEGORIES */}
            {currentPage === 1 && (
            <div className={`categories-wrapper categories-row`}>
                <div className="inner-categories">
                    <Link to={`/`}>
                        <div>💯 All</div>
                    </Link>
                    {dataCategories.categories.map((item, index) => (
                        item.imgRoute ? (
                            <Link to={`/${item.route}`} className={`${item.imgRoute}-img background-img`} key={index} onClick={() => { scrollToTop(); }}>
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
            )}

            {/* CATEGORY TITLE */}
            <div className={currentPage !== 1 && "margin-top-minus"}>
            {dataCategories.categories.map((item, index) => (homeCategory === item.route ? <div className="category-title desktop"><h2>{item.name}</h2></div> : null))}
            {dataCategories.categories.map((item, index) => (homeCategory === item.route ? <div className="category-title mobile"><h2>{item.name.length > 22 ? item.name.substring(0, 22) + "..." : item.name}</h2></div> : null))}
            </div>

            {/* BREADCRUMBS */}
            {/* <Breadcrumbs/> */}
            <div className='d-flex flex-col'>
                {currentPage !== 1 && (
                    <div className="d-flex align-center space-between breadcrumb-page-back">
                        <div className="page-back d-flex align-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                            <Link to={`/`} className=""><div>Home</div></Link>
                        </div>
                            <div className='d-flex bold' style={{fontSize: "12px"}}>
                                <div style={{marginRight: "5px"}}>Page:</div>
                                <div>{currentPage}</div>
                            </div>
                    </div>
                )}

                <div className="breadcrumbs-and-videos">
                    <div className="breadcrumbs d-flex col-gap-5 align-center">
                        <Link to={"/"}><div>Home</div></Link><div>{`>`}</div>
                        <Link to={`/category/${homeCategory}`}>
                            <div className={'bold desktop'}>
                                {dataCategories.categories.map((item, index) => (homeCategory === item.route ? <>{item.name}</> : null))}
                            </div>
                            <div className={'bold mobile'}>
                                {dataCategories.categories.map((item, index) => (homeCategory === item.route ? <>{item.name.length > 30 ? item.name.substring(0, 30) + "..." : item.name}</> : null))}
                            </div>
                        </Link>
                    </div>
                    <TotalVideos data={data} />
                </div>
            </div>

            <Cards data={data} startIndex={startIndex} endIndex={endIndex} />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />

            {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back To Top</button>

        </div>
    );
};

export default HomeCategory;