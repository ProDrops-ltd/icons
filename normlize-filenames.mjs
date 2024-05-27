import { pathExists, readdir, stat, rename } from "fs-extra";
import { basename, extname, join } from "path";

// Function to normalize file names
const normalizeFileName = (fileName) => {
  // Replace spaces and hyphens with underscores
  let newName = fileName.replace(/[\s-]+/g, "_");

  // Replace leading zeros in numbers
  newName = newName.replace(/(\d+)/g, (match) => {
    return parseInt(match, 10).toString();
  });

  return newName;
};

// Function to generate a unique file name if there's a conflict
const getUniqueFileName = async (folderPath, fileName) => {
  let baseName = basename(fileName, extname(fileName));
  const ext = extname(fileName);
  let newFileName = fileName;
  let counter = 1;

  while (await pathExists(join(folderPath, newFileName))) {
    newFileName = `${baseName}_${counter}${ext}`;
    counter++;
  }

  return newFileName;
};

// Function to traverse and rename files in a folder
const traverseAndRename = async (folderPath) => {
  try {
    const files = await readdir(folderPath);

    for (const file of files) {
      const fullPath = join(folderPath, file);
      const stats = await stat(fullPath);

      if (stats.isFile()) {
        const normalizedFileName = normalizeFileName(file);
        let newFileName = normalizedFileName;

        if (normalizedFileName !== file) {
          newFileName = await getUniqueFileName(folderPath, normalizedFileName);
        }

        const newFullPath = join(folderPath, newFileName);

        // Rename the file if the name has changed
        if (fullPath !== newFullPath) {
          await rename(fullPath, newFullPath);
          console.log(`Renamed: ${fullPath} -> ${newFullPath}`);
        }
      } else if (stats.isDirectory()) {
        // Recursively traverse subdirectories
        await traverseAndRename(fullPath);
      }
    }
  } catch (err) {
    console.error("Error processing directory:", err);
  }
};

// Path to the folder to normalize file names
const folderPath = "./path/to/your/folder";

// Start the normalization process
traverseAndRename(folderPath);
