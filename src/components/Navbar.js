import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

function Navbar({toggleAsia}) {

    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const toggleMobileMenu  = () => {setOpenMobileMenu(!openMobileMenu);}
    const closeMobileMenu  = () => {setOpenMobileMenu(false)};

    return (
    <>
        <div className="navbar d-flex align-center space-between desktop">
            <div className='d-flex align-center'>
                <Link to={"/"} className="nav-menu nav-logo desktop"><div>🏝 NomadTube</div></Link>
            </div>

            <div className="d-flex align-center col-gap-5">
                <Link to={"/asia"} className="nav-menu"><div>⛩ Asia</div></Link>
                    {/* <div className="nav-menu" onClick={toggleAsia}><div>Asia</div></div> */}
                <Link to={"/southamerica"} className="nav-menu"><div>💃🏻 South America</div></Link>
                <Link to={"/europe"} className="nav-menu"><div>🇪🇺 Europe</div></Link>
                    {/* <Link to={"/northamerica"} className="nav-menu"><div>North America</div></Link> */}
                <Link to={"/middleeast"} className="nav-menu"><div>🕋 Middle East</div></Link>
            </div>

            <div className="d-flex align-center">
                <Link to={"/search"} className="nav-menu nav-home desktop"><div>Search</div></Link>
                <Link to={"/all"} className="nav-menu nav-home desktop"><div>All</div></Link>
                <div className="nav-menu nav-sound desktop">🔈</div>
            </div>

        </div>

        <div className="navbar d-flex align-center space-between mobile">
                <div className="nav-menu hamburger" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </div>

                <Link to={"/"} className="nav-menu nav-logo "><div>🏝 NomadTube</div></Link>

                <div to={"/"} className="nav-menu hamburger" style={{opacity: "0"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </div>
        </div>
        
        <div className={`mobile-menu ${openMobileMenu ? 'd-block' : 'd-none'}`}>
            <Link to={"/"} className="nav-menu" onClick={closeMobileMenu}><div>Home</div></Link>
            <Link to={"/asia"} className="nav-menu" onClick={closeMobileMenu}><div>⛩ Asia</div></Link>
            <Link to={"/southamerica"} className="nav-menu" onClick={closeMobileMenu}><div>💃🏻 South America</div></Link>
            <Link to={"/europe"} className="nav-menu" onClick={closeMobileMenu}><div>🇪🇺 Europe</div></Link>
            <Link to={"/middleeast"} className="nav-menu" onClick={closeMobileMenu}><div>🕋 Middle East</div></Link>
        </div>
    </>
    );
};

export default Navbar;