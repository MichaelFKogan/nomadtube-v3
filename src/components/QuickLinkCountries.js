import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/quicklinks.css"
import AsiaMobileMenu from './navmenu/AsiaMobileMenu';
import SouthAmericaMobileMenu from './navmenu/SouthAmericaMobileMenu';
import NorthAmericaMobileMenu from './navmenu/NorthAmericaMobileMenu';
import EuropeMobileMenu from './navmenu/EuropeMobileMenu';
import MiddleEastMobileMenu from './navmenu/MiddleEastMobileMenu';
import OceaniaMobileMenu from './navmenu/OceaniaMobileMenu';

function QuickLinkCountries({ openCountryMenu, countryMenu, setCountryMenu, scrollToTop }) {

    const [asiaMenu, setAsiaMenu] = useState(false);
    const [southAmericaMenu, setSouthAmericaMenu] = useState(false);
    const [northAmericaMenu, setNorthAmericaMenu] = useState(false);
    const [europeMenu, setEuropeMenu] = useState(false);
    const [middleEastMenu, setMiddleEastMenu] = useState(false);
    const [oceaniaMenu, setOceaniaMenu] = useState(false);

    const closeAllMenus = () => {
        setCountryMenu(false);
        setAsiaMenu(false);setSouthAmericaMenu(false);setNorthAmericaMenu(false);
        setEuropeMenu(false);setMiddleEastMenu(false);setOceaniaMenu(false);
    }

    const closeMobileMenu = () => {setCountryMenu(false);}
    const toggleAsiaMenu = () => {setAsiaMenu(!asiaMenu);}
    const toggleSouthAmericaMenu = () => {setSouthAmericaMenu(!southAmericaMenu);}
    const toggleNorthAmericaMenu = () => {setNorthAmericaMenu(!northAmericaMenu);}
    const toggleEuropeMenu = () => {setEuropeMenu(!europeMenu);}
    const toggleMiddleEastMenu = () => {setMiddleEastMenu(!middleEastMenu);}
    const toggleOceaniaMenu = () => {setOceaniaMenu(!oceaniaMenu);}

    const back = () => {
        setAsiaMenu(false);
        setSouthAmericaMenu(false);
        setNorthAmericaMenu(false);
        setEuropeMenu(false);
        setMiddleEastMenu(false);
        setOceaniaMenu(false);
        setCountryMenu(true);
    }

    const closeCountryMenus = () => {
        setAsiaMenu(false);
        setSouthAmericaMenu(false);
        setNorthAmericaMenu(false);
        setEuropeMenu(false);
        setMiddleEastMenu(false);
        setOceaniaMenu(false);
    }


    return (
        <>
            <div className={`quicklinks-countries d-flex off-screen ${countryMenu ? 'right' : '' }`}>
                <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={closeAllMenus} style={{color: "white"}}>                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </button>
                <div className="inner">
                    {/* <Link to={"/"} className="countries-menu" onClick={closeAllMenus}>
                        <div className='d-flex align-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "0px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                            Back
                        </div>
                    </Link> */}

                    {/* <h2 className="text-center" style={{color: "white", fontSize: "20px", marginLeft: "10px"}}>🌎 Countries</h2>
                    <hr class="w-95" style={{margin: "0px auto 5px 0px"}} /> */}
                    <div className="countries-menu" onClick={() => { toggleAsiaMenu(); }}><div>⛩ Asia</div></div>
                    <div className="countries-menu" onClick={() => { toggleSouthAmericaMenu(); }}><div>💃🏻 South America</div></div>
                    {/* <div className="countries-menu" onClick={() => { closeMobileMenu(); toggleNorthAmericaMenu(); }}><div>🗽 North America</div></div> */}
                    <div className="countries-menu" onClick={() => { toggleEuropeMenu(); }}><div>🇪🇺 Europe</div></div>
                    <div className="countries-menu" onClick={() => { toggleMiddleEastMenu(); }}><div>🕋 Middle East</div></div>
                    {/* <div className="countries-menu" onClick={() => { closeMobileMenu(); toggleOceaniaMenu(); }}><div>🌊 Oceania</div></div> */}

                    <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px", marginTop: "25px", marginBottom: "5px"}}/>

                <div id="home-categories" className={`categories-wrapper hp-quick-links d-flex`}>
                <div className="inner-categories justify-center" style={{marginBottom: "100px"}}>
                    <h2 className="text-center" style={{marginTop:"20px"}}>⏩ Shortcuts</h2>
                    <Link to={`/asia/bali`} className="bali-img background-img" onClick={() => { scrollToTop(); }}><div>🏝 Bali</div></Link>
                    <Link to={`/asia/thailand`} className="thailand-img background-img" onClick={() => { scrollToTop(); }}><div>🇹🇭 Thailand</div></Link>
                    <Link to={`/asia/japan`} className="japan-img background-img" onClick={() => { scrollToTop(); }}><div>🇯🇵 Japan</div></Link>
                    <Link to={`/asia/korea`} className="korea-img background-img" onClick={() => { scrollToTop(); }}><div>🇰🇷 Korea</div></Link>
                    <Link to={`/asia/vietnam`} className="vietnam-img background-img" onClick={() => { scrollToTop(); }}><div>🇻🇳 Vietnam</div></Link>

                    <Link to={`/northamerica/newyork`} className="newyork-img background-img" onClick={() => { scrollToTop(); }}><div>🗽 New York</div></Link>
                    <Link to={`/northamerica/sanfrancisco`} className="sanfrancisco-img background-img" onClick={() => { scrollToTop(); }}><div>🇺🇸 San Francisco</div></Link>

                    <Link to={`/southamerica/brazil`} className="brazil-img background-img" onClick={() => { scrollToTop(); }}><div>🇧🇷 Brazil</div></Link>
                    <Link to={`/southamerica/colombia`} className="colombia-img background-img" onClick={() => { scrollToTop(); }}><div>🇨🇴 Colombia</div></Link>
                    <Link to={`/southamerica/mexico`} className="mexico-img background-img" onClick={() => { scrollToTop(); }}><div>🇲🇽 Mexico</div></Link>
                    <Link to={`/southamerica/costarica`} className="costarica-img background-img" onClick={() => { scrollToTop(); }}><div>🇨🇷 Costa Rica</div></Link>
                    <Link to={`/europe/portugal`} className="portugal-img background-img" onClick={() => { scrollToTop(); }}><div>🇵🇹 Portugal</div></Link>
                    <Link to={`/europe/italy`} className="italy-img background-img" onClick={() => { scrollToTop(); }}><div>🇮🇹 Italy</div></Link>
                    <Link to={`/europe/spain`} className="spain-img background-img" onClick={() => { scrollToTop(); }}><div>🇪🇸 Spain</div></Link>
                    <div style={{height:"400px"}}></div>
                </div>
            </div>

            </div>

            </div>

            <div className={`quicklinks-countries d-flex off-screen ${asiaMenu ? 'right' : '' }`}>
                {/* <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={closeCountryMenus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </button> */}
                <div className="inner">
                    <AsiaMobileMenu asiaMenu={asiaMenu} toggleAsiaMenu={toggleAsiaMenu} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus}/>
                </div>
            </div>
            <div className={`quicklinks-countries d-flex off-screen ${southAmericaMenu ? 'right' : '' }`}>
                {/* <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={closeCountryMenus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </button> */}
                <div className="inner">
                    <SouthAmericaMobileMenu southAmericaMenu={southAmericaMenu} toggleSouthAmericaMenu={toggleSouthAmericaMenu} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus}/>
                </div>
            </div>
            <div className={`quicklinks-countries d-flex off-screen ${europeMenu ? 'right' : '' }`}>
                {/* <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={closeCountryMenus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </button> */}
                <div className="inner">
                    <EuropeMobileMenu europeMenu={europeMenu} toggleSouthAmericaMenu={toggleEuropeMenu} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus}/>
                </div>
            </div>
            <div className={`quicklinks-countries d-flex off-screen ${middleEastMenu ? 'right' : '' }`}>
                {/* <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={closeCountryMenus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </button> */}
                <div className="inner">
                    <MiddleEastMobileMenu middleEastMenu={middleEastMenu} toggleMiddleEastMenu={toggleMiddleEastMenu} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus}/>
                </div>
            </div>
        </>
    );
};

export default QuickLinkCountries;