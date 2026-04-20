import { runTest } from "./auth";

runTest("Screenshot Site", async helper => {
  const { page } = helper;

  // Go to homepage (no auth needed - public site)
  console.log("📍 Taking homepage screenshot...");
  await page.goto(process.env.APP_URL || "http://localhost:4173");
  await page.waitForTimeout(2000);
  await helper.screenshot("homepage-hero.png");

  // Scroll down to see more
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(1000);
  await helper.screenshot("homepage-quote.png");

  // Scroll to pillars
  await page.evaluate(() => window.scrollBy(0, 1200));
  await page.waitForTimeout(1000);
  await helper.screenshot("homepage-pillars.png");

  // Check a vertical page
  console.log("📍 Taking Fashion vertical screenshot...");
  await page.goto((process.env.APP_URL || "http://localhost:4173") + "/vertical/fashion-style");
  await page.waitForTimeout(2000);
  await helper.screenshot("vertical-fashion.png");

  // Check dining vertical
  console.log("📍 Taking Dining vertical screenshot...");
  await page.goto((process.env.APP_URL || "http://localhost:4173") + "/vertical/luxury-dining");
  await page.waitForTimeout(2000);
  await helper.screenshot("vertical-dining.png");

  console.log("\n🎉 Screenshots taken!");
}).catch(() => process.exit(1));
