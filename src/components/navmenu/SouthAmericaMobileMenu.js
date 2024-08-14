import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/navbar.css"

function SouthAmericaMobileMenu({mobileMenu, closeMobileMenu, toggleSouthAmericaMenu, southAmericaMenu, closeCountryMenus, back, closeAllMenus, className, dnone}) {

  
    return (
    <>        
        <div className={`mobile-menu desktop-menu southamerica-menu ${className} ${southAmericaMenu ? 'd-flex' : 'd-none'}`} style={{paddingTop: "0px"}}>

            <div className="inner-menu">
            <div className="w-55">
                <div className={`nav-menu d-flex align-center mobile ${dnone}`} onClick={() => {closeCountryMenus(); back();}} style={{marginLeft: "0px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "0px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                    Back
                </div>
                <hr className={`w-80 mobile ${dnone}`} style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/vietnam"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇴 Colombia</div></Link>
                <Link to={"/asia/vietnam/hanoi"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇴 Medellin</div></Link>
                <Link to={"/asia/vietnam/hanoi"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇴 Bogota</div></Link>
                <Link to={"/asia/vietnam/hanoi"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇴 Cartegena</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/vietnam"} className="nav-menu" onClick={closeAllMenus}><div>🇲🇽 Mexico</div></Link>
                <Link to={"/asia/vietnam/hanoi"} className="nav-menu" onClick={closeAllMenus}><div>🌇 Mexico City</div></Link>
                <Link to={"/asia/vietnam/hanoi"} className="nav-menu" onClick={closeAllMenus}><div>⛱ Playa Del Carmen</div></Link>
                <Link to={"/asia/vietnam/hanoi"} className="nav-menu" onClick={closeAllMenus}><div>🏝 Tulum</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/korea"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇷 Puerto Rico</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/thailand"} className="nav-menu" onClick={closeAllMenus}><div>🇦🇷 Argentina</div></Link>
                <Link to={"/asia/thailand/bangkok"} className="nav-menu" onClick={closeAllMenus}><div>🇦🇷 Buenos Aires</div></Link>
            </div>

            <div className="w-45">
                <Link to={"/asia/bali"} className="nav-menu" onClick={closeAllMenus}><div>🇧🇷 Brazil</div></Link>
                <Link to={"/asia/bali/canggu"} className="nav-menu" onClick={closeAllMenus}><div>🇧🇷 Rio De Janeiro</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/korea"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇷 Costa Rica</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/korea"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇺 Cuba</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/korea"} className="nav-menu" onClick={closeAllMenus}><div>🇪🇨 Ecuador</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/japan"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇱 Chile</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/korea"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇪 Peru</div></Link>
                <Link to={"/asia/korea"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇪 Lima</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <div style={{height: "300px"}}></div>
            </div>
            </div>
        </div>
    </>
    );
};

export default SouthAmericaMobileMenu;