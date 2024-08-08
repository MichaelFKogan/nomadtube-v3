import React, {useState} from 'react'
import youtube from '../api/youtube';
import axios from 'axios';
import Card from "../components/Card"

function SearchManual() {
    const [searchTerm, setSearchTerm] = useState("");
    const [pageToken, setPageToken] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // new state variable to keep track of current page number
    const [videos, setVideos] = useState([]);


    // handle the change event for the input field
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      }
    
        // function to handle form submission
        const handleSubmit = async (event) => {
          event.preventDefault();
          try {
          // Make the api call with searchTerm as the 'q' parameter
            const { data } = await youtube.get("search", {
              params: {
                q: searchTerm,
                part: "snippet,id",
                type: "video",
                relevanceLanguage: "en",
                // pageToken: pageToken,
                pageToken: '', // Reset pageToken for new searches
              //   order: "date",
              order: "relevance",
              //   publishedAfter: "2020-01-01T00:00:00Z",
              maxResults: 50, // Updated maxResults to 50
  
              }
            });
  
            const videos = await Promise.all(
              data.items.map(async (item) => {
                const videoId = item.id.videoId;
                const { data } = await youtube.get("videos", {
                  params: {
                    id: videoId,
                    part: "statistics,contentDetails"
                  }
                });
  
                const videoDetails = data.items[0];
                // const duration = moment.duration(videoDetails.contentDetails.duration).asSeconds();
                
                // if (duration <= 60) {
                //   return null; // Exclude shorts
                // }

                return {
                  videoId: item.id.videoId
                };
              })
            );
            setVideos(videos.filter(video => video !== null));
            setPageToken(data.nextPageToken);
            setCurrentPage(1);
  
            // send data to server
            await axios.post('http://localhost:5000/write', { videos, searchTerm })
            .then(() => console.log('Data sent to server'))
            .catch(error => console.error(error.response));  // <-- Handle errors here
            console.log('Data sent to server');
  
          } catch (error) {
            console.error(error);
          }
      }
  
        // function to handle next page button click
        const handleNextPage = async () => {
          if (currentPage > 2) return; // check if current page is greater than 2
          try {
              const { data } = await youtube.get("search", {
                params: {
                  q: searchTerm,
                  part: "snippet,id",
                  type: "video",
                  relevanceLanguage: "en",
                  pageToken: pageToken,
                  order: "relevance",
                  // publishedAfter: "2021-01-01T00:00:00Z",
                  maxResults: 50, // Updated maxResults to 50
                }
              });
  
    
              const newVideos = await Promise.all(
                data.items.map(async (item) => {
                  const videoId = item.id.videoId;
                  const { data } = await youtube.get("videos", {
                    params: {
                      id: videoId,
                      part: "statistics,contentDetails"
                    }
                  });
  
                  const duration = data.items[0].contentDetails.duration;
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
              setVideos(prevVideos => [...prevVideos, ...newVideos.filter(video => video !== null)]);
              setPageToken(data.nextPageToken);
              setCurrentPage(currentPage + 1); // increment the current page number
          } catch (error) {
              console.error(error);
          }
        }

        // Helper function to parse ISO 8601 duration
        const parseDuration = (duration) => {
          // Example: "PT1M30S" (1 minute 30 seconds)
          const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
          const hours = parseInt(match[1] || '0', 10) || 0;
          const minutes = parseInt(match[2] || '0', 10) || 0;
          const seconds = parseInt(match[3] || '0', 10) || 0;

          return hours * 3600 + minutes * 60 + seconds;
        }
    
    return(
        <>
    
            <h1>Search Page</h1>

            <div fluid className="video-search" style={{marginBottom:"200px", textAlign: "left"}}>
    
                <form onSubmit={handleSubmit}>
                    <input style={{fontFamily: "Lato"}}
                        type="text" 
                        placeholder="Search videos"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button type="submit">Search</button>
                    <button type="button" onClick={handleNextPage}>Next Page</button> {/* Added button for next page */}
                </form>

                <hr style={{marginTop: "40px", marginBottom: "40px"}}/>

                <span style={{marginLeft: "5px", fontFamily: "Lato"}}>{'{"videos":['}</span>
                {videos.map((video, index) => (
                    <div key={index}>
                    <span style={{marginLeft: "5px"}}>{'{'}</span>

                    <span style={{fontFamily: "Lato"}}>{'"videoId": "'+video.videoId+'"'}</span>

                    <span style={{ marginLeft: "5px" }}>{index !== videos.length - 1 ? '},' : '}'}</span>
                    
                    </div>
                ))}
                        <span style={{marginLeft: "5px", fontFamily: "Lato"}}>{']}'}</span>

                
                <hr style={{marginTop: "40px", marginBottom: "40px"}}/>
                <h2 style={{textAlign: "center"}}>{searchTerm}</h2>
                {videos.map((video, index) => (
                    index === videos.length - 1 && <h3 key={index} style={{textAlign: "center"}}>{index}</h3>
                ))}

                <div className="cards-wrapper">
                    {videos.map((video, index) => (
                        <Card data={video} key={index} cardKey={index} />
                    ))}
                </div>

                </div>

        </>
    )}

export default SearchManual;