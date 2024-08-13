import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
import AsiaMobileMenu from './navmenu/AsiaMobileMenu';

function Navbar({ toggleAsia, className }) {

    const [mobileMenu, setMobileMenu] = useState(false);

    const [countryMenu, setCountryMenu] = useState(false);
    const [asiaMenu, setAsiaMenu] = useState(false);

    const toggleMobileMenu = () => { countryMenu ? setMobileMenu(false) : setMobileMenu(!mobileMenu); setCountryMenu(false); }

    const toggleAsiaMenu = () => { setAsiaMenu(!asiaMenu); closeMobileMenu(); }
    const closeMobileMenu = () => { setMobileMenu(false); setCountryMenu(true); };

    const closeCountryMenus = () => { setAsiaMenu(false); };

    const closeAllMenus = () => { setMobileMenu(false); setAsiaMenu(false); setCountryMenu(false); };

    const back = () => { setMobileMenu(true); }

    return (
        <>
            {/* DESKTOP MENU */}
            <div className="navbar d-flex align-center space-between desktop">
                <div className='d-flex align-center'>
                    <Link to={"/"} className="nav-menu nav-logo desktop"><div>🏝 NomadTube</div></Link>
                </div>

                <div className="d-flex align-center col-gap-5">
                    <Link to={"/asia"} className="nav-menu"><div>Asia</div></Link>
                    {/* <div className="nav-menu" onClick={toggleAsia}><div>Asia</div></div> */}
                    <Link to={"/southamerica"} className="nav-menu"><div>South America</div></Link>
                    <Link to={"/europe"} className="nav-menu"><div>Europe</div></Link>
                    {/* <Link to={"/northamerica"} className="nav-menu"><div>North America</div></Link> */}
                    <Link to={"/middleeast"} className="nav-menu"><div>Middle East</div></Link>
                </div>

                <div className="d-flex align-center">
                    <Link to={"/search"} className="nav-menu nav-home desktop"><div>Search</div></Link>
                    <Link to={"/all"} className="nav-menu nav-home desktop"><div>All</div></Link>
                    <div className="nav-menu nav-sound desktop">🔈</div>
                </div>

            </div>

            {/* MOBILE MENU */}
            <div className={`navbar d-flex align-center space-between mobile ${className}`}>

                <div className='d-flex align-center'>
                    <div className="nav-menu hamburger" onClick={() => { toggleMobileMenu(); closeCountryMenus(); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </div>
                    <Link to={"/"} className="nav-menu"><div>🏠</div></Link>
                </div>

                <Link to={"/"} className="nav-menu nav-logo "><div>🏝 NomadTube</div></Link>

                <div className='d-flex align-center' style={{ opacity: "0", visibility: "0" }}>
                    <div className="nav-menu hamburger" onClick={() => { toggleMobileMenu(); closeCountryMenus(); }}  style={{ opacity: "0", visibility: "0" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </div>
                    <Link to={"/"} className="nav-menu" style={{ opacity: "0", visibility: "0" }}><div>🏠</div></Link>
                </div>

            </div>

            {/* <div className={`navbar d-flex align-center space-between mobile ${className}`} style={{height: "50px"}}>

                    <div className="nav-menu" onClick={() => { closeMobileMenu(); toggleAsiaMenu(); }} style={{ marginLeft: "0px"}}><div>Asia</div></div>
                    <Link to={"/southamerica"} className="nav-menu" onClick={closeMobileMenu} style={{ textWrap: "nowrap" }}><div>South America</div></Link>
                    <Link to={"/europe"} className="nav-menu" onClick={closeMobileMenu}><div>Europe</div></Link>
                    <Link to={"/middleeast"} className="nav-menu" onClick={closeMobileMenu} style={{ textWrap: "nowrap" }}><div>Middle East</div></Link>

            </div> */}

            <div className={`mobile-menu ${mobileMenu ? 'd-block' : 'd-none'}`}>
                {/* <Link to={"/"} className="nav-menu" onClick={closeAllMenus}><div>🏠 Home</div></Link> */}
                <div className="nav-menu" onClick={() => { closeMobileMenu(); toggleAsiaMenu(); }} style={{ marginLeft: "0px", paddingTop:"5px", paddingBottom: "27px" }}><div>🔗 Quick Links</div></div>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px", marginBottom: "25px"}}/>

                <div className="nav-menu" onClick={() => { closeMobileMenu(); toggleAsiaMenu(); }} style={{ marginLeft: "0px" }}><div>⛩ Asia</div></div>
                <Link to={"/southamerica"} className="nav-menu" onClick={closeMobileMenu}><div>💃🏻 South America</div></Link>
                <Link to={"/southamerica"} className="nav-menu" onClick={closeMobileMenu}><div>🗽 North America</div></Link>
                <Link to={"/europe"} className="nav-menu" onClick={closeMobileMenu}><div>🇪🇺 Europe</div></Link>
                <Link to={"/middleeast"} className="nav-menu" onClick={closeMobileMenu}><div>🕋 Middle East</div></Link>
                <Link to={"/europe"} className="nav-menu" onClick={closeMobileMenu}><div>🌊 Oceania</div></Link>
            </div>

            <AsiaMobileMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} toggleAsiaMenu={toggleAsiaMenu} asiaMenu={asiaMenu} closeCountryMenus={closeCountryMenus} back={back} closeAllMenus={closeAllMenus} />

        </>
    );
};

export default Navbar;