import React from "react";
import "../styles/banner.css";

function PageBanner({title, imgRoute}) {

    return (
        <div className={`page-banner ${imgRoute}-img`}>
            <div className="banner-content">
                <div className="banner-text">
                    <h1 className="banner-title">{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;
