import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/navbar.css"

function MiddleEastMobileMenu({mobileMenu, closeMobileMenu, toggleMiddleEastMenu, middleEastMenu, closeCountryMenus, back, closeAllMenus, className, dnone}) {

  
    return (
    <>        
        <div className={`mobile-menu desktop-menu middleeast-menu ${middleEastMenu ? 'd-flex' : 'd-none'} ${className}`} style={{paddingTop: "0px"}}>

            <div className="inner-menu">
            <div className="w-55">
                <div className={`nav-menu d-flex align-center mobile ${dnone}`} onClick={() => {closeCountryMenus(); back();}} style={{marginLeft: "0px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "0px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                    Back
                </div>
                <hr className={`w-80 mobile ${dnone}`} style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/thailand"} className="nav-menu" onClick={closeAllMenus}><div>🇦🇪 UAE</div></Link>
                <Link to={"/asia/thailand/bangkok"} className="nav-menu" onClick={closeAllMenus}><div>🇦🇪 Dubai</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/vietnam"} className="nav-menu" onClick={closeAllMenus}><div>🇪🇬 Egypt</div></Link>
            </div>

            <div className="w-45">
                <Link to={"/asia/bali"} className="nav-menu" onClick={closeAllMenus}><div>🇹🇷 Turkey</div></Link>
                <Link to={"/asia/bali/canggu"} className="nav-menu" onClick={closeAllMenus}><div>🇹🇷 Istanbul</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/japan"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇱 Israel</div></Link>
                <Link to={"/asia/japan/tokyo"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇱 Tel Aviv</div></Link>
                <div style={{height: "500px"}}></div>
            </div>
            </div>
        </div>
    </>
    );
};

export default MiddleEastMobileMenu;