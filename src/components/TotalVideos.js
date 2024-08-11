import React from 'react';

function TotalVideos({data, className}) {

    return (
        <div className={`total-videos ${className}`}>
            Videos: {data.videos.length}
        </div>
    );
}

export default TotalVideos;
