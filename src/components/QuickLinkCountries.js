import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/quicklinks.css"
import AsiaMobileMenu from './navmenu/AsiaMobileMenu';

function QuickLinkCountries({ className }) {

    const [countryMenu, setCountryMenu] = useState(false);
    const [asiaMenu, setAsiaMenu] = useState(false);


    const openCountryMenu = () => {setCountryMenu(true);}

    const closeAllMenus = () => {
        setCountryMenu(false);
        setAsiaMenu(false);
    }

    const closeMobileMenu = () => {setCountryMenu(false);}
    const toggleAsiaMenu = () => {setAsiaMenu(!asiaMenu);}

    const back = () => {
        setAsiaMenu(false);
        setCountryMenu(true);
    }

    const closeCountryMenus = () => {setAsiaMenu(false);}




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
                    <Link to={"/southamerica"} className="countries-menu" onClick={closeMobileMenu}><div>💃🏻 South America</div></Link>
                    <Link to={"/europe"} className="countries-menu" onClick={closeMobileMenu}><div>🇪🇺 Europe</div></Link>
                    <Link to={"/middleeast"} className="countries-menu" onClick={closeMobileMenu}><div>🕋 Middle East</div></Link>

                </div>
            </div>

            <div className={`quicklinks-countries ${asiaMenu ? 'd-flex' : 'd-none' }`}>
                <button id="close-quick-links" className="card-button close-card second-button" data-tooltip="Close" onClick={closeAllMenus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x mobile"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                </button>
                <div className="inner">
                    <AsiaMobileMenu asiaMenu={asiaMenu} toggleAsiaMenu={toggleAsiaMenu} back={back} closeCountryMenus={closeCountryMenus} closeAllMenus={closeAllMenus}/>
                </div>
            </div>
        </>
    );
};

export default QuickLinkCountries;