/**
 * Repairs ChromeDriver downloads that WebdriverIO left half-extracted.
 *
 * After a Chrome update, WDIO downloads the matching ChromeDriver zip into
 * <tmpdir>/chromedriver, but on this machine the extraction sometimes stops
 * before the `chromedriver` binary is written, and runs fail with
 * "spawn .../chromedriver ENOENT". This script unzips any such download again.
 *
 * Usage: npm run fix:chromedriver
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const cacheDir = path.join(os.tmpdir(), "chromedriver");

if (!fs.existsSync(cacheDir)) {
  console.log(`No ChromeDriver cache at ${cacheDir} - nothing to fix.`);
  process.exit(0);
}

let fixed = 0;
for (const zip of fs.readdirSync(cacheDir).filter((f) => f.endsWith(".zip"))) {
  // e.g. 155.0.8059.41-chromedriver-mac-arm64.zip -> mac_arm-155.0.8059.41/chromedriver-mac-arm64/chromedriver
  const match = zip.match(/^(.+)-chromedriver-(mac-arm64|mac-x64|linux64|win64|win32)\.zip$/);
  if (!match) continue;
  const [, version, platform] = match;
  const folder = path.join(cacheDir, `${platform.replace("-", "_").replace(/64$/, "")}-${version}`);
  const binaryName = platform.startsWith("win") ? "chromedriver.exe" : "chromedriver";
  const binary = path.join(folder, `chromedriver-${platform}`, binaryName);
  if (fs.existsSync(binary)) continue;

  console.log(`Re-extracting ChromeDriver ${version} (${platform})...`);
  fs.mkdirSync(folder, { recursive: true });
  execFileSync("unzip", ["-o", "-q", path.join(cacheDir, zip), "-d", folder]);
  fs.chmodSync(binary, 0o755);
  fixed++;
}

console.log(fixed ? `Fixed ${fixed} ChromeDriver download(s).` : "All ChromeDriver downloads are complete.");
