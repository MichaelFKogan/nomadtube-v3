import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/navbar.css"

function SouthAmericaMobileMenu({mobileMenu, closeMobileMenu, toggleSouthAmericaMenu, southAmericaMenu, closeCountryMenus, back, closeAllMenus, className, dnone}) {

  
    return (
    <>        
        <div className={`mobile-menu desktop-menu southamerica-menu ${className} d-flex off-screen ${southAmericaMenu ? 'right' : '' }`} style={{paddingTop: "0px"}}>

            <div className="inner-menu">
            <div className="w-55">
                <div className={`nav-menu d-flex align-center mobile ${dnone}`} onClick={() => {closeCountryMenus(); back();}} style={{marginLeft: "0px"}}>
                    Back
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </div>
                <hr className={`w-80 mobile ${dnone}`} style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/southamerica/colombia"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇴 Colombia</div></Link>
                <Link to={"/southamerica/colombia/medellin"} className="nav-menu" onClick={closeAllMenus}><div>🍻 Medellin</div></Link>
                <Link to={"/southamerica/colombia/bogota"} className="nav-menu" onClick={closeAllMenus}><div>🌄 Bogota</div></Link>
                <Link to={"/southamerica/colombia/cartegena"} className="nav-menu" onClick={closeAllMenus}><div>🏖️ Cartegena</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/southamerica/mexico"} className="nav-menu" onClick={closeAllMenus}><div>🇲🇽 Mexico</div></Link>
                <Link to={"/southamerica/mexico/mexicocity"} className="nav-menu" onClick={closeAllMenus}><div>🌇 Mexico City</div></Link>
                <Link to={"/southamerica/mexico/playadelcarmen"} className="nav-menu" onClick={closeAllMenus}><div>⛱ Playa Del Carmen</div></Link>
                <Link to={"/southamerica/mexico/tulum"} className="nav-menu" onClick={closeAllMenus}><div>🏝 Tulum</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/southamerica/puertorico"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇷 Puerto Rico</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/southamerica/argentina"} className="nav-menu" onClick={closeAllMenus}><div>🇦🇷 Argentina</div></Link>
                <Link to={"/southamerica/argentina/buenosaires"} className="nav-menu" onClick={closeAllMenus}><div>🎭  Buenos Aires</div></Link>
            </div>

            <div className="w-45">
                <Link to={"/southamerica/brazil"} className="nav-menu" onClick={closeAllMenus}><div>🇧🇷 Brazil</div></Link>
                <Link to={"/southamerica/brazil/riodejaneiro"} className="nav-menu" onClick={closeAllMenus}><div>🎉 Rio De Janeiro</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/southamerica/costarica"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇷 Costa Rica</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/southamerica/cuba"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇺 Cuba</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/southamerica/ecuador"} className="nav-menu" onClick={closeAllMenus}><div>🇪🇨 Ecuador</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/southamerica/chile"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇱 Chile</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/southamerica/peru"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇪 Peru</div></Link>
                <Link to={"/southamerica/peru/lima"} className="nav-menu" onClick={closeAllMenus}><div>🍽️ Lima</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <div style={{height: "300px"}}></div>
            </div>
            </div>
        </div>
    </>
    );
};

export default SouthAmericaMobileMenu;