import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/navbar.css"

function EuropeDesktopMenu({mobileMenu, closeMobileMenu, toggleEuropeMenu, europeMenu, closeCountryMenus, back, closeAllMenus, className}) {

  
    return (
    <>        
        <div className={`mobile-menu desktop-menu europe-menu ${europeMenu ? 'd-flex' : 'd-none' } ${className}`} style={{paddingTop: "0px"}}>

            <div className="inner-menu">
            <div className="w-55">
                <div className={`nav-menu d-flex align-center mobile`} onClick={() => {closeCountryMenus(); back();}} style={{marginLeft: "0px"}}>
                    Back
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </div>
                <hr className={`w-80 mobile`} style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/italy"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇹 Italy</div></Link>
                <Link to={"/europe/italy/rome"} className="nav-menu" onClick={closeAllMenus}><div>🏛️ Rome</div></Link>
                <Link to={"/europe/italy/venice"} className="nav-menu" onClick={closeAllMenus}><div>🚤 Venice</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/spain"} className="nav-menu" onClick={closeAllMenus}><div>🇪🇸 Spain</div></Link>
                <Link to={"/europe/spain/barcelona"} className="nav-menu" onClick={closeAllMenus}><div>⚽️ Barcelona</div></Link>
                <Link to={"/europe/spain/madrid"} className="nav-menu" onClick={closeAllMenus}><div>🍷 Madrid</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/france"} className="nav-menu" onClick={closeAllMenus}><div>🇫🇷 France</div></Link>
                <Link to={"/europe/france/paris"} className="nav-menu" onClick={closeAllMenus}><div>🗼 Paris</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/amsterdam"} className="nav-menu" onClick={closeAllMenus}><div>🇳🇱 Amsterdam</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/prague"} className="nav-menu" onClick={closeAllMenus}><div>🕍 Prague</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/prague"} className="nav-menu" onClick={closeAllMenus}><div>🇪🇪 Estonia</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/croatia"} className="nav-menu" onClick={closeAllMenus}><div>🇭🇷 Croatia</div></Link>
                <Link to={"/europe/croatia/zagreb"} className="nav-menu" onClick={closeAllMenus}><div>🏙️ Zagreb</div></Link>
            </div>

            <div className="w-45">
                <Link to={"/europe/portugal"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇹 Portugal</div></Link>
                <Link to={"/europe/portugal/lisbon"} className="nav-menu" onClick={closeAllMenus}><div>🚋 Lisbon</div></Link>
                <Link to={"/europe/portugal/madeira"} className="nav-menu" onClick={closeAllMenus}><div>🌴 Madeira</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/germany"} className="nav-menu" onClick={closeAllMenus}><div>🇩🇪 Germany</div></Link>
                <Link to={"/europe/germany/berlin"} className="nav-menu" onClick={closeAllMenus}><div>🏛 Berlin</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/poland"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇱 Poland</div></Link>
                <Link to={"/europe/poland/warsaw"} className="nav-menu" onClick={closeAllMenus}><div>🏢 Warsaw</div></Link>
                <Link to={"/europe/poland/krakow"} className="nav-menu" onClick={closeAllMenus}><div>🏰 Krakow</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/iceland"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇸 Iceland</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/greece"} className="nav-menu" onClick={closeAllMenus}><div>🇬🇷 Greece</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/london"} className="nav-menu" onClick={closeAllMenus}><div>🇬🇧 London</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/russia"} className="nav-menu" onClick={closeAllMenus}><div>🇷🇺 Russia</div></Link>
                <Link to={"/europe/russia/moscow"} className="nav-menu" onClick={closeAllMenus}><div>🚇 Moscow</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/europe/romania"} className="nav-menu" onClick={closeAllMenus}><div>🇷🇴 Romania</div></Link>
                <div style={{height: "500px"}}></div>
            </div>
            </div>
        </div>
    </>
    );
};

export default EuropeDesktopMenu;