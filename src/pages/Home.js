import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import HomeBanner from "../components/HomeBanner"
import TotalVideos from "../components/TotalVideos"
import Cards from "../components/Cards"
import Pagination from "../components/Pagination"

const ITEMS_PER_PAGE = 400;
const INITIAL_CARDS_TO_SHOW = 40;
const INCREMENT_CARDS = 40;

function Home() {
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
        
        {/* <h2 className="black-bar-title">🌎 Continents</h2> */}

        {/* CONTINENTS */}
            <div className="cities-wrapper continents-wrapper">
                <Link to={`/asia`} className="asia-img background-img" onClick={() => { scrollToTop(); }}><div>⛩ Asia</div></Link>
                <Link to={`/southamerica`} className="southamerica-img background-img" onClick={() => { scrollToTop(); }}><div>💃🏻 South America</div></Link>
                <Link to={`/europe`} className="europe-img background-img" onClick={() => { scrollToTop(); }}><div>🇪🇺 Europe</div></Link>
                <Link to={`/middleeast`} className="middleeast-img background-img" onClick={() => { scrollToTop(); }}><div>🕋 Middle East</div></Link>
            </div>

        <h2 className="black-bar-title">🌎 Countries</h2>

        {/* COUNTRIES */}
            <div className="cities-wrapper">
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
                {/* <Link to={`/europe/france`} className="france-img background-img" onClick={() => { scrollToTop(); }}><div>🇫🇷 France</div></Link> */}
                <Link to={`/europe/spain`} className="spain-img background-img" onClick={() => { scrollToTop(); }}><div>🇪🇸 Spain</div></Link>
            </div>

        {/* CATEGORIES */}
            <div id="home-categories" className="categories-wrapper">
            <h2 className="black-bar-title">📁 Categories</h2>
                <div className="inner-categories">
                    <Link to={`/`} className="active"><div>💯 All</div></Link>
                    <Link to={`/category/vlog`}><div>📸 Vlog</div></Link>
                    <Link to={`/category/howtobecomeadigitalnomad`}><div>👨‍💻 How To Become A Digital Nomad</div></Link>
                    <Link to={`/category/streetfood`}><div>🍜 Street Food</div></Link>
                    <Link to={`/category/walkingtour`}><div>🚶‍♂️ Walking Tour</div></Link>
                    <Link to={`/category/solotravel`}><div>🧍‍♀️ Solo Travel</div></Link>
                    <Link to={`/category/vanlife`}><div>🚐 Van Life</div></Link>
                    <Link to={`/category/englishteaching`}><div>👩‍🏫 English Teaching</div></Link>
                    <Link to={`/category/gear`}><div>🎒 Gear</div></Link>

                    <Link to={`/category/balivlog`} className="bali-img background-img"><div>🏝 Bali Vlog</div></Link>
                    <Link to={`/category/japanwalkingtour`} className="japan-img background-img"><div>🇯🇵 Japan Walking Tour</div></Link>
                    <Link to={`/category/taiwanbubbletea`} className="taiwan-img background-img"><div>🧋 Taiwan Bubble Tea</div></Link>
                    <Link to={`/category/khaosanroad`} className="bangkok-img background-img"><div>🍻 Khao San Road</div></Link>
                    <Link to={`/category/seoulcafetour`} className="seoul-img background-img"><div>☕️ Seoul Cafe Tour</div></Link>
                    <Link to={`/category/fullmoonparty`} className="kophangan-img background-img"><div>🌙 Full Moon Party</div></Link>
                    <Link to={`/category/vietnamstreetfood`} className="vietnam-img background-img"><div>🇻🇳 Vietnam Street Food</div></Link>
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