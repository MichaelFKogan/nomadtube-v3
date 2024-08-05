import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import HomeBanner from "../components/HomeBanner"
import Card from "../components/Card"
import TotalVideos from "../components/TotalVideos"

const ITEMS_PER_PAGE = 200;

function Home() {
    const { continent, country, city, category } = useParams();
    const homeData = require(`../data/home.json`);

    // const capitalizedContinent= continent.charAt(0).toUpperCase() + continent.slice(1);
    // const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);

    // Add pagination
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(homeData.videos.length / ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    // Calculate the start and end index of the items to display
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, homeData.videos.length);

    return (
        <div className="home">

        <HomeBanner />

        {/* CITIES */}
            <div className="cities-wrapper">
                <Link to={`/asia/bali`} className="bali-img background-img"><div>🏝 Bali</div></Link>
                <Link to={`/asia/thailand`} className="background-img thailand-img"><div>🇹🇭 Thailand</div></Link>
                <Link to={`/asia/japan`} className="japan-img background-img"><div>🇯🇵 Japan</div></Link>
                <Link to={`/asia/korea`} className="korea-img background-img"><div>🇰🇷 Korea</div></Link>
                <Link to={`/southamerica/brazil`} className="brazil-img background-img"><div>🇧🇷 Brazil</div></Link>
                <Link to={`/southamerica/colombia`} className="colombia-img background-img"><div>🇨🇴 Colombia</div></Link>
                <Link to={`/southamerica/mexico`} className="mexico-img background-img"><div>🇲🇽 Mexico</div></Link>
                <Link to={`/southamerica/costarica`} className="costarica-img background-img"><div>🇨🇷 Costa Rica</div></Link>
                <Link to={`/europe/portugal`} className="portugal-img background-img"><div>🇵🇹 Portugal</div></Link>
                <Link to={`/europe/italy`} className="italy-img background-img"><div>🇮🇹 Italy</div></Link>
                <Link to={`/europe/france`} className="france-img background-img"><div>🇫🇷 France</div></Link>
                <Link to={`/europe/spain`} className="spain-img background-img"><div>🇪🇸 Spain</div></Link>
            </div>

        {/* CATEGORIES */}
            <div className="categories-wrapper">
                <div className="inner-categories">
                    <Link to={`/vlog`}><div>📸 Vlog</div></Link>
                    <Link to={`/howtobecomeadigitalnomad`}><div>👨‍💻 How To Become A Digital Nomad</div></Link>
                    <Link to={`/streetfood`}><div>🍜 Street Food</div></Link>
                    <Link to={`/walkingtour`}><div>🚶‍♂️ Walking Tour</div></Link>
                    <Link to={`/solotravel`}><div>🧍‍♀️ Solo Travel</div></Link>
                    <Link to={`/vanlife`}><div>🚐 Van Life</div></Link>
                    <Link to={`/gear`}><div>🎒 Gear</div></Link>

                    <Link to={`/asia/bali/vlog`} className="bali-img background-img"><div>🏝 Bali Vlog</div></Link>
                    <Link to={`/asia/thailand/bangkok/itinerary`} className="bangkok-img background-img"><div>🛺 Bangkok Itinerary</div></Link>
                    <Link to={`/asia/japan/tokyo/walkingtour`} className="tokyo-img background-img"><div>🇯🇵 Tokyo Walking Tour</div></Link>
                    <Link to={`/asia/taiwan/bubbletea`} className="taiwan-img background-img"><div>🧋 Taiwan Bubble Tea</div></Link>
                    <Link to={`/asia/thailand/bangkok/khaosanroad`} className="bangkok-img background-img"><div>🍻 Khao San Road</div></Link>
                    <Link to={`/asia/korea/seoul/cafetour`} className="seoul-img background-img"><div>☕️ Seoul Cafe Tour</div></Link>
                    <Link to={`/asia/thailand/kophangan/fullmoonparty`} className="kophangan-img background-img"><div>🌙 Full Moon Party</div></Link>
                    <Link to={`/asia/vietnam/streetfood`} className="vietnam-img background-img"><div>🇻🇳 Vietnam Street Food</div></Link>
                </div>
            </div>

        <TotalVideos/>

        {/* CARDS */}
        <div className="cards-wrapper">
            {homeData.videos.slice(startIndex, endIndex).map((video, index) => (
                <Card data={video} key={index} cardKey={index} />
            ))}
        </div>

        {/* PAGINATION CONTROLS */}
        <div className="pagination" style={{marginTop:"30px", marginBottom: "150px"}}>
            <button onClick={() => {handlePageChange(currentPage - 1); document.documentElement.scrollTop = 0;}}
                disabled={currentPage === 1}>Previous</button>
            <span className='pages'>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={() => {handlePageChange(currentPage + 1); document.documentElement.scrollTop = 0;}}
                disabled={currentPage === totalPages}>Next</button>
        </div>

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>

        </div>
    );
};

export default Home;