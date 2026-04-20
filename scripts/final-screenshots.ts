import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const base = process.env.APP_URL || "http://localhost:4173";
  
  // Homepage hero
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "screenshots/final-hero.png", fullPage: false });
  console.log("✓ Hero screenshot");
  
  // Scroll to editorial quote section
  await page.evaluate(() => window.scrollBy(0, 850));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "screenshots/final-quote.png", fullPage: false });
  console.log("✓ Quote section");
  
  // Scroll to Why HHI
  await page.evaluate(() => window.scrollBy(0, 900));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "screenshots/final-why-hhi.png", fullPage: false });
  console.log("✓ Why HHI section");
  
  // Scroll to Margot section
  await page.evaluate(() => window.scrollBy(0, 900));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "screenshots/final-margot.png", fullPage: false });
  console.log("✓ Margot section");
  
  // Scroll to pillars
  await page.evaluate(() => window.scrollBy(0, 900));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "screenshots/final-pillars.png", fullPage: false });
  console.log("✓ Pillars section");
  
  // Fashion vertical page
  await page.goto(`${base}/vertical/fashion-style`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "screenshots/final-fashion.png", fullPage: false });
  console.log("✓ Fashion vertical");
  
  // Scroll to show businesses
  await page.evaluate(() => window.scrollBy(0, 700));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "screenshots/final-fashion-content.png", fullPage: false });
  console.log("✓ Fashion content");
  
  // Dining vertical
  await page.goto(`${base}/vertical/luxury-dining`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "screenshots/final-dining.png", fullPage: false });
  console.log("✓ Dining vertical");
  
  // Real estate vertical
  await page.goto(`${base}/vertical/luxury-real-estate`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "screenshots/final-realestate.png", fullPage: false });
  console.log("✓ Real estate vertical");
  
  await browser.close();
  console.log("\nAll screenshots taken!");
}

main().catch(console.error);
