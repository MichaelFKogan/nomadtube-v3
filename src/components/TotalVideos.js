import React from 'react';

function TotalVideos({data, className}) {

    // Format the number of videos with commas
    const formattedVideoCount = data.videos.length.toLocaleString();

    return (
        <div className={`total-videos ${className}`}>
            <div className='d-flex nowrap'>
            <div>Videos: </div> <div>{formattedVideoCount}</div>
            </div>
        </div>
    );
}

export default TotalVideos;
