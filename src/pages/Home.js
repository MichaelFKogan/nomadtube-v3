import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from "../components/Card"
import Breadcrumbs from "../components/Breadcrumbs"
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
            <h1>{homeData.name}</h1>

        {/* CITIES */}
            <div className="cities-wrapper">
                <div className="d-flex flex-col row-gap-5">
                    <div className="d-flex justify-center col-gap-5 row-gap-5">
                        <Link to={`/asia/bali`}><button>🏝 Bali</button></Link>
                        <Link to={`/asia/thailand`}><button>🇹🇭 Thailand</button></Link>
                        <Link to={`/asia/japan`}><button>🇯🇵 Japan</button></Link>
                        <Link to={`/asia/korea`}><button>🇰🇷 Korea</button></Link>
                    </div>
                    <div className="d-flex justify-center col-gap-5 row-gap-5">
                        <Link to={`/southamerica/brazil`}><button>🇧🇷 Brazil</button></Link>
                        <Link to={`/southamerica/colombia`}><button>🇨🇴 Colombia</button></Link>
                        <Link to={`/southamerica/mexico`}><button>🇲🇽 Mexico</button></Link>
                        <Link to={`/southamerica/costarica`}><button>🇨🇷 Costa Rica</button></Link>
                    </div>
                    <div className="d-flex justify-center col-gap-5 row-gap-5">
                        <Link to={`/europe/portugal`}><button>🇵🇹 Portugal</button></Link>
                        <Link to={`/europe/italy`}><button>🇮🇹 Italy</button></Link>
                        <Link to={`/europe/france`}><button>🇫🇷 France</button></Link>
                        <Link to={`/europe/spain`}><button>🇪🇸 Spain</button></Link>
                    </div>
                </div>
            </div>

        {/* CATEGORIES */}
            <div className="categories-wrapper">
                <div className="d-flex flex-col row-gap-5">
                    <div className="d-flex justify-center col-gap-5 row-gap-5">
                        <Link to={`/vlog`}><button>📸 Vlog</button></Link>
                        <Link to={`/howtobecomeadigitalnomad`}><button>👨‍💻 How To Become A Digital Nomad</button></Link>
                        <Link to={`/streetfood`}><button>🍜 Street Food</button></Link>
                        <Link to={`/walkingtour`}><button>🚶‍♂️ Walking Tour</button></Link>
                        <Link to={`/solotravel`}><button>🧍‍♀️ Solo Travel</button></Link>
                        <Link to={`/vanlife`}><button>🚐 Van Life</button></Link>
                        <Link to={`/gear`}><button>🎒 Gear</button></Link>
                    </div>

                    <div className="d-flex justify-center col-gap-5 row-gap-5">
                        <Link to={`/asia/bali/vlog`}><button>🏝 Bali Vlog</button></Link>
                        <Link to={`/asia/thailand/bangkok/itinerary`}><button>🛺 Bangkok Itinerary</button></Link>

                        <Link to={`/asia/japan/tokyo/walkingtour`}><button>🇯🇵 Tokyo Walking Tour</button></Link>
                        <Link to={`/asia/thailand/bangkok/khaosanroad`}><button>🍻 Khao San Road</button></Link>
                        <Link to={`/asia/thailand/kophangan/fullmoonparty`}><button>🌙 Full Moon Party</button></Link>
                        <Link to={`/asia/vietnam/streetfood`}><button>🇻🇳 Vietnam Street Food</button></Link>
                    </div>
                </div>
            </div>



        <TotalVideos/>
        {/* <Breadcrumbs/> */}

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
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={() => {handlePageChange(currentPage + 1); document.documentElement.scrollTop = 0;}}
                disabled={currentPage === totalPages}>Next</button>
        </div>

        {/* BOTTOM NAVIGATION BUTTONS */}
            <button className="back-to-top" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back To Top</button>

        </div>
    );
};

export default Home;