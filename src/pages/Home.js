import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import HomeBanner from "../components/HomeBanner"
import TotalVideos from "../components/TotalVideos"
import Cards from "../components/Cards"
import Pagination from "../components/Pagination"
import AsiaDropdownMenu from '../components/hpdropdownmenu/AsiaDropdownMenu';
import "../styles/home.css"

const ITEMS_PER_PAGE = 400;
const INITIAL_CARDS_TO_SHOW = 40;
const INCREMENT_CARDS = 40;

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

    const [countryMenu, setCountryMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [asiaMenu, setAsiaMenu] = useState(false);
    const toggleAsiaMenu  = () => {setAsiaMenu(!asiaMenu);closeMobileMenu();}
    const closeMobileMenu  = () => {setMobileMenu(false);setCountryMenu(true); };
    const closeAllMenus  = () => {setMobileMenu(false);setAsiaMenu(false);setCountryMenu(false);};
    const closeCountryMenus  = () => {setAsiaMenu(false);};
    const back = () => { setMobileMenu(true);}


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
        <div className="home">

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

            {/* <div className='d-flex space-between black-bar-title' onClick={handleCountriesDropdown}>
                <svg style={{opacity:"0", visibility: "0"}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                <h2 className="">🗺 Countries</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </div> */}

        {/* COUNTRIES */}
            {/* <div className={`cities-wrapper ${countriesDropdown ? 'd-flex' : 'd-none'}`}>
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
            </div> */}

            {/* <div className='d-flex space-between black-bar-title' onClick={handleCategoriesDropdown}>
                <svg style={{opacity:"0", visibility: "0"}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                <h2 className="">📁 Categories</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </div> */}

            <div className='black-bar-title'>
                {/* <svg style={{opacity:"0", visibility: "0"}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg> */}
                <h2 className="">📁 Categories</h2>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg> */}
            </div>

        {/* CATEGORIES */}
            {/* <div id="home-categories" className={`categories-wrapper ${categoriesDropdown ? 'd-flex' : 'd-none'}`}> */}
            <div id="home-categories" className={`categories-wrapper`}>
                <div className="inner-categories">
                    <Link to={`/`} className="active" onClick={() => { scrollToTop(); }}><div>💯 All</div></Link>
                    <Link to={`/category/vlog`} onClick={() => { scrollToTop(); }}><div>📸 Vlog</div></Link>
                    <Link to={`/category/howtobecomeadigitalnomad`} onClick={() => { scrollToTop(); }}><div>👨‍💻 How To Become A Digital Nomad</div></Link>
                    <Link to={`/category/streetfood`} onClick={() => { scrollToTop(); }}><div>🍜 Street Food</div></Link>
                    <Link to={`/category/walkingtour`} onClick={() => { scrollToTop(); }}><div>🚶‍♂️ Walking Tour</div></Link>
                    <Link to={`/category/solotravel`} onClick={() => { scrollToTop(); }}><div>🧍‍♀️ Solo Travel</div></Link>
                    <Link to={`/category/vanlife`} onClick={() => { scrollToTop(); }}><div>🚐 Van Life</div></Link>
                    <Link to={`/category/englishteaching`} onClick={() => { scrollToTop(); }}><div>👩‍🏫 English Teaching</div></Link>
                    <Link to={`/category/gear`} onClick={() => { scrollToTop(); }}><div>🎒 Gear</div></Link>

                    <Link to={`/category/balivlog`} className="bali-img background-img" onClick={() => { scrollToTop(); }}><div>🏝 Bali Vlog</div></Link>
                    <Link to={`/category/japanwalkingtour`} className="japan-img background-img" onClick={() => { scrollToTop(); }}><div>🇯🇵 Japan Walking Tour</div></Link>
                    <Link to={`/category/taiwanbubbletea`} className="taiwan-img background-img" onClick={() => { scrollToTop(); }}><div>🧋 Taiwan Bubble Tea</div></Link>
                    <Link to={`/category/khaosanroad`} className="bangkok-img background-img" onClick={() => { scrollToTop(); }}><div>🍻 Khao San Road</div></Link>
                    <Link to={`/category/seoulcafetour`} className="seoul-img background-img" onClick={() => { scrollToTop(); }}><div>☕️ Seoul Cafe Tour</div></Link>
                    <Link to={`/category/fullmoonparty`} className="kophangan-img background-img" onClick={() => { scrollToTop(); }}><div>🌙 Full Moon Party</div></Link>
                    <Link to={`/category/vietnamstreetfood`} className="vietnam-img background-img" onClick={() => { scrollToTop(); }}><div>🇻🇳 Vietnam Street Food</div></Link>
                </div>
            </div>


            {/* <h2 className="black-bar-title" style={{marginBottom: "0px"}}>Videos</h2> */}

        {/* CATEGORY TITLE */}
            <div className="category-title"><h2>📹 Videos</h2></div>
            {/* <div>Page: {currentPage}</div> */}
            
            <div className="breadcrumbs-and-videos">
                <div className="breadcrumbs d-flex col-gap-5">
                    <Link to={"/"}><div>Home</div></Link>
                </div>
                <TotalVideos data={data}/>
            </div>

            <Cards data={data} startIndex={startIndex} endIndex={endIndex} numCardsToShow={numCardsToShow} loadMoreRef={loadMoreRef}/>
            
            {data.videos.length > 399 && (
                <Pagination handlePageChange={handlePageChange} currentPage={currentPage} pageNumbers={pageNumbers} totalPages={totalPages}/>
            )}


            {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>

        </div>
    );
};

export default Home;