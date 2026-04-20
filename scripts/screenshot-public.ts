import { chromium } from "playwright";
import { spawn } from "child_process";

async function main() {
  // Start preview server
  const server = spawn("bunx", ["vite", "preview", "--port", "4173"], {
    cwd: process.cwd(),
    stdio: "pipe",
  });

  // Wait for server to start
  await new Promise<void>((resolve) => {
    server.stdout?.on("data", (data: Buffer) => {
      const text = data.toString();
      if (text.includes("http://localhost:4173")) resolve();
    });
    setTimeout(resolve, 5000);
  });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  try {
    // Homepage
    await page.goto("http://localhost:4173/", { waitUntil: "networkidle", timeout: 15000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: "screenshots/homepage.png", fullPage: false });
    console.log("✓ Homepage screenshot saved");

    // Scroll to pillars
    await page.evaluate(() => {
      const el = document.getElementById("pillars");
      if (el) el.scrollIntoView({ behavior: "instant" });
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: "screenshots/pillars.png", fullPage: false });
    console.log("✓ Pillars screenshot saved");

    // Fashion vertical
    await page.goto("http://localhost:4173/vertical/fashion-style", { waitUntil: "networkidle", timeout: 15000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: "screenshots/fashion.png", fullPage: false });
    console.log("✓ Fashion page screenshot saved");

    // List Your Business
    await page.goto("http://localhost:4173/list-your-business", { waitUntil: "networkidle", timeout: 15000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: "screenshots/list-business.png", fullPage: false });
    console.log("✓ List Business page screenshot saved");

  } finally {
    await browser.close();
    server.kill();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
