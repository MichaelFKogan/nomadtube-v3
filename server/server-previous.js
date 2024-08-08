const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json());

app.post('/saveVideos', (req, res) => {
    const { videos, searchTerm } = req.body;
    console.log('Received videos:', videos);
    console.log('Search term:', searchTerm);
    
    const sanitizedTerm = searchTerm.replace(/\s+/g, ''); // Remove whitespaces
    const filePath = path.join(__dirname, '../src/data/new', `${sanitizedTerm}.json`);

    const jsonData = JSON.stringify({ videos });

    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error('Error saving file:', err);
            return res.status(500).json({ message: 'Error saving file' });
        } else {
            console.log('File saved successfully:', filePath);
            return res.status(200).json({ message: 'File saved successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
