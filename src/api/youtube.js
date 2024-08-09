//src/api/youtube.js
import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY_TWO;

if (!KEY) {
    throw new Error('REACT_APP_YOUTUBE_API_KEY is not defined');
}

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    }
})