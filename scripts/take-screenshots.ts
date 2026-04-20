import { chromium } from "playwright";

async function main() {
  console.log("🚀 Starting preview server...");

  // Start vite preview
  const server = Bun.spawn(["bunx", "vite", "preview", "--port", "4173"], {
    cwd: import.meta.dir + "/..",
    stdout: "pipe",
    stderr: "pipe",
  });

  // Wait for server to be ready
  console.log("⏳ Waiting for server...");
  let ready = false;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch("http://localhost:4173");
      if (res.ok) { ready = true; break; }
    } catch {}
    await new Promise(r => setTimeout(r, 1000));
  }

  if (!ready) {
    console.error("❌ Server failed to start");
    server.kill();
    process.exit(1);
  }

  console.log("✅ Server ready");

  const browser = await chromium.launch();

  try {
    // Desktop screenshots
    const desktopPage = await browser.newPage({
      viewport: { width: 1440, height: 900 },
    });

    console.log("📸 Desktop: Homepage hero...");
    await desktopPage.goto("http://localhost:4173/", { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(2000); // Wait for animations
    await desktopPage.screenshot({ path: "screenshots/01-hero-desktop.png", fullPage: false });

    console.log("📸 Desktop: Full homepage...");
    await desktopPage.screenshot({ path: "screenshots/02-homepage-full-desktop.png", fullPage: true });

    console.log("📸 Desktop: Scrolled to verticals...");
    await desktopPage.evaluate(() => {
      const sections = document.querySelectorAll('section');
      // Scroll to the "Thirteen Pillars" section (4th section)
      if (sections[3]) sections[3].scrollIntoView({ behavior: 'instant' });
    });
    await desktopPage.waitForTimeout(1500);
    await desktopPage.screenshot({ path: "screenshots/03-verticals-grid-desktop.png", fullPage: false });

    console.log("📸 Desktop: Vertical page...");
    await desktopPage.goto("http://localhost:4173/vertical/luxury-dining", { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(1500);
    await desktopPage.screenshot({ path: "screenshots/04-vertical-page-desktop.png", fullPage: false });

    // Mobile screenshots
    const mobilePage = await browser.newPage({
      viewport: { width: 390, height: 844 },
    });

    console.log("📸 Mobile: Homepage hero...");
    await mobilePage.goto("http://localhost:4173/", { waitUntil: "networkidle" });
    await mobilePage.waitForTimeout(2000);
    await mobilePage.screenshot({ path: "screenshots/05-hero-mobile.png", fullPage: false });

    console.log("📸 Mobile: Full homepage...");
    await mobilePage.screenshot({ path: "screenshots/06-homepage-full-mobile.png", fullPage: true });

    console.log("✅ All screenshots saved to screenshots/");
  } finally {
    await browser.close();
    server.kill();
  }
}

main().catch((e) => {
  console.error("Failed:", e);
  process.exit(1);
});
