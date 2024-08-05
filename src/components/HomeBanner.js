import React from "react";
import bannerImage from "../assets/img/banners/home-banner.jpeg";
import "../styles/banner.css";

function HomeBanner() {
    return (
        <div className="home-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="banner-content">
                <div className="banner-text">
                <h1 className="banner-title">Find Your Travel Inspiration</h1>
                <h2 className="banner-subtitle">A Collection Of Digital Nomad YouTube Videos</h2>
                <h3 className="banner-description">Discover new places, channels, and travel content</h3>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;
