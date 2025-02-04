const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Define paths
const buildPath = path.join(__dirname, "frontend", "build");
const publicPath = path.join(__dirname, "backend", "src", "public");

// Ensure the public directory exists
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
  console.log("✅ Created directory:", publicPath);
}

// Move the build folder
try {
  execSync(`mv ${buildPath} ${publicPath}`, { stdio: "inherit", shell: true });
  console.log("✅ Moved build folder to backend/src/public");
} catch (error) {
  console.error("❌ Error moving build folder:", error.message);
}
