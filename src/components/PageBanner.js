import React from "react";
import bannerImage from "../assets/img/banners/home-banner.jpeg";
import "../styles/banner.css";

function PageBanner({country, title}) {

    const bannerImagePath = `../assets/img/banners/${country.toLowerCase()}.jpeg`;

    return (
        <div className="page-banner">
            <img src={bannerImagePath}></img>
            <div className="banner-content">
                <div className="banner-text">
                <h1 className="banner-title">{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;
