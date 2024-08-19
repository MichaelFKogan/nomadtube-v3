import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/quicklinks.css"

function QuickLinks({ categoriesDropdown, handleCategoriesDropdown, closeMobileMenu}) {

    const scrollToTop = () => {
        document.documentElement.scrollTop = 0;
    }

    return (
        <>            
            <div id="home-categories" className={`categories-wrapper hp-quick-links standalone d-flex off-screen mobile ${categoriesDropdown ? 'right' : ''}`}>

                <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={handleCategoriesDropdown} style={{color: "black"}}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x desktop"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x mobile"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </button>
                <div className="inner-categories justify-center">

                <h2 className="text-center">🔗 Quick Links</h2>
                    <Link to={`/asia/bali/category/vlog`} className="bali-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); closeMobileMenu(); }}><div>🏝 Bali Vlog</div></Link>
                    <Link to={`/asia/japan/category/walkingtour`} className="japan-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); closeMobileMenu(); }}><div>🇯🇵 Japan Walking Tour</div></Link>
                    <Link to={`/asia/taiwan/category/bubbletea`} className="taiwan-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); closeMobileMenu(); }}><div>🧋 Taiwan Bubble Tea</div></Link>
                    <Link to={`/asia/thailand/bangkok/khaosanroad`} className="bangkok-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); closeMobileMenu(); }}><div>🍻 Khao San Road</div></Link>
                    <Link to={`/asia/korea/seoul/cafetour`} className="seoul-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); closeMobileMenu(); }}><div>☕️ Seoul Cafe Tour</div></Link>
                    <Link to={`/asia/thailand/kophangan/fullmoonparty`} className="kophangan-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); closeMobileMenu(); }}><div>🌙 Full Moon Party</div></Link>
                    <Link to={`/asia/vietnam/category/streetfood`} className="vietnam-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); closeMobileMenu(); }}><div>🇻🇳 Vietnam Street Food</div></Link>
                    <Link to={`/europe/germany/category/oktoberfest`} className="germany-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); closeMobileMenu(); }}><div>🍺 Oktoberfest</div></Link>
                    <Link to={`/northamerica/newyork/category/foodtour`} className="newyork-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); closeMobileMenu(); }}><div>🍕 New York Food Tour</div></Link>
                    <Link to={`/northamerica/sanfrancisco/category/vlog`} className="sanfrancisco-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); closeMobileMenu(); }}><div>🇺🇸 San Francisco Vlog</div></Link>
                </div>
            </div>
        </>
    );
};

export default QuickLinks;