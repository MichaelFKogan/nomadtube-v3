import React from 'react';
import { useParams, Link } from 'react-router-dom';

function TotalVideos() {
    const { continent, country, city, category } = useParams();

    let data;

    // Check if it's the homepage
    if (!continent && !country && !city && !category) {
        try {
            data = require(`../data/home.json`);
        } catch (homeError) {
            console.error("Error loading home data:", homeError);
        }
    }

    // Try loading category data first
    if (!data && category && city) {
        try {
            data = require(`../data/${continent}/${country}/${city}/${category}.json`);
        } catch (categoryError) {
            console.error("Error loading category data:", categoryError);
        }
    }

    // If category data is not found, try loading city data
    if (!data && city) {
        try {
            data = require(`../data/${continent}/${country}/${city}/${city}.json`);
        } catch (cityError) {
            console.error("Error loading city data:", cityError);
        }
    }

    // If city data is not found, try loading country data
    if (!data && country) {
        try {
            data = require(`../data/${continent}/${country}/${country}.json`);
        } catch (countryError) {
            console.error("Error loading country data:", countryError);
        }
    }

    return (
        <div className="total-videos">
            Total Videos: {data?.videos?.length || 0}
        </div>
    );
}

export default TotalVideos;
