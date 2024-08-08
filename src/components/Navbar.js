import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

function Navbar({toggleAsia}) {

    return (
        <div className="navbar d-flex align-center space-between">
            <div className='d-flex align-center'>
                <Link to={"/"} className="nav-menu nav-logo desktop"><div>🏝 NomadTube</div></Link>
            </div>

            <div className="d-flex align-center">
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
    );
};

export default Navbar;