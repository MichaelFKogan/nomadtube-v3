import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/quicklinks.css"
import AsiaMobileMenu from './navmenu/AsiaMobileMenu';
import SouthAmericaMobileMenu from './navmenu/SouthAmericaMobileMenu';
import NorthAmericaMobileMenu from './navmenu/NorthAmericaMobileMenu';
import EuropeMobileMenu from './navmenu/EuropeMobileMenu';
import MiddleEastMobileMenu from './navmenu/MiddleEastMobileMenu';
import OceaniaMobileMenu from './navmenu/OceaniaMobileMenu';

function QuickLinkCountries({ className }) {

    const [countryMenu, setCountryMenu] = useState(false);
    const [asiaMenu, setAsiaMenu] = useState(false);
    const [southAmericaMenu, setSouthAmericaMenu] = useState(false);
    const [northAmericaMenu, setNorthAmericaMenu] = useState(false);
    const [europeMenu, setEuropeMenu] = useState(false);
    const [middleEastMenu, setMiddleEastMenu] = useState(false);
    const [oceaniaMenu, setOceaniaMenu] = useState(false);


    const openCountryMenu = () => {setCountryMenu(true);}

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

        <div className='d-flex space-between black-bar-title mobile quick-links-countries-btn-mobile' onClick={openCountryMenu}>
            <h2 className="">🌏 Countries</h2>
        </div>

            <div className={`quicklinks-countries ${countryMenu ? 'd-flex' : 'd-none' }`}>
                <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={closeAllMenus} style={{color: "white"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x mobile"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                </button>
                <div className="inner">
                    {/* <Link to={"/"} className="countries-menu" onClick={closeAllMenus}>
                        <div className='d-flex align-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "0px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                            Back
                        </div>
                    </Link> */}
                    <div className="countries-menu" onClick={() => { closeMobileMenu(); toggleAsiaMenu(); }}><div>⛩ Asia</div></div>
                    <div className="countries-menu" onClick={() => { closeMobileMenu(); toggleSouthAmericaMenu(); }}><div>💃🏻 South America</div></div>
                    <div className="countries-menu" onClick={() => { closeMobileMenu(); toggleNorthAmericaMenu(); }}><div>🗽 North America</div></div>
                    <div className="countries-menu" onClick={() => { closeMobileMenu(); toggleEuropeMenu(); }}><div>🇪🇺 Europe</div></div>
                    <div className="countries-menu" onClick={() => { closeMobileMenu(); toggleMiddleEastMenu(); }}><div>🕋 Middle East</div></div>
                    <div className="countries-menu" onClick={() => { closeMobileMenu(); toggleOceaniaMenu(); }}><div>🌊 Oceania</div></div>

                </div>
            </div>

            <div className={`quicklinks-countries ${asiaMenu ? 'd-flex' : 'd-none' }`}>
                <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={closeAllMenus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x mobile"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                </button>
                <div className="inner">
                    <AsiaMobileMenu asiaMenu={asiaMenu} toggleAsiaMenu={toggleAsiaMenu} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus}/>
                    <SouthAmericaMobileMenu southAmericaMenu={southAmericaMenu} toggleSouthAmericaMenu={toggleSouthAmericaMenu} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus}/>
                </div>
            </div>

            <div className={`quicklinks-countries ${southAmericaMenu ? 'd-flex' : 'd-none' }`}>
                <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={closeAllMenus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x mobile"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                </button>
                <div className="inner">
                    <SouthAmericaMobileMenu southAmericaMenu={southAmericaMenu} toggleSouthAmericaMenu={toggleSouthAmericaMenu} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus}/>
                </div>
            </div>
        </>
    );
};

export default QuickLinkCountries;