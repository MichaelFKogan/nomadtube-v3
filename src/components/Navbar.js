import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
import AsiaMobileMenu from './navmenu/AsiaMobileMenu';

function Navbar({ toggleAsia, className, scrollToTop, countryMenu }) {

    const [mobileMenu, setMobileMenu] = useState(false);

    const [, set] = useState(false);
    const [asiaMenu, setAsiaMenu] = useState(false);

    const toggleMobileMenu = () => { countryMenu ? setMobileMenu(false) : setMobileMenu(!mobileMenu); set(false); }

    const toggleAsiaMenu = () => { setAsiaMenu(!asiaMenu); closeMobileMenu(); }
    const closeMobileMenu = () => { setMobileMenu(false); set(true); };

    const closes = () => { setAsiaMenu(false); };

    const closeAllMenus = () => { setMobileMenu(false); setAsiaMenu(false); set(false); };

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
                    <div className="nav-menu hamburger" onClick={() => { toggleMobileMenu(); closes(); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </div>
                    {/* <Link to={"/"} className="nav-menu"><div>🏠</div></Link> */}
                </div>

                <Link to={"/"} className="nav-menu nav-logo "><div>🏝 NomadTube</div></Link>

                <div className='d-flex align-center' style={{ opacity: "0", visibility: "0" }}>
                    <div className="nav-menu hamburger" onClick={() => { toggleMobileMenu(); closes(); }}  style={{ opacity: "0", visibility: "0" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </div>
                    {/* <Link to={"/"} className="nav-menu" style={{ opacity: "0", visibility: "0" }}><div>🏠</div></Link> */}
                </div>

            </div>

            {/* <div className={`navbar d-flex align-center space-between mobile ${className}`} style={{height: "50px"}}>

                    <div className="nav-menu" onClick={() => { closeMobileMenu(); toggleAsiaMenu(); }} style={{ marginLeft: "0px"}}><div>Asia</div></div>
                    <Link to={"/southamerica"} className="nav-menu" onClick={closeMobileMenu} style={{ textWrap: "nowrap" }}><div>South America</div></Link>
                    <Link to={"/europe"} className="nav-menu" onClick={closeMobileMenu}><div>Europe</div></Link>
                    <Link to={"/middleeast"} className="nav-menu" onClick={closeMobileMenu} style={{ textWrap: "nowrap" }}><div>Middle East</div></Link>

            </div> */}

            <div className={`mobile-menu ${mobileMenu ? 'd-block' : 'd-none'}`}>
                <Link to={"/"} className="nav-menu" onClick={closeAllMenus}><div>🏠 Home</div></Link>
                <div className="nav-menu" onClick={() => { closeMobileMenu(); toggleAsiaMenu(); }} style={{ marginLeft: "0px", paddingTop:"5px", paddingBottom: "27px" }}><div>🔗 Quick Links</div></div>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px", marginBottom: "25px"}}/>

                <div className="nav-menu" onClick={() => { closeMobileMenu(); toggleAsiaMenu(); }} style={{ marginLeft: "0px" }}><div>⛩ Asia</div></div>
                <Link to={"/southamerica"} className="nav-menu" onClick={closeMobileMenu}><div>💃🏻 South America</div></Link>
                <Link to={"/southamerica"} className="nav-menu" onClick={closeMobileMenu}><div>🗽 North America</div></Link>
                <Link to={"/europe"} className="nav-menu" onClick={closeMobileMenu}><div>🇪🇺 Europe</div></Link>
                <Link to={"/middleeast"} className="nav-menu" onClick={closeMobileMenu}><div>🕋 Middle East</div></Link>
                <Link to={"/europe"} className="nav-menu" onClick={closeMobileMenu}><div>🌊 Oceania</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px", marginBottom: "25px"}}/>


       
            <div id="home-categories" className={`categories-wrapper hp-quick-links d-flex`}>
                <div className="inner-categories justify-center" style={{marginBottom: "100px"}}>
                    <h2 className="text-center" style={{marginTop:"20px"}}>🌎 Countries</h2>
                    <Link to={`/asia/bali`} className="bali-img background-img" onClick={() => { scrollToTop(); }}><div>🏝 Bali</div></Link>
                    <Link to={`/asia/thailand`} className="thailand-img background-img" onClick={() => { scrollToTop(); }}><div>🇹🇭 Thailand</div></Link>
                    <Link to={`/asia/japan`} className="japan-img background-img" onClick={() => { scrollToTop(); }}><div>🇯🇵 Japan</div></Link>
                    <Link to={`/asia/korea`} className="korea-img background-img" onClick={() => { scrollToTop(); }}><div>🇰🇷 Korea</div></Link>
                    <Link to={`/asia/vietnam`} className="vietnam-img background-img" onClick={() => { scrollToTop(); }}><div>🇻🇳 Vietnam</div></Link>

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

            <AsiaMobileMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} toggleAsiaMenu={toggleAsiaMenu} asiaMenu={asiaMenu} closes={closes} back={back} closeAllMenus={closeAllMenus} />

        </>
    );
};

export default Navbar;