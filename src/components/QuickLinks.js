import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/quicklinks.css"

function QuickLinks({ scrollToTop, categoriesDropdown, handleCategoriesDropdown}) {


    return (
        <>            
            <div id="home-categories" className={`categories-wrapper hp-quick-links ${categoriesDropdown ? 'd-flex' : 'd-none'}`}>

                <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={handleCategoriesDropdown} style={{color: "black"}}>

                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x desktop"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x mobile"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                </button>
                <div className="inner-categories justify-center" style={{marginBottom: "100px"}}>

                <h2 className="text-center">🔗 Quick Links</h2>
                    <Link to={`/asia/bali/category/vlog`} className="bali-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🏝 Bali Vlog</div></Link>
                    <Link to={`/asia/japan/category/walkingtour`} className="japan-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇯🇵 Japan Walking Tour</div></Link>
                    <Link to={`/asia/taiwan/category/bubbletea`} className="taiwan-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🧋 Taiwan Bubble Tea</div></Link>
                    <Link to={`/asia/thailand/bangkok/khaosanroad`} className="bangkok-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🍻 Khao San Road</div></Link>
                    <Link to={`/asia/korea/seoul/cafetour`} className="seoul-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>☕️ Seoul Cafe Tour</div></Link>
                    <Link to={`/asia/thailand/kophangan/fullmoonparty`} className="kophangan-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🌙 Full Moon Party</div></Link>
                    <Link to={`/asia/vietnam/category/streetfood`} className="vietnam-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇻🇳 Vietnam Street Food</div></Link>
                    
                <h2 className="text-center" style={{marginTop:"20px"}}>🌎 Countries</h2>
                    <Link to={`/asia/bali`} className="bali-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🏝 Bali</div></Link>
                    <Link to={`/asia/thailand`} className="thailand-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇹🇭 Thailand</div></Link>
                    <Link to={`/asia/japan`} className="japan-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇯🇵 Japan</div></Link>
                    <Link to={`/asia/korea`} className="korea-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇰🇷 Korea</div></Link>
                    <Link to={`/asia/vietnam`} className="vietnam-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇻🇳 Vietnam</div></Link>

                    <Link to={`/southamerica/brazil`} className="brazil-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇧🇷 Brazil</div></Link>
                    <Link to={`/southamerica/colombia`} className="colombia-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇨🇴 Colombia</div></Link>
                    <Link to={`/southamerica/mexico`} className="mexico-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇲🇽 Mexico</div></Link>
                    <Link to={`/southamerica/costarica`} className="costarica-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇨🇷 Costa Rica</div></Link>
                    <Link to={`/europe/portugal`} className="portugal-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇵🇹 Portugal</div></Link>
                    <Link to={`/europe/italy`} className="italy-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇮🇹 Italy</div></Link>
                    <Link to={`/europe/spain`} className="spain-img background-img" onClick={() => { scrollToTop(); handleCategoriesDropdown(); }}><div>🇪🇸 Spain</div></Link>
                    <div style={{height:"400px"}}></div>

                </div>
            </div>
        </>
    );
};

export default QuickLinks;