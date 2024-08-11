import React from 'react';

function TotalVideos({data, className}) {

    return (
        <div className={`total-videos ${className}`}>
            <div className='d-flex nowrap'>
            <div>Videos:</div> <div>{data.videos.length}</div>
            </div>
        </div>
    );
}

export default TotalVideos;
