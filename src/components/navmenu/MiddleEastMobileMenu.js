import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/navbar.css"

function MiddleEastMobileMenu({mobileMenu, closeMobileMenu, toggleMiddleEastMenu, middleEastMenu, closeCountryMenus, back, closeAllMenus}) {

  
    return (
    <>        
        <div className={`mobile-menu desktop-menu middleeast-menu mobile d-flex off-screen ${middleEastMenu ? 'right' : '' }`} style={{paddingTop: "0px"}}>

            <div className="inner-menu">
            <div className="w-55">
                <div className={`nav-menu d-flex align-center mobile`} onClick={() => {closeCountryMenus(); back();}} style={{marginLeft: "0px"}}>
                    Back
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </div>
                <hr className={`w-80 mobile`} style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/middleeast/uae"} className="nav-menu" onClick={closeAllMenus}><div>🇦🇪 UAE</div></Link>
                <Link to={"/middleeast/uae/dubai"} className="nav-menu" onClick={closeAllMenus}><div>🏙️ Dubai</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/middleeast/egypt"} className="nav-menu" onClick={closeAllMenus}><div>🇪🇬 Egypt</div></Link>
            </div>

            <div className="w-45">
                <Link to={"/middleeast/turkey"} className="nav-menu" onClick={closeAllMenus}><div>🇹🇷 Turkey</div></Link>
                <Link to={"/middleeast/turkey/istanbul"} className="nav-menu" onClick={closeAllMenus}><div>🕌 Istanbul</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/middleeast/israel"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇱 Israel</div></Link>
                <Link to={"/middleeast/israel/telaviv"} className="nav-menu" onClick={closeAllMenus}><div>🏖️ Tel Aviv</div></Link>
                <div style={{height: "500px"}}></div>
            </div>
            </div>
        </div>
    </>
    );
};

export default MiddleEastMobileMenu;