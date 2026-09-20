import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");

const sourceFolder = path.resolve(
  projectRoot,
  "..",
  "Video"
);

const outputFolder = path.join(
  projectRoot,
  "public",
  "videos"
);

const dataFolder = path.join(
  projectRoot,
  "src",
  "data"
);

const outputDataFile = path.join(
  dataFolder,
  "videos.ts"
);

const allowedExtensions = new Set([
  ".mp4",
  ".webm",
  ".mov",
  ".m4v",
]);

if (!fs.existsSync(sourceFolder)) {
  console.error("Video folder not found:");
  console.error(sourceFolder);
  process.exit(1);
}

fs.rmSync(outputFolder, {
  recursive: true,
  force: true,
});

fs.mkdirSync(outputFolder, {
  recursive: true,
});

fs.mkdirSync(dataFolder, {
  recursive: true,
});

const allFiles = fs
  .readdirSync(sourceFolder)
  .filter((file) =>
    allowedExtensions.has(
      path.extname(file).toLowerCase()
    )
  );

const videoConfig = [
  {
    match: "5349",
    output: "wardrobe-craftsmanship",
    title: "Wardrobe Craftsmanship",
    subtitle: "Storage, fittings & finishing",
  },
  {
    match: "1713",
    output: "kitchen-storage-walkthrough",
    title: "Kitchen & Storage Walkthrough",
    subtitle: "Custom cabinetry for the home",
  },
  {
    match: "3628",
    output: "wooden-ceiling-interiors",
    title: "Wooden Ceiling & Interiors",
    subtitle: "Interior woodwork in a finished home",
  },
];

const videos = [];

videoConfig.forEach((config, index) => {
  const file = allFiles.find((item) =>
    path.parse(item).name.includes(config.match)
  );

  if (!file) {
    console.warn(
      `Video not found for: ${config.match}`
    );
    return;
  }

  const extension =
    path.extname(file).toLowerCase();

  const outputName =
    `${config.output}${extension}`;

  fs.copyFileSync(
    path.join(sourceFolder, file),
    path.join(outputFolder, outputName)
  );

  videos.push({
    id: index + 1,
    title: config.title,
    subtitle: config.subtitle,
    src: `/videos/${outputName}`,
  });

  console.log(
    `✓ ${file} → ${outputName}`
  );
});

const content = `export type ProjectVideo = {
  id: number;
  title: string;
  subtitle: string;
  src: string;
};

export const projectVideos: ProjectVideo[] =
${JSON.stringify(videos, null, 2)};
`;

fs.writeFileSync(
  outputDataFile,
  content
);

console.log("");
console.log(
  `${videos.length} videos prepared successfully.`
);