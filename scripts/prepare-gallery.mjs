import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");

const sourceFolder = path.resolve(projectRoot, "..", "Photos");

const outputFolder = path.join(
  projectRoot,
  "public",
  "images",
  "projects",
  "all"
);

const thumbnailFolder = path.join(
  projectRoot,
  "public",
  "images",
  "projects",
  "thumbs"
);

const dataFolder = path.join(projectRoot, "src", "data");

const outputDataFile = path.join(
  dataFolder,
  "projects.ts"
);

const allowedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

const featuredFiles = new Set([
  "IMG_20240826_174333",
  "IMG_20240927_134914",
  "IMG_20250111_135643",
  "IMG_20260912_171031",
  "IMG_20260913_090104",
  "IMG_20260913_114234",
]);

function cleanFileName(name) {
  return name
    .toLowerCase()
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function processImages() {
  if (!fs.existsSync(sourceFolder)) {
    console.error("Photos folder not found:");
    console.error(sourceFolder);
    process.exit(1);
  }

  // Clean previously generated gallery
  fs.rmSync(outputFolder, {
    recursive: true,
    force: true,
  });

  fs.rmSync(thumbnailFolder, {
    recursive: true,
    force: true,
  });

  // Recreate output folders
  fs.mkdirSync(outputFolder, {
    recursive: true,
  });

  fs.mkdirSync(thumbnailFolder, {
    recursive: true,
  });

  fs.mkdirSync(dataFolder, {
    recursive: true,
  });

  const files = fs
    .readdirSync(sourceFolder)
    .filter((file) =>
      allowedExtensions.has(
        path.extname(file).toLowerCase()
      )
    )
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  const sourceBaseNames = new Set(
    files.map((file) => path.parse(file).name)
  );

  const missingFeatured = [...featuredFiles].filter(
    (name) => !sourceBaseNames.has(name)
  );

  if (missingFeatured.length > 0) {
    console.warn("Featured photos not found:");

    missingFeatured.forEach((name) =>
      console.warn(`- ${name}`)
    );
  }

  console.log(`Found ${files.length} images.`);

  const projects = [];

  let counter = 1;

  for (const file of files) {
    const inputPath = path.join(
      sourceFolder,
      file
    );

    const cleanName =
      cleanFileName(file) ||
      `project-${counter}`;

    const finalName =
      `${String(counter).padStart(3, "0")}-${cleanName}.webp`;

    const fullOutput = path.join(
      outputFolder,
      finalName
    );

    const thumbOutput = path.join(
      thumbnailFolder,
      finalName
    );

    try {
      await sharp(inputPath)
        .rotate()
        .resize({
          width: 1600,
          withoutEnlargement: true,
        })
        .webp({
          quality: 80,
        })
        .toFile(fullOutput);

      await sharp(inputPath)
        .rotate()
        .resize({
          width: 650,
          height: 500,
          fit: "cover",
          position: "centre",
        })
        .webp({
          quality: 72,
        })
        .toFile(thumbOutput);

      projects.push({
        id: counter,
        title: `Project ${counter}`,
        category: "all",
        image:
          `/images/projects/all/${finalName}`,
        thumbnail:
          `/images/projects/thumbs/${finalName}`,
        featured: featuredFiles.has(
          path.parse(file).name
        ),
      });

      console.log(`✓ ${file}`);

      counter++;
    } catch (error) {
      console.error(
        `✗ Could not process ${file}`
      );

      console.error(error.message);
    }
  }

  const tsContent = `export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  thumbnail: string;
  featured: boolean;
};

export const projects: Project[] = ${JSON.stringify(
    projects,
    null,
    2
  )};
`;

  fs.writeFileSync(
    outputDataFile,
    tsContent
  );

  console.log("");
  console.log(
    "Gallery preparation completed."
  );

  console.log(
    `${projects.length} images processed.`
  );

  console.log("Generated:");
  console.log(outputDataFile);
}

processImages();