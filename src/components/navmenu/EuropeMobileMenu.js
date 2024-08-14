import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/navbar.css"

function EuropeMobileMenu({mobileMenu, closeMobileMenu, toggleEuropeMenu, europeMenu, closeCountryMenus, back, closeAllMenus, className}) {

  
    return (
    <>        
        <div className={`mobile-menu desktop-menu europe-menu ${europeMenu ? 'd-flex' : 'd-none'} ${className}`} style={{paddingTop: "0px"}}>

            <div className="inner-menu">
            <div className="w-55">
                <div className={`nav-menu d-flex align-center mobile`} onClick={() => {closeCountryMenus(); back();}} style={{marginLeft: "0px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "0px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                    Back
                </div>
                <hr className="w-80 mobile" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/thailand"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇹 Portugal</div></Link>
                <Link to={"/asia/thailand/bangkok"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇹 Lisbon</div></Link>
                <Link to={"/asia/thailand/chiangmai"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇹 Madeira</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/japan"} className="nav-menu" onClick={closeAllMenus}><div>🇪🇸 Spain</div></Link>
                <Link to={"/asia/japan/tokyo"} className="nav-menu" onClick={closeAllMenus}><div>🇪🇸 Barcelona</div></Link>
                <Link to={"/asia/japan/tokyo"} className="nav-menu" onClick={closeAllMenus}><div>🇪🇸 Madrid</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/vietnam"} className="nav-menu" onClick={closeAllMenus}><div>🇫🇷 France</div></Link>
                <Link to={"/asia/vietnam/hanoi"} className="nav-menu" onClick={closeAllMenus}><div>🇫🇷 Paris</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/hongkong"} className="nav-menu" onClick={closeAllMenus}><div>🇳🇱 Amsterdam</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/singapore"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇿 Prague</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/malaysia"} className="nav-menu" onClick={closeAllMenus}><div>🇭🇷 Croatia</div></Link>
                <Link to={"/asia/malaysia/kualalumpur"} className="nav-menu" onClick={closeAllMenus}><div>🇪🇬 Zagreb</div></Link>
            </div>

            <div className="w-45">
                <Link to={"/asia/bali"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇹 Italy</div></Link>
                <Link to={"/asia/bali/canggu"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇹 Rome</div></Link>
                <Link to={"/asia/bali/ubud"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇹 Venice</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/japan"} className="nav-menu" onClick={closeAllMenus}><div>🇩🇪 Germany</div></Link>
                <Link to={"/asia/japan/tokyo"} className="nav-menu" onClick={closeAllMenus}><div>🇩🇪 Berlin</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/korea"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇱 Poland</div></Link>
                <Link to={"/asia/korea/seoul"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇱 Warsaw</div></Link>
                <Link to={"/asia/korea/seoul"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇱 Krakow</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/china"} className="nav-menu" onClick={closeAllMenus}><div>🇬🇷 Greece</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/indonesia"} className="nav-menu" onClick={closeAllMenus}><div>🇬🇧 London</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/indonesia"} className="nav-menu" onClick={closeAllMenus}><div>🇷🇺 Russia</div></Link>
                <Link to={"/asia/indonesia"} className="nav-menu" onClick={closeAllMenus}><div>🇷🇺 Moscow</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/myanmar"} className="nav-menu" onClick={closeAllMenus}><div>🇷🇴 Romania</div></Link>
                <div style={{height: "500px"}}></div>
            </div>
            </div>
        </div>
    </>
    );
};

export default EuropeMobileMenu;