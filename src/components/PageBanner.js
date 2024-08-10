import React from "react";
import "../styles/banner.css";

function PageBanner({title, imgRoute, className}) {

    return (
        <div className={`page-banner ${imgRoute}-img ${className}`}>
            <div className="banner-content">
                <div className="banner-text">
                    <h1 className="banner-title">{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;
