const fs = require('fs');
const path = require('path');

const continent = "asia"
const folder = "myanmar"

// const filename = "myanmar"
// const filename = "itinerary"
// const filename = "vlog"
// const filename = "digitalnomad"
// const filename = "streetfood"
// const filename = "walkingtour"
// const filename = "cost"
// const filename = "coworking"
const filename = "nightlife"

// Define the base directory
const baseDir = path.join(__dirname, '..', 'src', 'data', continent, folder);
const outputFilePath = path.join(__dirname, '..', 'server', filename+".json");

// Function to recursively find all vlog.json files
function findAllFiles(dir) {
  let allFiles = [];

  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    // SPECIFIC - Check for a specific file (ex: vlog.json)
        if (fs.lstatSync(fullPath).isDirectory()) {
        allFiles = allFiles.concat(findAllFiles(fullPath));
        } else if (file === filename+".json") {
        allFiles.push(fullPath);
        }

    // ALL - Check for all files in a directory
        // if (fs.lstatSync(fullPath).isDirectory()) {
        // allFiles = allFiles.concat(findAllFiles(fullPath));
        // // } else if (path.extname(file) === '.json') { // Check if the file has a .json extension
        // } else if (path.extname(file) === '.json' && path.basename(file) !== 'nightlife.json') {        
        // allFiles.push(fullPath);
        // }

  });

  return allFiles;
}

// Function to extract videoIds from vlog files, remove duplicates, and store them
function extractAndDeduplicateVideoIds() {
  const allFiles = findAllFiles(baseDir);
  const videoIds = [];
  let index = 0;

  while (true) {
    let allFilesExhausted = true;

    allFiles.forEach((file) => {
      const fileData = JSON.parse(fs.readFileSync(file, 'utf8'));

      if (fileData.videos && fileData.videos.length > index) {
        videoIds.push(fileData.videos[index].videoId);
        allFilesExhausted = false;
      }
    });

    if (allFilesExhausted) break;
    index++;
  }

  // Remove duplicates using a Set
  const uniqueVideoIds = Array.from(new Set(videoIds)).map(videoId => ({ videoId }));

  // Save the unique videoIds in the desired format
  const formattedVideos = JSON.stringify({ videos: uniqueVideoIds }, null, 1)
    .replace(/\n\s*/g, '')       // Remove all line breaks and indentation
    .replace(/},{/g, '},\n{')    // Add line breaks between objects
    .replace(/\[\{/g, '[\n{')    // Add a line break after the opening bracket
    .replace(/\}\]/g, '}\n]');   // Add a line break before the closing bracket

  fs.writeFileSync(outputFilePath, formattedVideos);
  console.log(`Duplicates removed and unique videoIds saved to ${outputFilePath}`);
}

// Run the function
extractAndDeduplicateVideoIds();
