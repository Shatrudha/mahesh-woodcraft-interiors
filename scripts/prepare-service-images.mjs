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
  "services"
);

const serviceImages = [
  {
    source: "IMG_20240826_174333",
    output: "modular-kitchen.webp",
  },
  {
    source: "IMG_20260912_171031",
    output: "wardrobe.webp",
  },
  {
    source: "IMG_20260903_163013",
    output: "tv-unit.webp",
  },
  {
    source: "IMG-20250922-WA0002",
    output: "custom-furniture.webp",
  },
];

fs.mkdirSync(outputFolder, {
  recursive: true,
});

const files = fs.readdirSync(sourceFolder);

for (const service of serviceImages) {
  const file = files.find(
    (item) =>
      path.parse(item).name === service.source
  );

  if (!file) {
    console.warn(
      `Image not found: ${service.source}`
    );

    continue;
  }

  const input = path.join(sourceFolder, file);

  const output = path.join(
    outputFolder,
    service.output
  );

  await sharp(input)
    .rotate()
    .resize({
      width: 900,
      height: 600,
      fit: "cover",
      position: "centre",
    })
    .webp({
      quality: 82,
    })
    .toFile(output);

  console.log(`✓ ${service.output}`);
}

console.log("Service images prepared.");