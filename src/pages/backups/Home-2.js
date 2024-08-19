import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';

import HomeBanner from "../components/HomeBanner"
import TotalVideos from "../components/TotalVideos"
import Cards from "../components/Cards"
import Pagination from "../components/Pagination"
import AsiaDropdownMenu from '../components/hpdropdownmenu/AsiaDropdownMenu';

import QuickLinks from '../components/QuickLinks';
import QuickLinkCountries from '../components/QuickLinkCountries';
import "../styles/home.css"

const ITEMS_PER_PAGE = 100;

function Home({
    continentsDropdown, handleContinentsDropdown,
    countriesDropdown, handleCountriesDropdown,
    categoriesDropdown, handleCategoriesDropdown,

    continentsDropdownMenu, handleContinentsDropdownMenu,
    asiaDropdownMenu, toggleAsiaDropdownMenu,
    closeAllDropdownMenus
}) {

    const { continent, country, city, category } = useParams();
    const data = require(`../data/home.json`);
    const dataCategories = require(`../data/home-categories.json`);

    const [countryMenu, setCountryMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [asiaMenu, setAsiaMenu] = useState(false);
    const toggleAsiaMenu = () => { setAsiaMenu(!asiaMenu); closeMobileMenu(); }
    const closeMobileMenu = () => { setMobileMenu(false); setCountryMenu(true); };
    const closeAllMenus = () => { setMobileMenu(false); setAsiaMenu(false); setCountryMenu(false); };
    const closeCountryMenus = () => { setAsiaMenu(false); };
    const back = () => { setMobileMenu(true); }
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
        <div className="home">

            {currentPage === 1 && (
            <>
            <HomeBanner />

            {/* <div className='d-flex space-between black-bar-title' onClick={handleContinentsDropdown}>
            <svg style={{opacity:"0", visibility: "0"}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            <h2 className="">🗺 Countries</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </div> */}

            {/* CONTINENTS w/images */}
            {/* <div className={`cities-wrapper continents-wrapper ${continentsDropdown ? 'd-flex' : 'd-none'}`}> */}

            {/* <Link to={`/asia`} className="asia-img background-img" onClick={() => { scrollToTop(); }}><div>⛩ Asia</div></Link>
                <Link to={`/southamerica`} className="southamerica-img background-img" onClick={() => { scrollToTop(); }}><div>💃🏻 South America</div></Link>
                <Link to={`/europe`} className="europe-img background-img" onClick={() => { scrollToTop(); }}><div>🇪🇺 Europe</div></Link>
                <Link to={`/middleeast`} className="middleeast-img background-img" onClick={() => { scrollToTop(); }}><div>🕋 Middle East</div></Link> */}

            {/* <div className={`${continentsDropdown ? 'd-flex' : 'd-none'}`}>
                <div className={`hp-dropdown-menu hp-countries-menu ${continentsDropdownMenu ? 'd-none' : 'd-flex'}`}>
                    <div className="nav-menu" onClick={() => {closeMobileMenu(); toggleAsiaDropdownMenu();}} style={{marginLeft: "0px"}}><div>⛩ Asia</div></div>
                    <div className="nav-menu" onClick={() => {closeMobileMenu(); toggleAsiaMenu();}} style={{marginLeft: "0px"}}><div>💃🏻 South America</div></div>
                    <div className="nav-menu" onClick={() => {closeMobileMenu(); toggleAsiaMenu();}} style={{marginLeft: "0px"}}><div>🇪🇺 Europe</div></div>
                    <div className="nav-menu" onClick={() => {closeMobileMenu(); toggleAsiaMenu();}} style={{marginLeft: "0px"}}><div>🕋 Middle East</div></div>
                    
                </div>

                <AsiaDropdownMenu asiaDropdownMenu={asiaDropdownMenu} closeAllDropdownMenus={closeAllDropdownMenus} />

            </div> */}


            {/* QUICK LINKS - DESKTOP */}
            <div className='d-flex space-between black-bar-title desktop' onClick={handleCountriesDropdown}><h2 className="">🌎 Countries</h2></div>

            {/* COUNTRIES */}
            <div className={`cities-wrapper desktop`}>

                {/* <Link to={`/asia/bali`} className="bali-img background-img" onClick={() => { scrollToTop(); }}><div>🏝 Bali Vlog</div></Link>
                <Link to={`/asia/japan`} className="japan-img background-img" onClick={() => { scrollToTop(); }}><div>🇯🇵 Japan Walking Tour</div></Link>
                <Link to={`/asia/japan`} className="taiwan-img background-img" onClick={() => { scrollToTop(); }}><div>🧋 Taiwan Bubble Tea</div></Link>
                <Link to={`/asia/thailand`} className="thailand-img background-img" onClick={() => { scrollToTop(); }}><div>🍻 Khao San Road</div></Link>
                <Link to={`/asia/korea`} className="seoul-img background-img" onClick={() => { scrollToTop(); }}><div>☕️ Seoul Cafe Tour</div></Link>
                <Link to={`/asia/korea`} className="kophangan-img background-img" onClick={() => { scrollToTop(); }}><div>🌙 Full Moon Party</div></Link>
                <Link to={`/asia/vietnam`} className="vietnam-img background-img" onClick={() => { scrollToTop(); }}><div>🇻🇳 Vietnam Street Food</div></Link> */}

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
                {/* <div className="mt-10 mb-10" style={{fontFamily: "Edo", fontSize: "19px"}}>See All Countries...</div> */}
            </div>

            {/* QUICK LINKS - MOBILE */}

            {/* <div className='d-flex space-between black-bar-title mobile' onClick={handleCountriesDropdown}>
                <svg style={{opacity:"0", visibility: "0"}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                <h2 className="">🔗 Quick Links</h2>
                ${countriesDropdown ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                }
            </div> */}


            {/* QUICK LINKS - DESKTOP */}
            <div className='d-flex space-between black-bar-title desktop' onClick={handleCountriesDropdown}><h2 className="">🔗 Quick Links</h2></div>

            <div id="home-categories" className={`categories-wrapper hp-quick-links desktop`}>
                <div className="inner-categories justify-center">
                    <Link to={`/asia/bali/category/vlog`} className="bali-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🏝 Bali Vlog</div></Link>
                    <Link to={`/asia/japan/category/walkingtour`} className="japan-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇯🇵 Japan Walking Tour</div></Link>
                    <Link to={`/asia/taiwan/category/bubbletea`} className="taiwan-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🧋 Taiwan Bubble Tea</div></Link>
                    <Link to={`/asia/thailand/bangkok/khaosanroad`} className="bangkok-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🍻 Khao San Road</div></Link>
                    <Link to={`/asia/korea/seoul/cafetour`} className="seoul-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>☕️ Seoul Cafe Tour</div></Link>
                    <Link to={`/asia/thailand/kophangan/fullmoonparty`} className="kophangan-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🌙 Full Moon Party</div></Link>
                    <Link to={`/asia/vietnam/category/streetfood`} className="vietnam-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇻🇳 Vietnam Street Food</div></Link>
                    <Link to={`/europe/germany/category/oktoberfest`} className="germany-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🍺 Oktoberfest</div></Link>
                    <Link to={`/northamerica/newyork/category/foodtour`} className="newyork-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🍕 New York Food Tour</div></Link>
                    <Link to={`/northamerica/sanfrancisco/category/vlog`} className="sanfrancisco-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇺🇸 San Francisco Vlog</div></Link>
                </div>
            </div>







            {/* COUNTRIES */}
            <div className='d-flex space-between black-bar-title mobile quick-links-countries-btn-mobile' onClick={openCountryMenu}>
                <h2 className="">🌏 Countries</h2>
            </div>
            <QuickLinkCountries openCountryMenu={openCountryMenu} countryMenu={countryMenu} setCountryMenu={setCountryMenu} scrollToTop={scrollToTop} />

            {/* QUICK LINKS - MOBILE */}
            <div className='d-flex space-between black-bar-title mobile quick-links-btn-mobile' onClick={handleCategoriesDropdown}>
                <h2 className="">🔗 Quick Links</h2>
            </div>

            <QuickLinks scrollToTop={scrollToTop} categoriesDropdown={categoriesDropdown} handleCategoriesDropdown={handleCategoriesDropdown} />


            {/* CATEGORIES */}
            {/* <div id="home-categories" className={`categories-wrapper ${categoriesDropdown ? 'd-flex' : 'd-none'}`}> */}
            <div id="home-categories" className={`categories-wrapper categories-row`}>
                <div className="inner-categories">
                    <Link to={`/`} className="active"><div>💯 All</div></Link>
                    <Link to={`/category/vlog`}><div>📸 Vlog</div></Link>

                    <Link to={`/category/gear`}><div>🎒 Gear</div></Link>
                    <Link to={`/category/howtobecomeadigitalnomad`}><div>👨‍💻 How To Become A Digital Nomad</div></Link>

                    <Link to={`/category/streetfood`}><div>🍜 Street Food</div></Link>
                    <Link to={`/category/walkingtour`}><div>🚶‍♂️ Walking Tour</div></Link>
                    <Link to={`/category/solotravel`}><div>🧍‍♀️ Solo Travel</div></Link>

                    <Link to={`/category/budgettravel`}><div>💵 Budget Travel</div></Link>
                    <Link to={`/category/coworking`}><div>👨‍💻 Coworking</div></Link>
                    <Link to={`/category/englishteaching`}><div>👩‍🏫 English Teaching</div></Link>
                    <Link to={`/category/vanlife`}><div>🚐 Van Life</div></Link>


                </div>
            </div>
            </>
            )}


            {/* CATEGORY TITLE */}
            <div className="category-title"><h2>💯 All</h2></div>

            <div className='d-flex flex-col'>
                {currentPage !== 1 && (
                    <div className="d-flex align-center space-between breadcrumb-page-back">
                        <div className="page-back d-flex align-center">
                            <Link to={`/`} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                                <div>Home</div>
                            </Link>
                        </div>
                            <div className='d-flex bold'>
                                <div style={{marginRight: "5px"}}>Page:</div>
                                <div>{currentPage}</div>
                            </div>
                    </div>
                )}

                <div className="breadcrumbs-and-videos">
                    <div className="breadcrumbs d-flex col-gap-5">
                        <Link to={"/"}><div>Home</div></Link>
                    </div>
                    <TotalVideos data={data} />
                </div>
            </div>


            <Cards data={data} startIndex={startIndex} endIndex={endIndex} />

            <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />


            {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back To Top</button>

        </div>
    );
};

export default Home;