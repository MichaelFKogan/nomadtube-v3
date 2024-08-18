import React from 'react';

function TotalVideos({data}) {

    // Format the number of videos with commas
    const formattedVideoCount = data.videos.length.toLocaleString();

    return (
        <div className={`total-videos`}>
            <div className='d-flex nowrap'>
            <div className="total-vids-margin">Videos: </div> <div>{formattedVideoCount}</div>
            </div>
        </div>
    );
}

export default TotalVideos;
