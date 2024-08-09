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

    const sanitizedTerm = searchTerm.replace(/\s+/g, ''); // Remove whitespaces
    const filePath = path.join(__dirname, '../src/data/new', `${sanitizedTerm}.json`);

    // Ensure the 'data' directory exists
    if (!fs.existsSync(path.dirname(filePath))) {
        return res.status(500).send('Data directory does not exist');
    }

    // Read the existing data from the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        let existingData = { videos: [] };

        if (!err && data) {
            try {
                existingData = JSON.parse(data);
            } catch (parseError) {
                console.error('Error parsing JSON data:', parseError);
                return res.status(500).send('Error parsing JSON data');
            }
        }

        // Combine existing videos with the new ones
        const combinedVideos = [...existingData.videos, ...videos];

        // Ensure that combinedVideos is an array of objects with a videoId
        const validVideos = (combinedVideos || []).filter(v => v && typeof v === 'object' && v.videoId);

        // Remove duplicates based on videoId
        const uniqueVideos = Array.from(new Set(validVideos.map(v => v.videoId)))
            .map(id => validVideos.find(v => v.videoId === id));

        // console.log('Combined Videos:', combinedVideos);
        // console.log('Unique Videos:', uniqueVideos);

        const formattedVideos = JSON.stringify({ videos: uniqueVideos }, null, 1)
        .replace(/\n\s*/g, '')       // Remove all line breaks and indentation
        .replace(/},{/g, '},\n{')    // Add line breaks between objects
        .replace(/\[\{/g, '[\n{')    // Add a line break after the opening bracket
        .replace(/\}\]/g, '}\n]');   // Add a line break before the closing bracket

        // Write the updated data back to the file
        fs.writeFile(filePath, formattedVideos, (err) => {
            if (err) {
                console.error('Error saving file:', err);
                return res.status(500).send('Error saving file');
            }

            res.send('Videos saved successfully');
        });
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
