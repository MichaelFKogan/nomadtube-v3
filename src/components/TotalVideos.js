import React from 'react';

function TotalVideos({data}) {

    return (
        <div className="total-videos">
            Total Videos: {data.videos.length}
        </div>
    );
}

export default TotalVideos;
