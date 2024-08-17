const fs = require('fs');
const path = require('path');

// Read the JSON file
const filePath = path.join(__dirname, '..', 'server', 'allbali-with-duplicates.json');
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Use a Set to remove duplicates
        const uniqueVideos = Array.from(new Set(jsonData.videos.map(video => video.videoId)))
            .map(videoId => ({ videoId }));

        // // Update the JSON data
        // const updatedData = { videos: uniqueVideos };

        // Define the new file path
        const newFilePath = path.join(__dirname, 'bali.json');

          // Save the videoIds in the desired format
          const formattedVideos = JSON.stringify({ videos: uniqueVideos }, null, 1)
          .replace(/\n\s*/g, '')       // Remove all line breaks and indentation
          .replace(/},{/g, '},\n{')    // Add line breaks between objects
          .replace(/\[\{/g, '[\n{')    // Add a line break after the opening bracket
          .replace(/\}\]/g, '}\n]');   // Add a line break before the closing bracket

        // Write the updated data to a new JSON file
        fs.writeFile(newFilePath, formattedVideos, 'utf8', (err) => {
            if (err) {
                console.error('Error writing the file:', err);
                return;
            }
            console.log(`Duplicates removed and new file created: ${newFilePath}`);
        });

    } catch (parseErr) {
        console.error('Error parsing the JSON:', parseErr);
    }
});
