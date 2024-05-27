import { execSync } from "child_process";
import glob from "fast-glob";
import fs from "fs";
import path from "path";

// const flattenOutDir = "temp/flatten-output";

// async function flattenAll(g) {
//   const svgFiles = await glob(g, { ignore: "node_modules/**" });
//   for (const file of svgFiles) {
//     const newpath = file.split("/");
//     newpath.shift();
//     const folder = newpath.shift()
//     const newFilename = newpath.join("__").replace(",", "");
//     const dir = path.join(flattenOutDir, folder);
//     fs.mkdirSync(dir, { recursive: true });
//     fs.writeFileSync(
//       path.join(dir, newFilename),
//       fs.readFileSync(file, "utf-8"),
//       { encoding: "utf-8" }
//     );
//   }
// }

async function svgr() {
  execSync("yarn svgr", { stdio: "inherit" });
}

// function cleanupIndex() {
//   const indexFile = fs.readFileSync("temp/svgr-output/index.ts", "utf-8");
//   const lines = indexFile.split("\n");
//   const newLines = new Set(lines);
//   fs.writeFileSync("temp/svgr-output/index.ts", [...newLines].join("\n"), {
//     encoding: "utf-8",
//   });
// }

function compileTypes() {
  execSync("pnpm run tsc", { stdio: "inherit" });
}

function cleanup() {
  fs.rmSync("temp", { recursive: true });
}

// flattenAll("svg/huge-icon/**/*.svg")
//   .then(svgr)
  // .then(cleanupIndex)
  svgr()
  .then(compileTypes)
  .catch(console.error)
  // .finally(cleanup);
