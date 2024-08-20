import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import "../styles/navbar.css"

import AsiaDesktopMenu from './navmenu/AsiaDesktopMenu';
import SouthAmericaDesktopMenu from './navmenu/SouthAmericaDesktopMenu';
import EuropeDesktopMenu from './navmenu/EuropeDesktopMenu';
import MiddleEastDesktopMenu from './navmenu/MiddleEastDesktopMenu';

import AsiaMobileMenu from './navmenu/AsiaMobileMenu';
import SouthAmericaMobileMenu from './navmenu/SouthAmericaMobileMenu';
import EuropeMobileMenu from './navmenu/EuropeMobileMenu';
import MiddleEastMobileMenu from './navmenu/MiddleEastMobileMenu';

import QuickLinks from './QuickLinks';
import SpotifyPlayer from './SpotifyPlayer';

function Navbar({ toggleAsia, scrollToTop, countryMenu, categoriesDropdown, handleCategoriesDropdown }) {

    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;

    const [mobileMenu, setMobileMenu] = useState(false);
    const [asiaMenu, setAsiaMenu] = useState(false);
    const [southAmericaMenu, setSouthAmericaMenu] = useState(false);
    const [europeMenu, setEuropeMenu] = useState(false);
    const [middleEastMenu, setMiddleEastMenu] = useState(false);
    const menuRef = useRef(null);

    const [openSpotify, setOpenSpotify] = useState(false);


    const toggleMobileMenu = () => { 
        if (asiaMenu || southAmericaMenu || europeMenu || middleEastMenu) {
            setMobileMenu(false);
        } else {
            setMobileMenu(!mobileMenu);
        }
    }

    const toggleAsiaMenu = () => { setAsiaMenu(!asiaMenu);}
    const toggleSouthAmericaMenu = () => { setSouthAmericaMenu(!southAmericaMenu); }
    const toggleEuropeMenu = () => { setEuropeMenu(!europeMenu); }
    const toggleMiddleEastMenu = () => { setMiddleEastMenu(!middleEastMenu); }

    const closeMobileMenu = () => { setMobileMenu(false); };

    const closes = () => { setAsiaMenu(false); };

    const closeAllMenus = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(false);
        
        setAsiaMenu(false);
        setSouthAmericaMenu(false);
        setEuropeMenu(false);
        setMiddleEastMenu(false);
    }

    const back = () => { setMobileMenu(true); }

    const closeCountryMenus = () => {
        setAsiaMenu(false);
        setSouthAmericaMenu(false);
        setEuropeMenu(false);
        setMiddleEastMenu(false);
        // setNorthAmericaMenu(false);
        // setOceaniaMenu(false);
    }

    // Handle Clicks Outside the Menu to Close the Menu
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeAllMenus();
            }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    

    const toggleSpotifyPlayer = () => {
        setOpenSpotify(!openSpotify);
    }


    // const [desktopMenu, setDesktopMenu] = useState(false);
    // const [asiaMenuDesktop, setAsiaMenuDesktop] = useState(false);
    // const toggleAsiaMenuDesktop = () => { setAsiaMenuDesktop(!asiaMenuDesktop); closeDesktopMenu(); }

    // const closeDesktopMenu = () => { setDesktopMenu(false); };

    return (
        <>
            {/* DESKTOP MENU */}
            <div className={`navbar d-flex align-center space-between desktop ${currentPage !== 1 ? "navbar-white" : null}`}>
                <div className='d-flex align-center'>
                    <Link to={"/"} className="nav-menu nav-logo desktop"><div>🏝 NomadTube</div></Link>
                </div>

                <div ref={menuRef} className="d-flex align-center col-gap-5 pos-rel continents-menu">
                    <div className="nav-menu continent"  onClick={() => { closeCountryMenus(); toggleAsiaMenu(); }}><div>Asia</div></div>
                    <div className="nav-menu continent"  onClick={() => { closeCountryMenus(); toggleSouthAmericaMenu(); }}><div>South America</div></div>
                    <div className="nav-menu continent"  onClick={() => { closeCountryMenus(); toggleEuropeMenu(); }}><div>Europe</div></div>
                    <div className="nav-menu continent"  onClick={() => { closeCountryMenus(); toggleMiddleEastMenu(); }}><div>MiddleEast</div></div>


                    {/* <Link to={"/northamerica"} className="nav-menu"><div>North America</div></Link> */}
                    {/* <Link to={"/northamerica"} className="nav-menu"><div>Oceania</div></Link> */}


                    <AsiaDesktopMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} toggleAsiaMenu={toggleAsiaMenu} asiaMenu={asiaMenu} closes={closes} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus} className={"desktop"} />
                    <SouthAmericaDesktopMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} toggleSouthAmericaMenu={toggleSouthAmericaMenu} southAmericaMenu={southAmericaMenu} closes={closes} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus} className={"desktop"} />
                    <EuropeDesktopMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} toggleEuropeMenu={toggleEuropeMenu} europeMenu={europeMenu} closes={closes} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus} className={"desktop"} />
                    <MiddleEastDesktopMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} toggleMiddleEastMenu={toggleMiddleEastMenu} middleEastMenu={middleEastMenu} closes={closes} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus} className={"desktop"} />
                </div>

                {/* <div className="d-flex align-center">
                    <Link to={"/search"} className="nav-menu nav-home desktop"><div>Search</div></Link>
                    <Link to={"/all"} className="nav-menu nav-home desktop"><div>All</div></Link>
                    <div className="nav-menu nav-sound desktop">🔈</div>
                </div> */}


                <div className='d-flex align-center'>
                    <div className="nav-menu nav-logo desktop" style={{opacity: "0", visibility: "0"}}><div>🏝 NomadTu</div></div>
                    <div className="spotify-play-btn" onClick={toggleSpotifyPlayer}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                    </div>
                </div>

            </div>







            {/* MOBILE NAVBAR */}
            <div className={`navbar d-flex align-center space-between mobile ${currentPage !== 1 ? "navbar-white" : null}`}>

                <div className='d-flex align-center'>
                    <div className="nav-menu hamburger" onClick={() => { toggleMobileMenu(); closeCountryMenus(); }}>
                        {!mobileMenu ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                        }
                    </div>
                    {/* <Link to={"/"} className="nav-menu"><div>🏠</div></Link> */}
                </div>

                <Link to={"/"} className="nav-menu nav-logo " onClick={() => { closeAllMenus(); }}><div>🏝 NomadTube</div></Link>

                <div className='d-flex align-center'>
                    <div className="spotify-play-btn" onClick={toggleSpotifyPlayer}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                    </div>
                </div>

            </div>

            {/* <div className={`navbar d-flex align-center space-between mobile`} style={{height: "50px"}}>

                    <div className="nav-menu" onClick={() => { closeMobileMenu(); toggleAsiaMenu(); }} style={{ marginLeft: "0px"}}><div>Asia</div></div>
                    <Link to={"/southamerica"} className="nav-menu" onClick={closeMobileMenu} style={{ textWrap: "nowrap" }}><div>South America</div></Link>
                    <Link to={"/europe"} className="nav-menu" onClick={closeMobileMenu}><div>Europe</div></Link>
                    <Link to={"/middleeast"} className="nav-menu" onClick={closeMobileMenu} style={{ textWrap: "nowrap" }}><div>Middle East</div></Link>

            </div> */}

        {/* MOBILE INNER DROPDOWN MENU */}
            <div className={`mobile-menu main-mobile-menu d-block off-screen ${mobileMenu ? 'right' : '' }`}>
                <Link to={"/"} className="nav-menu" onClick={closeAllMenus}><div>🏠 Home</div></Link>
                <div className="nav-menu" onClick={() => { handleCategoriesDropdown(); }}><div>🔗 Quick Links</div></div>
                {/* <div className="nav-menu" onClick={() => { handleCategoriesDropdown(); }}><div>💯 All Videos</div></div> */}
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px", marginTop: "20px", marginBottom: "25px"}}/>

                {/* <h2 className="" style={{color: "white", fontSize: "20px", textAlign: "left", marginBottom: "20px"}}>🌎 Countries</h2> */}
                <div className="nav-menu" onClick={() => { toggleAsiaMenu(); }} style={{ marginLeft: "0px" }}><div>⛩ Asia</div></div>
                <div className="nav-menu" onClick={() => { toggleSouthAmericaMenu(); }} style={{ marginLeft: "0px" }}><div>💃🏻 South America</div></div>
                <div className="nav-menu" onClick={() => { toggleEuropeMenu(); }} style={{ marginLeft: "0px" }}><div>🇪🇺 Europe</div></div>
                <div className="nav-menu" onClick={() => { toggleMiddleEastMenu(); }} style={{ marginLeft: "0px" }}><div>🕋 The Middle East</div></div>


                {/* <Link to={"/northamerica"} className="nav-menu" onClick={closeMobileMenu}><div>🗽 North America</div></Link> */}


                {/* <Link to={"/europe"} className="nav-menu" onClick={closeMobileMenu}><div>🌊 Oceania</div></Link> */}
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px", marginBottom: "25px"}}/>


       
            <div id="home-categories" className={`categories-wrapper hp-quick-links d-flex shortcuts`} style={{overflowY: "visible"}}>
                <div className="inner-categories justify-center" style={{marginBottom: "100px"}}>
                    <h2 className="text-center" style={{marginTop:"20px"}}>⏩ Shortcuts</h2>
                    <Link to={`/asia/bali`} className="bali-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🏝 Bali</div></Link>
                    <Link to={`/asia/thailand`} className="thailand-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇹🇭 Thailand</div></Link>
                    <Link to={`/asia/japan`} className="japan-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇯🇵 Japan</div></Link>
                    <Link to={`/asia/korea`} className="korea-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇰🇷 Korea</div></Link>
                    <Link to={`/asia/vietnam`} className="vietnam-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇻🇳 Vietnam</div></Link>

                    <Link to={`/northamerica/newyork`} className="newyork-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🗽 New York</div></Link>
                    <Link to={`/northamerica/sanfrancisco`} className="sanfrancisco-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇺🇸 San Francisco</div></Link>

                    <Link to={`/southamerica/brazil`} className="brazil-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇧🇷 Brazil</div></Link>
                    <Link to={`/southamerica/colombia`} className="colombia-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇨🇴 Colombia</div></Link>
                    <Link to={`/southamerica/mexico`} className="mexico-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇲🇽 Mexico</div></Link>
                    <Link to={`/southamerica/costarica`} className="costarica-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇨🇷 Costa Rica</div></Link>
                    <Link to={`/europe/portugal`} className="portugal-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇵🇹 Portugal</div></Link>
                    <Link to={`/europe/italy`} className="italy-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇮🇹 Italy</div></Link>
                    <Link to={`/europe/spain`} className="spain-img background-img" onClick={() => { closeMobileMenu(); scrollToTop(); }}><div>🇪🇸 Spain</div></Link>
                    <div style={{height:"400px"}}></div>
                </div>
            </div>

            </div>
            
            <QuickLinks scrollToTop={scrollToTop} closeMobileMenu={closeMobileMenu} categoriesDropdown={categoriesDropdown} handleCategoriesDropdown={handleCategoriesDropdown} />    
            
            <AsiaMobileMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} toggleAsiaMenu={toggleAsiaMenu} asiaMenu={asiaMenu} closes={closes} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus} className={"mobile"}/>
            <SouthAmericaMobileMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} toggleSouthAmericaMenu={toggleSouthAmericaMenu} southAmericaMenu={southAmericaMenu} closes={closes} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus} className={"mobile"}/>
            <EuropeMobileMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} toggleEuropeMenu={toggleEuropeMenu} europeMenu={europeMenu} closes={closes} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus} className={"mobile"}/>
            <MiddleEastMobileMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} toggleMiddleEastMenu={toggleMiddleEastMenu} middleEastMenu={middleEastMenu} closes={closes} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus} className={"mobile"}/>

            <SpotifyPlayer openSpotify={openSpotify} toggleSpotifyPlayer={toggleSpotifyPlayer}/>

        </>
    );
};

export default Navbar;