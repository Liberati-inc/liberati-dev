const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

let hasError = false;

// Simple guard: flag long string literals in section/organism components.
// UI labels are fine; paragraphs/copy should live in src/content/*.

const targetFiles = [
  path.join(root, "components/sections/ServicesSection.js"),
];

const MAX_INLINE_LENGTH = 80;

for (const file of targetFiles) {
  const contents = fs.readFileSync(file, "utf8");

  const stringRegex = /(["'`])([^\\\1]+?)\1/g;
  let match;

  while ((match = stringRegex.exec(contents))) {
    const value = match[2].trim();
    if (value.length > MAX_INLINE_LENGTH) {
      console.error(
        `Content check failed: long inline string in ${path.relative(
          root,
          file
        )} -> "${value.slice(0, 60)}..."`
      );
      hasError = true;
    }
  }
}

if (hasError) {
  process.exit(1);
}

