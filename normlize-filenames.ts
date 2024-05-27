import fs from "fs";
import { pathExistsSync, renameSync, statSync } from "fs-extra";
import path from "path";

// Function to normalize file names
const normalizeFileName = (fileName: string) => {
  // Replace spaces and hyphens with underscores
  let newName = fileName.replace(/[\s-]+/g, "_");

  // Replace leading zeros in numbers
  newName = newName.replace(/(\d+)/g, (match) => {
    return parseInt(match, 10).toString();
  });

  return newName;
};

// Function to generate a unique file name if there's a conflict
const getUniqueFileName = (folderPath: string, fileName: string) => {
  let baseName = path.basename(fileName, path.extname(fileName));
  const ext = path.extname(fileName);
  let newFileName = fileName;
  let counter = 1;

  while (pathExistsSync(path.join(folderPath, newFileName))) {
    newFileName = `${baseName}_${counter}${ext}`;
    counter++;
  }

  return newFileName;
};

// Function to traverse and rename files in a folder
const traverseAndRename = (folderPath: string) => {
  try {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      const fullPath = path.join(folderPath, file);
      const stats = statSync(fullPath);

      if (stats.isFile()) {
        const normalizedFileName = normalizeFileName(file);
        let newFileName = normalizedFileName;

        if (normalizedFileName !== file) {
          newFileName = getUniqueFileName(folderPath, normalizedFileName);
        }

        const newFullPath = path.join(folderPath, newFileName);

        // Rename the file if the name has changed
        if (fullPath !== newFullPath) {
          renameSync(fullPath, newFullPath);
          console.log(`Renamed: ${fullPath} -> ${newFullPath}`);
        }
      } else if (stats.isDirectory()) {
        // Recursively traverse subdirectories
        traverseAndRename(fullPath);
      }
    }
  } catch (err) {
    console.error("Error processing directory:", err);
  }
};

// Path to the folder to normalize file names
const folderPath = "./svg";

// Start the normalization process
traverseAndRename(folderPath);
