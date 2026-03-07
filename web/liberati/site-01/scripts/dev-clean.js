const { rmSync } = require("fs");
const { spawnSync } = require("child_process");

try {
  rmSync(".next", { recursive: true, force: true });
} catch (_) {}

spawnSync("npx", ["next", "dev"], { stdio: "inherit", shell: true });
