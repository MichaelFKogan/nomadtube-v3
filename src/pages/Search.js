import React, { useState, useRef } from 'react';
import youtube from '../api/youtube';
import axios from 'axios';
import Card from "../components/Card";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [pageToken, setPageToken] = useState('');
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const videosCount = useRef(0); // Use a ref to keep track of the number of videos
    const [quotaError, setQuotaError] = useState(false); // State for quota limit error
    const [searchFinished, setSearchFinished] = useState(false);


    // handle the change event for the input field
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    // function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true when starting a new search
        setVideos([]); // Reset videos
        setPageToken('');
        videosCount.current = 0; // Reset video count
        setQuotaError(false);
        await fetchVideos(); // Fetch the initial set of results
        setLoading(false); // Set loading to false after fetching
        saveVideosToFile(); // Save videos to file after fetching
        setSearchFinished(false);
    }

    // Function to fetch videos from the API
    const fetchVideos = async (token = '') => {
        try {
            const { data } = await youtube.get("search", {
                params: {
                    q: searchTerm,
                    part: "snippet,id",
                    type: "video",
                    relevanceLanguage: "en",
                    pageToken: token,
                    order: "relevance",
                    maxResults: 50,
                }
            });

            const newVideos = await Promise.all(
                data.items.map(async (item) => {
                    const videoId = item.id.videoId;
                    const { data: videoData } = await youtube.get("videos", {
                        params: {
                            id: videoId,
                            part: "statistics,contentDetails"
                        }
                    });

                    const duration = videoData.items[0].contentDetails.duration;
                    const durationInSeconds = parseDuration(duration);

                    // Exclude videos with a duration less than 60 seconds
                    if (durationInSeconds < 90) {
                        return null; // Filter out Shorts
                    }

                    return {
                        videoId: item.id.videoId
                    };
                })
            );

            // Filter out null values
            const filteredVideos = newVideos.filter(video => video !== null);


            setVideos(prevVideos => {
                const allVideos = [...prevVideos, ...newVideos.filter(video => video !== null)];
                const uniqueVideos = Array.from(new Set(allVideos.map(v => v.videoId)))
                    .map(id => allVideos.find(v => v.videoId === id));
                return uniqueVideos;
            });
            
            videosCount.current += newVideos.length; // Update video count
            setPageToken(data.nextPageToken);

            // Check if more results are needed
            if (videosCount.current < 400 && data.nextPageToken) {
                setTimeout(() => {
                    fetchVideos(data.nextPageToken); // Fetch next page after a delay
                }, 1000); // Adjust delay as needed
            }

            // If there are no more results, set searchFinished to true
            if (!data.nextPageToken) {
                setSearchFinished(true);
            }

            // If there are no more results, set searchFinished to true
            if (!data.nextPageToken || videosCount.current >= 400) {
                setSearchFinished(true); // Set searchFinished to true when no more results
            }

            const uniqueVideos = Array.from(new Set(filteredVideos.map(v => v.videoId)))
            .map(id => filteredVideos.find(v => v.videoId === id));
            // send data to server
            await axios.post('http://localhost:5000/saveVideos', { videos: uniqueVideos, searchTerm })
                .then(() => console.log('Data sent to server'))
                .catch(error => console.error(error.response));  // <-- Handle errors here
            } catch (error) {
                if (error.response && error.response.data.error.errors.some(err => err.reason === 'quotaExceeded')) {
                    setQuotaError(true); // Set quota error state if quota is exceeded
                }
                console.error(error);
            }
        }

        const saveVideosToFile = async () => {
            if (!videos || videos.length === 0) return;
        
            // Filter out null values
            const filteredVideos = videos.filter(video => video !== null);
        
            try {
                await axios.post('http://localhost:5000/saveVideos', { videos: filteredVideos, searchTerm });
                console.log('File save request sent to the server');
            } catch (err) {
                console.error('Error saving file on server:', err);
            }
        }
        

        // Helper function to parse ISO 8601 duration
        const parseDuration = (duration) => {
            // Example: "PT1M30S" (1 minute 30 seconds)
            const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
            if (!match) {
                console.error(`Duration string '${duration}' is not in the expected format.`);
                return 0; // Return a default value or handle the error as needed
            }
            const hours = parseInt(match[1] || '0', 10) || 0;
            const minutes = parseInt(match[2] || '0', 10) || 0;
            const seconds = parseInt(match[3] || '0', 10) || 0;

            return hours * 3600 + minutes * 60 + seconds;
        }

    return (
        <>
            <h1>Search Page</h1>
            <div fluid className="video-search" style={{ marginBottom: "200px", textAlign: "left" }}>
                <form onSubmit={handleSubmit}>
                    <input style={{ fontFamily: "Lato" }}
                        type="text"
                        placeholder="Search videos"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button type="submit">Search</button>
                </form>

                {videos.map((video, index) => (
                    index === videos.length - 1 && <h3 key={index} style={{ textAlign: "center" }}>{index}</h3>
                ))}

                {loading && <h2 style={{ textAlign: 'center' }}>Loading...</h2>}
                {searchFinished && <h2 style={{ color: 'red', textAlign: 'center' }}>No more results. Search finished.</h2>}
                {quotaError && <h2 style={{ color: 'red', textAlign: 'center' }}>Quota limit exceeded. Please try again later.</h2>}

                <hr style={{ marginTop: "40px", marginBottom: "40px" }} />

                <span style={{ marginLeft: "5px", fontFamily: "Lato" }}>{'{"videos":['}</span>
                {videos.map((video, index) => (
                    <div key={index}>
                        <span style={{ marginLeft: "5px" }}>{'{'}</span>
                        <span style={{ fontFamily: "Lato" }}>{'"videoId": "' + video.videoId + '"'}</span>
                        <span style={{ marginLeft: "5px" }}>{index !== videos.length - 1 ? '},' : '}'}</span>
                    </div>
                ))}
                <span style={{ marginLeft: "5px", fontFamily: "Lato" }}>{']}'}</span>

                <hr style={{ marginTop: "40px", marginBottom: "40px" }} />
                <h2 style={{ textAlign: "center" }}>{searchTerm}</h2>
                {videos.map((video, index) => (
                    index === videos.length - 1 && <h3 key={index} style={{ textAlign: "center" }}>{index}</h3>
                ))}

                <div className="cards-wrapper">
                    {videos.map((video, index) => (
                        <Card data={video} key={index} cardKey={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Search;
