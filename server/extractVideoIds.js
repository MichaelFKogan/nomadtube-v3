const fs = require('fs');
const path = require('path');

// Define the base directory
const baseDir = path.join(__dirname, '..', 'src', 'data');
const outputFilePath = path.join(__dirname, '..', 'src', 'data', 'new', 'vlog-duplicates.json');

// Function to recursively find all vlog.json files
function findVlogFiles(dir) {
  let vlogFiles = [];

  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      vlogFiles = vlogFiles.concat(findVlogFiles(fullPath));
    } else if (file === 'vlog.json') {
      vlogFiles.push(fullPath);
    }
  });

  return vlogFiles;
}

// Function to extract videoIds from vlog files and store them
function extractVideoIds() {
  const vlogFiles = findVlogFiles(baseDir);
  const videoIds = [];
  let index = 0;

  while (true) {
    let allFilesExhausted = true;

    vlogFiles.forEach((file) => {
      const fileData = JSON.parse(fs.readFileSync(file, 'utf8'));

      if (fileData.videos && fileData.videos.length > index) {
        videoIds.push({ videoId: fileData.videos[index].videoId });
        allFilesExhausted = false;
      }
    });

    if (allFilesExhausted) break;
    index++;
  }

  // Save the videoIds in the desired format
        const formattedVideos = JSON.stringify({ videos: videoIds }, null, 1)
        .replace(/\n\s*/g, '')       // Remove all line breaks and indentation
        .replace(/},{/g, '},\n{')    // Add line breaks between objects
        .replace(/\[\{/g, '[\n{')    // Add a line break after the opening bracket
        .replace(/\}\]/g, '}\n]');   // Add a line break before the closing bracket

  fs.writeFileSync(outputFilePath, formattedVideos);
  console.log(`Extracted videoIds saved to ${outputFilePath}`);
}

extractVideoIds();
