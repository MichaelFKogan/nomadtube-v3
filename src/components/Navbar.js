import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

function Navbar() {

    return (
        <div className="navbar d-flex align-center space-between">
            <div className='d-flex align-center'>
                <Link to={"/"} className="nav-menu nav-logo"><div>🏝 NomadTube</div></Link>
                <Link to={"/"} className="nav-menu nav-home"><div>Home</div></Link>
            </div>

            <div className="d-flex align-center">
                <Link to={"/asia"} className="nav-menu"><div>Asia</div></Link>
                <Link to={"/southamerica"} className="nav-menu"><div>South America</div></Link>
                <Link to={"/europe"} className="nav-menu"><div>Europe</div></Link>
                <Link to={"/northamerica"} className="nav-menu"><div>North America</div></Link>
                <Link to={"/middleeast"} className="nav-menu"><div>Middle East</div></Link>
            </div>

            <div className="d-flex align-center">
                <div className="nav-menu nav-sound">🔈</div>
            </div>

        </div>
    );
};

export default Navbar;