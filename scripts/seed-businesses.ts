// Seed real HHI luxury businesses from our research briefs
const CONVEX_URL = process.env.CONVEX_URL || "";
const ADMIN_KEY = process.env.CONVEX_ADMIN_KEY || "";

// Read env from .env.local if not set
import { readFileSync } from "fs";
const envFile = readFileSync(".env.local", "utf-8");
const envVars: Record<string, string> = {};
for (const line of envFile.split("\n")) {
  const [key, ...rest] = line.split("=");
  if (key && rest.length) envVars[key.trim()] = rest.join("=").trim();
}
const url = CONVEX_URL || envVars["VITE_CONVEX_URL"] || "";

async function callMutation(name: string, args: Record<string, unknown>) {
  const resp = await fetch(`${url.replace("cloud", "cloud")}/api/mutation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: name, args, format: "json" }),
  });
  const data = await resp.json();
  return data;
}

const businesses = [
  // FASHION & STYLE
  { name: "Jean-Pierre Klifa (JPK) Hilton Head", slug: "jpk-hilton-head", category: "fashion-style", description: "Thirteen European boutiques featuring curated collections from Paris, Milan, and Copenhagen. The premier destination for luxury resort fashion on Hilton Head Island.", phone: "(843) 842-6655", website: "https://jpkhiltonhead.com", address: "The Village at Wexford", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "Forsythe Jewelers", slug: "forsythe-jewelers", category: "fashion-style", description: "Fine jewelry, custom designs, and estate pieces. A trusted name on Hilton Head Island for over three decades.", phone: "(843) 842-4700", website: "https://forsythejewelers.com", address: "The Village at Wexford", city: "Hilton Head Island", state: "SC", zip: "29928", featured: false },
  { name: "Harbour Town Boutiques", slug: "harbour-town-boutiques", category: "fashion-style", description: "A collection of resort and designer boutiques set around the iconic Harbour Town Lighthouse in Sea Pines Resort.", address: "Harbour Town, Sea Pines", city: "Hilton Head Island", state: "SC", zip: "29928", featured: false },

  // LUXURY DINING
  { name: "Charlie's L'Etoile Verte", slug: "charlies-letoile-verte", category: "luxury-dining", description: "The menu is written fresh every morning on a chalkboard. No printed menu, no website menu, no predictability. BYOB, reservations essential. One of the most celebrated dining experiences on Hilton Head.", phone: "(843) 785-9277", address: "8 New Orleans Rd", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "The Sage Room", slug: "the-sage-room", category: "luxury-dining", description: "New American cuisine with an open kitchen that delivers craft cocktails and inventive seasonal dishes in a refined atmosphere.", phone: "(843) 785-5352", website: "https://thesageroomhhi.com", address: "81 Pope Ave", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "Michael Anthony's Cucina Italiana", slug: "michael-anthonys", category: "luxury-dining", description: "Lowcountry ingredients meet Italian technique. Private dining rooms seat up to forty guests. A destination for celebrations and intimate gatherings.", phone: "(843) 785-6272", website: "https://michael-anthonys.com", address: "37 New Orleans Rd", city: "Hilton Head Island", state: "SC", zip: "29928", featured: false },
  { name: "WiseGuys", slug: "wiseguys-hhi", category: "luxury-dining", description: "Prime steaks and classic cocktails in a supper club atmosphere. The island's go-to for a proper steak dinner.", phone: "(843) 842-8866", website: "https://wiseguyshhi.com", address: "1513 Main St", city: "Hilton Head Island", state: "SC", zip: "29926", featured: false },
  { name: "Old Fort Pub", slug: "old-fort-pub", category: "luxury-dining", description: "Waterfront sunsets over the Intracoastal. Seasonal Lowcountry menu. The deck has launched a thousand proposals.", phone: "(843) 681-2386", website: "https://oldfortpub.com", address: "65 Skull Creek Dr", city: "Hilton Head Island", state: "SC", zip: "29926", featured: false },
  { name: "FARM Bluffton", slug: "farm-bluffton", category: "luxury-dining", description: "Genuine farm-to-table philosophy with ingredients sourced within 50 miles. One of Bluffton's finest culinary destinations.", phone: "(843) 815-9955", website: "https://farmbluffton.com", address: "15 Church St", city: "Bluffton", state: "SC", zip: "29910", featured: false },

  // LUXURY REAL ESTATE
  { name: "Collins Group Realty", slug: "collins-group-realty", category: "luxury-real-estate", description: "The leading independent brokerage on Hilton Head Island specializing in luxury properties, gated communities, and waterfront estates.", phone: "(843) 842-5252", website: "https://collinsgrouprealty.com", address: "6 Queens Folly Rd", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "Charter One Realty", slug: "charter-one-realty", category: "luxury-real-estate", description: "Full-service brokerage serving Hilton Head, Bluffton, and the greater Lowcountry. Specializing in luxury homes and new construction.", phone: "(843) 247-3810", website: "https://charteronerealtysc.com", city: "Hilton Head Island", state: "SC", zip: "29928", featured: false },
  { name: "Daniel Ravenel Sotheby's International Realty", slug: "sothebys-hhi", category: "luxury-real-estate", description: "The global luxury brand's Hilton Head presence. International marketing reach for the island's most distinguished properties.", phone: "(843) 341-3700", website: "https://danielravenel.com", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },

  // LUXURY EVENTS
  { name: "RBC Heritage", slug: "rbc-heritage", category: "luxury-events", description: "The PGA Tour's annual stop at Harbour Town Golf Links. One of the most celebrated events in professional golf, drawing spectators from around the world to Sea Pines Resort.", website: "https://rbcheritage.com", address: "Harbour Town Golf Links, Sea Pines", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "Hilton Head Island Concours d'Elegance & Motoring Festival", slug: "hhi-concours", category: "luxury-events", description: "The Southeast's premier automotive celebration. Collector cars, concours judging, rallies, and a gala weekend that attracts UHNW enthusiasts.", website: "https://hhiconcours.com", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "Wexford Art Guild", slug: "wexford-art-guild", category: "luxury-events", description: "Fine art exhibitions, gallery walks, and cultural programming within the private gates of Wexford Plantation.", address: "Wexford Plantation", city: "Hilton Head Island", state: "SC", zip: "29928", featured: false },

  // PRIVATE CAPTAINS
  { name: "Harbour Town Yacht Basin", slug: "harbour-town-yacht-basin", category: "private-captains", description: "Full-service marina at the base of the Harbour Town Lighthouse. Charter fishing, sunset cruises, and dolphin tours depart daily. Transient slips available for vessels up to 130 feet.", phone: "(843) 671-2704", website: "https://seapines.com/marina", address: "Harbour Town, Sea Pines", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "Skull Creek Marina", slug: "skull-creek-marina", category: "private-captains", description: "Deep-water marina on the Intracoastal Waterway. Fuel dock, boat rentals, and direct access to Port Royal Sound for offshore fishing.", phone: "(843) 681-8436", address: "1 Marshland Rd", city: "Hilton Head Island", state: "SC", zip: "29926", featured: false },
  { name: "Captain Hook Party Fishing Boat", slug: "captain-hook-fishing", category: "private-captains", description: "Group and private charters for deep-sea fishing in the waters off Hilton Head. Experienced captains, full equipment provided.", phone: "(843) 785-1700", website: "https://captainhookhhi.com", address: "Shelter Cove Marina", city: "Hilton Head Island", state: "SC", zip: "29928", featured: false },

  // FAMILY & ACTIVITIES
  { name: "Sea Pines Resort", slug: "sea-pines-resort", category: "family-activities", description: "3,400 acres of Lowcountry paradise. Three championship golf courses including Harbour Town Golf Links, tennis center, equestrian center, beach club, and the Harbour Town Lighthouse.", phone: "(866) 561-8802", website: "https://seapines.com", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "Palmetto Dunes Oceanfront Resort", slug: "palmetto-dunes", category: "family-activities", description: "Three miles of pristine beach, 11-mile lagoon system for kayaking, three Robert Trent Jones golf courses, and a full-service tennis center.", phone: "(866) 332-8898", website: "https://palmettodunes.com", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "Coastal Discovery Museum", slug: "coastal-discovery-museum", category: "family-activities", description: "68 acres of heritage on Honey Horn Plantation. Nature programs, historical tours, and hands-on learning about the Lowcountry's ecology and Gullah heritage.", phone: "(843) 689-6767", website: "https://coastaldiscovery.org", address: "70 Honey Horn Dr", city: "Hilton Head Island", state: "SC", zip: "29926", featured: false },

  // HOME & LIFESTYLE
  { name: "Sea Pines Country Club", slug: "sea-pines-country-club", category: "home-lifestyle", description: "Private club membership offering golf, tennis, swimming, dining, and social programming within the gates of Sea Pines Resort.", website: "https://seapinesclub.com", address: "Sea Pines Resort", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "Wexford Plantation", slug: "wexford-plantation", category: "home-lifestyle", description: "Gated community with 24-hour manned security. Championship golf, deep-water marina, tennis, swimming, and a private clubhouse. Homes range from $1M to $8M+.", address: "Wexford Plantation", city: "Hilton Head Island", state: "SC", zip: "29928", featured: true },
  { name: "Long Cove Club", slug: "long-cove-club", category: "home-lifestyle", description: "Private gated community featuring a Pete Dye championship course, deep-water marina, and a lifestyle built around privacy and Lowcountry elegance.", address: "Long Cove Club", city: "Hilton Head Island", state: "SC", zip: "29928", featured: false },
];

async function main() {
  console.log(`Seeding ${businesses.length} businesses to ${url}...`);
  
  for (const biz of businesses) {
    try {
      const result = await callMutation("seed:seedBusiness", biz);
      console.log(`  ✓ ${biz.name}`);
    } catch (err) {
      console.error(`  ✗ ${biz.name}: ${err}`);
    }
  }
  
  console.log("\nDone!");
}

main();
