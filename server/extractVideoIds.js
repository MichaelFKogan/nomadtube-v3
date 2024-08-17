const fs = require('fs');
const path = require('path');

// Define the base directory
const baseDir = path.join(__dirname, '..', 'src', 'data', 'asia', 'bali');

const outputFilePath = path.join(__dirname, '..', 'src', 'data', 'new', 'allbali-with-duplicates.json');

// Function to recursively find all vlog.json files
function findAllFiles(dir) {
  let allFiles = [];




  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

      // Check for a specific file (vlog.json)
      // if (fs.lstatSync(fullPath).isDirectory()) {
      //   allFiles = allFiles.concat(findAllFiles(fullPath));
      // } else if (file === 'vlog.json') {
      //   allFiles.push(fullPath);
      // }

      // Check for all files in a directory
      if (fs.lstatSync(fullPath).isDirectory()) {
        allFiles = allFiles.concat(findAllFiles(fullPath));
      } else if (path.extname(file) === '.json') { // Check if the file has a .json extension
        allFiles.push(fullPath);
      }

  });

  return allFiles;
}




// Function to extract videoIds from vlog files and store them
function extractVideoIds() {
  const allFiles = findAllFiles(baseDir);
  const videoIds = [];
  let index = 0;

  while (true) {
    let allFilesExhausted = true;

    allFiles.forEach((file) => {
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
