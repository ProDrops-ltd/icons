import fs from "fs";
import { pathExistsSync, renameSync, statSync } from "fs-extra";
import path from "path";

const normalizeFileName = (fileName: string) => {
  let newName = fileName.replace(/[\s-]+/g, "_");

  newName = newName.replace(/(\d+)/g, (match) => {
    return parseInt(match, 10).toString();
  });

  return newName;
};

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

        if (fullPath !== newFullPath) {
          renameSync(fullPath, newFullPath);
          console.log(`Renamed: ${fullPath} -> ${newFullPath}`);
        }
      } else if (stats.isDirectory()) {
        traverseAndRename(fullPath);
      }
    }
  } catch (err) {
    console.error("Error processing directory:", err);
  }
};

const folderPath = "./svg";

traverseAndRename(folderPath);
