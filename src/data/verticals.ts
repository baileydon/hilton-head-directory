// The Ten Pillars of Luxury - Hilton Head Island
// Rebuilt April 2026: Every pillar has a clear revenue or traffic strategy
// Photos: Verified Hilton Head Island & Lowcountry imagery

export interface Vertical {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  heroImage: string;
  icon: string;
  order: number;
  keywords: string[];
  faqQuestions: { q: string; a: string }[];
  /** Revenue/traffic strategy note (internal, not rendered) */
  strategy?: string;
  /** Editorial content queue - 5 article topics per pillar */
  articleTopics?: string[];
}

export const VERTICALS: Vertical[] = [
  // ────────────────────────────────────────────────────────────────
  // PILLAR 1 - FASHION & STYLE (JPK CLIENT ACQUISITION ENGINE)
  // Revenue: Direct funnel to JPKHiltonHead.com via Margot
  // ────────────────────────────────────────────────────────────────
  {
    name: "Fashion & Style",
    slug: "fashion-style",
    tagline: "Margot's guide to Lowcountry elegance",
    strategy: "Direct funnel to JPKHiltonHead.com. Every article = warm referral to JPK's 13 boutiques. Madison publishes style guides on Medium/LinkedIn for backlinks.",
    articleTopics: [
      "The Lowcountry Dress Code: What to Wear from Sea Pines to Savannah",
      "Trunk Show Season: A Calendar of Private Shopping Events",
      "Resort Elegance: Packing for a Week on Hilton Head",
      "The Art of Island Accessories: Hats, Linens, and Southern Details",
      "Behind the Boutique: How JPK Brings Paris to the Palmetto State",
    ],
    description: "The Lowcountry wardrobe is a language spoken fluently by those who belong. From trunk shows at Sea Pines Resort to the curated racks of Jean-Pierre Klifa's thirteen European boutiques, where Margot herself guides clients through collections from Paris, Milan, and Copenhagen. Hilton Head's fashion scene is quiet wealth personified.\n\nLevy Jewelers in Savannah holds authorized Rolex dealership status. Harbour Town's boutiques carry resort collections unavailable elsewhere in the Southeast. Coligny Plaza blends island casual with designer labels. And the private stylists who serve the island's estates understand that true luxury is never loud. It whispers.\n\nMargot curates every recommendation with the eye of someone who has dressed for every occasion the island offers: Tuesday morning at the tennis club, a Friday evening art walk in Old Town Bluffton, and a Saturday night charity gala beneath the live oaks at Wexford.",
    image: "/photos/fashion/jpk-court-dress-lavender.jpg",
    heroImage: "/photos/fashion/jpk-marrakech-cherry-flowers.jpg",
    icon: "◇",
    order: 1,
    keywords: [
      "luxury shopping Hilton Head Island",
      "what to wear Hilton Head Island",
      "Harbour Town boutiques",
      "Lowcountry fashion",
      "Jean-Pierre Klifa Hilton Head",
      "JPK boutique Hilton Head",
      "Levy Jewelers Savannah Rolex",
      "luxury personal stylist Hilton Head",
      "resort fashion South Carolina",
    ],
    faqQuestions: [
      {
        q: "Where are the best luxury boutiques on Hilton Head Island?",
        a: "The premier shopping destinations include Harbour Town in Sea Pines (resort and European designer collections), The Shops at Sea Pines Center, and Coligny Plaza. Jean-Pierre Klifa operates thirteen boutiques featuring curated European fashion from Paris, Milan, and Copenhagen. Their Hilton Head location is a destination for discerning shoppers. For high-end jewelry, Forsythe Jewelers on the island and Levy Jewelers in Savannah (authorized Rolex dealer) serve the luxury market.",
      },
      {
        q: "What is the dress code on Hilton Head Island?",
        a: "Hilton Head embodies 'Lowcountry elegant': refined but never overdressed. Resort casual prevails for daytime: linen, seersucker, quality cotton, and Lilly Pulitzer. Evening dining calls for smart casual to business casual depending on the venue. Private clubs (Wexford, Long Cove, and Palmetto Bluff in nearby Bluffton) each maintain their own dress standards, typically requiring collared shirts and closed-toe shoes at minimum. The island's style philosophy: invest in quality, dress for the occasion, and let the setting do the talking.",
      },
      {
        q: "Where can I find European designer fashion near Hilton Head?",
        a: "Jean-Pierre Klifa's boutiques are the premier destination for European fashion on Hilton Head Island, offering curated collections from Paris, Milan, and Copenhagen across thirteen locations. Harbour Town boutiques carry seasonal resort collections from European designers. For a broader selection, Savannah's Broughton Street (45 minutes) offers Gucci, Anthropologie, and SCAD-influenced local designers. Charleston's King Street (2 hours) has the Southeast's largest concentration of luxury retail.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // PILLAR 2 - LUXURY DINING (TRAFFIC MAGNET + FEATURED LISTINGS)
  // Revenue: Featured restaurant listings, review placement fees
  // Traffic: "best restaurants Hilton Head" = massive search volume
  // ────────────────────────────────────────────────────────────────
  {
    name: "Luxury Dining",
    slug: "luxury-dining",
    tagline: "Chef's tables to private dining rooms across the Lowcountry corridor",
    strategy: "Traffic magnet. 'best restaurants Hilton Head' is top search query. Featured listing fees from restaurants. AI answer engine gold (ChatGPT/Perplexity love ranked restaurant lists).",
    articleTopics: [
      "The Chef's Table: Five Private Dining Experiences Worth the Wait",
      "From Dock to Table: The Lowcountry Seafood Trail",
      "Wine Country Meets the Coast: Building a Cellar for Island Living",
      "Sunday Brunch Decoded: Where the Island Gathers",
      "The Art of the Private Chef: Estate Dining on Hilton Head",
    ],
    description: "The Lowcountry corridor (Hilton Head, Bluffton, Palmetto Bluff, Beaufort, and Savannah) rivals any comparable coastal luxury dining market in the United States. This is not an exaggeration. This is arithmetic.\n\nCharlie's L'Étoile Verte writes its menu fresh every morning on a chalkboard. There is no printed menu, no website menu, no predictability. You eat what Chef Charlie imagines that day. The Grey in Savannah holds a James Beard Award and transforms a former Greyhound bus terminal into one of America's most celebrated dining rooms. The Sage Room delivers New American cuisine with an open kitchen that belongs in Manhattan but chose the marshes instead.\n\nFARM Bluffton practices genuine farm-to-table philosophy with ingredients from within 50 miles. Michael Anthony's pairs Lowcountry ingredients with Italian technique in private dining rooms that seat up to forty. Old Fort Pub watches the sun dissolve into the Intracoastal from a deck that has launched a thousand proposals.\n\nPrivate chefs serve estates throughout the island at $150-$500+ per person. Full-service event catering begins at $250 per guest. The serious palate does not go hungry here.",
    image: "/photos/dining/luxury-seafood-platter.jpg",
    heroImage: "/photos/dining/luxury-seafood-platter.jpg",
    icon: "◇",
    order: 2,
    keywords: [
      "best restaurants Hilton Head Island",
      "fine dining Hilton Head",
      "private dining Hilton Head Island",
      "chef's table Hilton Head",
      "Lowcountry fine dining",
      "Charlies Letoile Verte Hilton Head",
      "best restaurants Bluffton SC",
      "FARM Bluffton restaurant",
      "private chef Hilton Head Island",
    ],
    faqQuestions: [
      {
        q: "What are the best fine dining restaurants on Hilton Head Island?",
        a: "The top fine dining experiences include Charlie's L'Étoile Verte (daily handwritten menu, intimate BYOB setting, reservations essential), The Sage Room (New American, open kitchen, craft cocktails), Michael Anthony's (Lowcountry Italian with private dining rooms seating up to 40), Old Fort Pub (waterfront sunsets over the Intracoastal, seasonal Lowcountry menu), and WiseGuys (prime steaks in a classic supper club atmosphere). Within 45 minutes, The Grey and Husk in Savannah, and FARM in Bluffton expand the corridor significantly. Skull Creek Boathouse and Hudson's Seafood offer waterfront dining with fresh local catch.",
      },
      {
        q: "Can I hire a private chef on Hilton Head Island?",
        a: "Yes. Multiple private chefs with extensive estate experience serve Hilton Head families for dinner parties, weekly meal preparation, holiday gatherings, and special events. Most operate through referral networks built over decades. Expect $150-$500+ per person for private dining experiences, with full-service event catering starting at $250 per guest. Services range from a single special-occasion dinner to seasonal contracts for families who spend extended periods on the island.",
      },
      {
        q: "What are the best restaurants in Bluffton near Hilton Head?",
        a: "Bluffton's dining scene has exploded in recent years. FARM Bluffton leads with genuine farm-to-table cuisine sourced within 50 miles. The Cottage Café, Kitchen 20 and Captain Woody's are local favorites. Old Town Bluffton's May River waterfront offers casual oyster roasts and Lowcountry boils. Palmetto Bluff's restaurants, including the Montage resort dining, bring resort-caliber cuisine. The Bluffton food scene is increasingly rivaling Hilton Head itself.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // PILLAR 3 - LUXURY REAL ESTATE (HIGHEST-TICKET ADVERTISERS)
  // Revenue: Premium listing fees for agents/brokers. Lead gen proof for Revenue Solutions.
  // Merged: Wealth Management tax advantages content
  // ────────────────────────────────────────────────────────────────
  {
    name: "Luxury Real Estate",
    slug: "luxury-real-estate",
    tagline: "Estates, gated communities & the SC tax advantage",
    strategy: "43 active BD members = largest advertiser pool. Premium listing fees. 'Luxury homes Hilton Head' = high CPC keywords ($5-15/click). Case study proof for HHI Revenue Solutions. Wealth management/tax content merged here to drive relocation leads.",
    articleTopics: [
      "Inside the Gates: Comparing Sea Pines, Wexford, and Palmetto Bluff",
      "The Tax Migration: Why Families Are Choosing South Carolina",
      "Waterfront vs. Golf Course: Choosing Your Lowcountry Address",
      "Building Custom: Architecture Firms Shaping the Island's Next Chapter",
      "The Second Home Question: Investment, Legacy, or Both",
    ],
    description: "The record sale in Sea Pines exceeded $12.5 million. Comparable properties in Palmetto Bluff list above $15 million. These are not aspirational numbers. They are last quarter's transactions.\n\nThe Lowcountry corridor's gated communities offer manned 24/7 security gates, private beaches, championship golf, deep-water access, and a quality of life that rivals Palm Beach at a fraction of the cost. Wexford Plantation commands a $90,000 initiation fee with annual dues of $23,380, and there is a waiting list. Long Cove Club's Jack Nicklaus course sees fewer rounds per day than most public courses see per hour. Palmetto Bluff's 20,000 acres make it the largest private community on the East Coast.\n\nBut the real story is the migration. South Carolina has no estate tax, no inheritance tax, and favorable trust laws. For established families leaving New York, Connecticut, New Jersey, or California, the savings are measured in millions over a decade. The top income tax rate is 6.5% (2025) and trending downward through legislative reduction. Property taxes are among the lowest in the nation for primary residences. There is no tax on Social Security income. Private banking, independent fiduciary RIAs, and estate planning attorneys who understand multi-state domicile structures serve the corridor.\n\nFrom oceanfront estates in Sea Pines to conservation-minded compounds on Spring Island. This is the definitive guide to the Lowcountry's most significant properties and the financial case for making Hilton Head home.",
    image: "/photos/icw/liveoak-spanish-moss.jpg",
    heroImage: "/photos/icw/marsh-golden-sunset.jpg",
    icon: "◇",
    order: 3,
    keywords: [
      "luxury real estate Hilton Head Island",
      "Sea Pines homes for sale",
      "Palmetto Bluff real estate",
      "Wexford Plantation Hilton Head",
      "$10 million home Hilton Head",
      "South Carolina tax advantages wealthy",
      "no estate tax South Carolina",
      "gated communities Hilton Head Island",
      "moving to Hilton Head Island",
      "luxury homes Beaufort Bluffton",
    ],
    faqQuestions: [
      {
        q: "What are the most exclusive gated communities on Hilton Head Island?",
        a: "The premier gated communities include Sea Pines (3 golf courses including Harbour Town Links, private beach, adjacent to Sea Pines with direct access to the island's premier gated communities), Wexford Plantation ($90K initiation fee, Pete Dye course, private harbour with lock system, annual dues $23,380), Long Cove Club (Jack Nicklaus course, ultra-private with fewer than 500 homes), and Palmetto Bluff (20,000 acres, Montage resort, the largest private community on the East Coast). Colleton River Club offers two Nicklaus courses with waterfront living on the Colleton River.",
      },
      {
        q: "How much does a luxury home cost on Hilton Head Island?",
        a: "The luxury market begins at approximately $2 million for premium gated community homes and extends beyond $15 million for oceanfront estates and Palmetto Bluff compounds. Sea Pines oceanfront properties typically range $5-$12.5M+. Palmetto Bluff estate lots start around $1M with finished homes $3-$15M+. Wexford homes range $1.5-$6M. Annual HOA/POA fees range from $2,005 (Sea Pines) to $23,380+ (Wexford). Most families at this level budget $50,000-$150,000+ annually for community fees, club dues, property tax, insurance, and estate maintenance.",
      },
      {
        q: "What are South Carolina's tax advantages for wealthy residents?",
        a: "South Carolina has no estate tax, no inheritance tax, and favorable trust laws including directed trust statutes. The top income tax rate is 6.5% (2025) and trending downward through legislative reduction. Property taxes are among the lowest in the nation for primary residences (4% assessment ratio vs. 6% for second homes). There is no tax on Social Security income. For families relocating from New York, Connecticut, New Jersey, or California, the cumulative savings over a decade are measured in millions. Estate planning attorneys and CPAs who specialize in multi-state domicile establishment serve the Hilton Head corridor.",
      },
      {
        q: "Why are wealthy families moving to Hilton Head Island?",
        a: "The migration is driven by four factors: (1) significant tax savings with no estate tax, no inheritance tax, and favorable trust laws, (2) quality of life with 15 gated communities with 24/7 security, 12 miles of pristine beach, world-class golf and dining, mild year-round climate, (3) connectivity with HXD airport adjacent to Sea Pines, Savannah/Hilton Head International for commercial flights, and proximity to Savannah and Charleston, (4) value, where comparable properties cost 40-60% less than Palm Beach, Naples, or the Hamptons while offering equal or superior amenities.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // PILLAR 4 - HOME & LIFESTYLE (REFRAMED FROM "LUXURY LIVING")
  // Revenue: Service provider listings - interior designers, contractors, landscapers
  // Different advertiser pool than real estate agents
  // ────────────────────────────────────────────────────────────────
  {
    name: "Home & Lifestyle",
    slug: "home-lifestyle",
    tagline: "The infrastructure of extraordinary island living",
    strategy: "Taps into a different advertiser pool than real estate agents: interior designers, contractors, landscapers, pool builders, home tech, estate managers. Service provider featured listings.",
    articleTopics: [
      "Designing for the Coast: Materials That Endure Salt Air and Southern Heat",
      "The Landscape of Luxury: Gardens That Define Island Estates",
      "Smart Homes, Island Style: Technology Behind the Live Oaks",
      "The Art of the Outdoor Room: Porches, Pools, and Gathering Spaces",
      "Concierge Living: Property Management for the Absentee Owner",
    ],
    description: "Buying the estate is chapter one. Living in it is the rest of the book.\n\nJ. Banks Design Group has shaped Lowcountry interiors for four decades. Their portfolio reads like a tour of the island's most significant homes. Landscape architects sculpt the estate aesthetic around centuries-old live oaks that no one dares remove. Pool builders engineer infinity edges that dissolve into marsh views. Smart home integrators wire estates for security, entertainment, and climate control that responds before you ask.\n\nEstate management firms serve absentee owners, the families who split time between Hilton Head and Aspen, Palm Beach, or Manhattan. They handle hurricane preparation, maintenance schedules, vendor coordination, and the thousand small details that keep a $10 million property operating like a $10 million property should.\n\nHousehold staffing agencies source private chefs, housekeepers, nannies, and personal assistants. The architectural review boards within each gated community maintain design standards that protect property values and aesthetic coherence.\n\nThis is the operating manual for life among the live oaks, from the first renovation to the ongoing rhythm of a home that works.",
    image: "/photos/harbour-town/lighthouse-blue.jpg",
    heroImage: "/photos/harbour-town/lighthouse-daytime.jpg",
    icon: "◇",
    order: 4,
    keywords: [
      "interior designer Hilton Head Island",
      "estate management Hilton Head",
      "luxury home renovation Hilton Head",
      "landscape architect Lowcountry",
      "pool builder Hilton Head Island",
      "smart home Hilton Head",
      "J Banks Design Group",
      "household staffing Hilton Head",
      "hurricane preparedness Hilton Head home",
    ],
    faqQuestions: [
      {
        q: "Who are the top interior designers on Hilton Head Island?",
        a: "J. Banks Design Group is the most established luxury interior design firm on Hilton Head, with four decades of Lowcountry residential and hospitality work. Other notable firms include Allison Ramsey Architects (Lowcountry-style new construction), and several independent designers who specialize in the coastal-meets-classic aesthetic that defines the island's most significant homes. Most top designers work by referral and maintain waitlists during peak renovation season (fall and winter).",
      },
      {
        q: "How do I manage a Hilton Head property when I'm not on the island?",
        a: "Estate management firms on Hilton Head serve absentee owners who split time between multiple residences. Services include hurricane preparation and recovery, routine and preventive maintenance scheduling, vendor coordination (landscaping, pool, HVAC), security monitoring, pre-arrival home preparation, and emergency response. Expect to budget $2,000-$8,000+ per month depending on property size and service level. Most firms offer tiered packages from basic check-ins to full concierge-level management.",
      },
      {
        q: "What do I need to know about renovating a home in a Hilton Head gated community?",
        a: "Each gated community has an Architectural Review Board (ARB) that must approve exterior modifications, additions, and sometimes major interior work. Approval timelines range from 2-8 weeks. Sea Pines, Wexford, and Long Cove are particularly strict about materials, colors, and landscaping standards. Work with contractors experienced in your specific community's guidelines. Hurricane-rated windows, elevated construction, and flood zone compliance add 10-20% to mainland construction costs but are non-negotiable for coastal properties.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // PILLAR 5 - PRIVATE AVIATION (PRESTIGE SIGNAL - SLIMMED DOWN)
  // Revenue: Minimal - this is a positioning play
  // Purpose: Signals ultra-luxury credibility. "Airport inside the gates."
  // ────────────────────────────────────────────────────────────────
  {
    name: "Private Aviation",
    slug: "private-aviation",
    tagline: "Wheels-down to your driveway in minutes",
    strategy: "Prestige signal. Keeps the site credible for our audience. Single pillar page, not a full article pipeline. 'How to arrive' story.",
    articleTopics: [
      "Wheels Down at HXD: The Most Convenient Approach to Island Life",
      "Jet Cards vs. Fractional Ownership: A Practical Comparison",
      "The Savannah Connection: Routing Options for Larger Aircraft",
      "Hangar Life: Basing Your Aircraft on Hilton Head",
      "Arrival Day: From Tarmac to Your Estate in Under Ten Minutes",
    ],
    description: "Hilton Head Island Airport (HXD) sits adjacent to Sea Pines, making it one of the most convenient private aviation facilities on the East Coast. For the private traveler, the journey from wheels-down to the estate driveway can be measured in single-digit minutes. No traffic. No baggage claim. No transition from airport to island. You land, and you're home.\n\nSignature Flight Support operates the FBO with full-service handling. NetJets, Flexjet, and independent charter operators serve the corridor daily. Private hangars are available for owners who base aircraft locally. Savannah/Hilton Head International (SAV), 45 minutes away, accommodates larger jets and provides commercial connections through American, Delta, United, JetBlue, Allegiant, and Sun Country.",
    image: "/photos/icw/oak-sunset-framed.jpg",
    heroImage: "/photos/icw/liveoak-marsh-dusk.jpg",
    icon: "◇",
    order: 5,
    keywords: [
      "fly private Hilton Head Island HXD",
      "private jet Hilton Head",
      "Hilton Head Island airport FBO",
      "NetJets Hilton Head",
      "charter flight Hilton Head",
      "Savannah Hilton Head airport SAV",
    ],
    faqQuestions: [
      {
        q: "Can you fly private to Hilton Head Island?",
        a: "Yes. Hilton Head Island Airport (HXD/KHXD) accommodates private aircraft and is uniquely located inside Sea Pines Resort. Signature Flight Support operates the FBO. The runway handles most light and midsize business jets. Savannah/Hilton Head International (SAV), 45 minutes away, accommodates all aircraft sizes including heavy jets and offers commercial connections through six airlines. Many residents use jet cards (NetJets, Flexjet) with 25+ hour commitments for year-round flexible access.",
      },
      {
        q: "How do I get to Hilton Head Island?",
        a: "Private aviation: fly direct to HXD airport on Hilton Head (light/midsize jets) or SAV Savannah airport (45 min drive, all aircraft sizes). Commercial flights: Savannah/Hilton Head International (SAV) serves American, Delta, United, JetBlue, Allegiant, and Sun Country from major hubs. Driving: I-95 to US-278, approximately 5 hours from Atlanta, 2 hours from Charleston, 4 hours from Charlotte. The island is connected to the mainland by a single bridge, adding to the sense of arrival.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // PILLAR 6 - PRIVATE CAPTAINS (AUTHENTIC LOCAL CONTENT)
  // Revenue: Charter captain featured listings, booking referral fees
  // Edge: This is where HHDirectory can genuinely beat TripAdvisor
  // ────────────────────────────────────────────────────────────────
  {
    name: "Private Captains",
    slug: "private-captains",
    tagline: "World-class waters, privately guided",
    strategy: "Authentic local content Google can't get elsewhere. Beats TripAdvisor on depth. 7 BD members for featured listing fees. Booking referral fees possible.",
    articleTopics: [
      "The Captain's Guide to Inshore Fishing on Calibogue Sound",
      "Offshore Expeditions: Gulf Stream Runs from Hilton Head",
      "Sunset Cruises and Dolphin Tours: The Quiet Side of the Water",
      "Crabbing, Shrimping, and Cast Netting: Teaching the Next Generation",
      "Chartering for Events: Private Water Experiences for Groups",
    ],
    description: "Hilton Head sits at the confluence of the most productive inshore and nearshore waters on the East Coast. This is not tourism marketing. Ask any USCG-licensed captain between Charleston and Jacksonville where they'd choose to fish, and the answer comes back to these waters.\n\nThe Calibogue Sound, Port Royal Sound, and the ACE Basin (one of the largest undeveloped estuaries on the Atlantic coast) offer genuinely world-class fishing and boating. Fly fishing for redfish on the flats peaks September through November, when tailing reds cruise the spartina grass in water so shallow you can see their backs. Tarpon arrive in the sound May through August. Offshore trips target cobia, king mackerel, and mahi-mahi beyond the reefs.\n\nBut the water experience extends far beyond a fishing rod. Sunset cruises through the marsh creeks at golden hour, when the spartina turns copper and the dolphins feed in the tidal flows. These define the Lowcountry in a way no photograph captures. Expeditions to Daufuskie Island, accessible only by boat, reveal Gullah heritage and pristine beaches untouched by development.\n\nEvery captain listed here is USCG-licensed, locally experienced, and personally vetted. This is not a booking aggregator. This is a guide written by people who know these waters.",
    image: "/photos/marina-sunset.jpg",
    heroImage: "/photos/icw/dock-sunset.jpg",
    icon: "◇",
    order: 6,
    keywords: [
      "fishing charter Hilton Head Island",
      "private boat charter Hilton Head",
      "fly fishing Hilton Head redfish",
      "Daufuskie Island boat tour",
      "Calibogue Sound fishing",
      "sunset cruise Hilton Head",
      "inshore fishing Hilton Head",
      "dolphin tour Hilton Head Island",
      "ACE Basin boat tour",
    ],
    faqQuestions: [
      {
        q: "What are the best fishing experiences on Hilton Head Island?",
        a: "The premier experiences include fly fishing for redfish on the Calibogue Sound flats (best: September through November, sight-casting to tailing reds in shallow spartina flats), tarpon fishing in Port Royal Sound (May through August, using live bait and heavy tackle), inshore light tackle for flounder and speckled trout (year-round), and offshore trips for cobia, king mackerel, and mahi-mahi (April through October). USCG-licensed private captains typically accommodate 1-6 guests with half-day ($500-$800) and full-day ($900-$1,400) options.",
      },
      {
        q: "What is the best boat tour on Hilton Head Island?",
        a: "The signature experience is a sunset cruise through the marsh creeks of Calibogue Sound at golden hour, when the spartina grass turns copper and dolphins feed in the tidal flows. Daufuskie Island excursions (boat-access only) combine Gullah heritage, pristine beaches, and the ruins of a disappeared community. Dolphin-watching tours in Broad Creek and Calibogue Sound have near-100% sighting rates May through October. Private captains offer custom itineraries for birding, photography, and multi-stop island hopping.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // PILLAR 7 - LUXURY EVENTS (MERGED: + CONCOURS D'ÉLÉGANCE)
  // Revenue: Multi-vendor listing fees - planners, caterers, florists, photographers
  // Traffic: "wedding venues Hilton Head" = high-intent, high-CPC search
  // ────────────────────────────────────────────────────────────────
  {
    name: "Luxury Events",
    slug: "luxury-events",
    tagline: "Destination weddings, galas & the Concours d'Élégance",
    strategy: "Multi-vendor revenue. Planners, caterers, florists, photographers all want featured placement. 'Wedding venues Hilton Head' = high-intent, high-CPC. Concours d'Élégance merged in as signature annual event.",
    articleTopics: [
      "Destination Weddings Beneath the Oaks: A Planning Guide",
      "The Concours and the Gala Season: An Annual Calendar",
      "Private Estate Events: Hosting at Home on Hilton Head",
      "Wine Dinners and Tasting Events Across the Lowcountry",
      "Charity and Society: The Philanthropic Calendar of the Island",
    ],
    description: "Live oak canopies draped in Spanish moss, marshgrass gilded by golden hour light, the Calibogue Sound as backdrop, and twelve miles of Atlantic beach. The Lowcountry creates an event setting that is genuinely irreplaceable. No amount of design can manufacture what nature provides here for free.\n\nThe luxury events market operates at the $150,000 to $750,000+ tier. Beth Baldwin Weddings and the island's top planners orchestrate destination weddings that draw families from across the country. Florabella's floral design transforms venues with arrangements that honor the natural landscape rather than competing with it. Caterers work exclusively through referral networks built over decades, serving families who expect perfection without performance.\n\nBeyond weddings, the island's event calendar anchors the social season. The Hilton Head Island Concours d'Élégance, held each November, is one of the most prestigious collector car events on the East Coast, drawing significant marques and collectors from across the nation. The Motoring Festival includes judged concours competition, Cars & Coffee, a driving tour, and auctions that generate millions in transactions. Corporate retreats at Montage Palmetto Bluff and Sea Pines Resort serve Fortune 500 companies seeking privacy and inspiration.\n\nCharity galas beneath the oaks at Wexford, wine dinners at private estates, and holiday celebrations at the yacht clubs complete a social infrastructure worthy of the families who live here.",
    image: "/photos/harbour-town-fireworks.jpg",
    heroImage: "/photos/events/july4-fireworks-palmtree.jpg",
    icon: "◇",
    order: 7,
    keywords: [
      "wedding venues Hilton Head Island",
      "luxury event planner Hilton Head",
      "destination wedding Lowcountry",
      "Palmetto Bluff wedding",
      "Sea Pines wedding venue",
      "Hilton Head Concours d'Elegance",
      "corporate retreat Hilton Head",
      "charity gala Hilton Head Island",
      "collector car event Hilton Head",
    ],
    faqQuestions: [
      {
        q: "What are the best wedding venues on Hilton Head Island?",
        a: "The most sought-after venues include Montage Palmetto Bluff (20,000-acre Lowcountry setting, Montage resort service), Harbour Town Lighthouse and Yacht Club (iconic backdrop), Sea Pines Resort venues (beach, golf course, and garden options), Sonesta Resort's oceanfront spaces, and private estate properties available by arrangement. Live oak canopies and marsh backdrops define the Lowcountry wedding aesthetic. Peak season is March–May and September through November. Budget $150,000-$750,000+ for a full luxury destination wedding.",
      },
      {
        q: "What is the Hilton Head Island Concours d'Élégance?",
        a: "The Hilton Head Island Concours d'Élégance is one of the most prestigious collector car events on the East Coast, held annually in November as part of the Motoring Festival. It features judged concours competition across multiple classes, a Cars & Coffee gathering, a scenic driving tour of the island, and collector car auctions generating millions in transactions. The event draws significant marques, internationally recognized collectors, and automotive enthusiasts from across the nation. It has become a signature event in Hilton Head's luxury social calendar.",
      },
      {
        q: "Can I host a corporate retreat on Hilton Head Island?",
        a: "Absolutely. Montage Palmetto Bluff offers world-class meeting facilities within a 20,000-acre private setting, ideal for executive retreats demanding privacy and inspiration. Sea Pines Resort and Omni Hilton Head Oceanfront Resort provide full-service conference capabilities with golf, beach, and dining built in. Private estates can be arranged for ultra-exclusive gatherings. The island's combination of privacy, amenities, and accessibility (direct flights to SAV from major hubs) makes it a top-tier corporate retreat destination.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // PILLAR 8 - FAMILY & ACTIVITIES (TRAFFIC ENGINE)
  // Revenue: Indirect - drives massive traffic that feeds all other pillars
  // Traffic: "things to do Hilton Head with kids" = highest volume HHI search
  // ────────────────────────────────────────────────────────────────
  {
    name: "Family & Activities",
    slug: "family-activities",
    tagline: "Tennis, golf, riding, marine ecology & 60 miles of bike paths",
    strategy: "Top-of-funnel traffic engine. 'Things to do Hilton Head with kids' is one of the highest-volume HHI searches. Structured FAQ schema = AI answer engine gold. Feeds traffic to all other pillars.",
    articleTopics: [
      "A Family Week on Hilton Head: Day-by-Day Itinerary",
      "Junior Golf, Tennis, and Riding: Programs Worth the Investment",
      "Marine Ecology and Turtle Walks: Nature Education on the Island",
      "Cycling the Island: A Guide to 60 Miles of Bike Paths",
      "Rainy Day Plans: Museums, Cooking Classes, and Indoor Adventures",
    ],
    description: "Hilton Head Island does not entertain children. It develops them.\n\nVan Der Meer Tennis Academy, one of the most respected in the world, is headquartered here. Junior programs have produced nationally ranked players. Sea Pines Golf Learning Center offers instruction on one of America's most storied golf properties, the same courses where PGA Tour professionals compete at the RBC Heritage each April.\n\nLawton Stables provides guided trail rides through the Sea Pines Forest Preserve, past ancient Indian shell rings and through maritime forest canopy. The Coastal Discovery Museum runs marine ecology programs where children seine-net tidal creeks and learn to identify species by touch. Dolphin tours in Calibogue Sound and Broad Creek deliver near-100% sighting rates.\n\nSixty-plus miles of paved bike paths connect every corner of the island. Families ride from Sea Pines to Coligny Beach to Shelter Cove without ever touching a road. Kayaking through tidal creeks, paddleboarding on Broad Creek, and crabbing off the docks at Shelter Cove Harbour build the kind of outdoor confidence that screen time cannot.\n\nThe Sandbox Children's Museum and Adventure playgrounds serve younger children. Beach days on 12 miles of hard-packed sand, wide enough for football and firm enough for bikes, requiring nothing but sunscreen and time.\n\nThis is a childhood infrastructure that builds skills, memories, and a relationship with the natural world that lasts.",
    image: "/photos/family/lcp-aerial.jpg",
    heroImage: "/photos/family/lcp-adventure-ship.jpg",
    icon: "◇",
    order: 8,
    keywords: [
      "things to do Hilton Head Island with kids",
      "family activities Hilton Head Island",
      "Van Der Meer Tennis Academy",
      "Lawton Stables Hilton Head",
      "dolphin tour Hilton Head",
      "kids activities Hilton Head Island",
      "bike paths Hilton Head Island",
      "Coastal Discovery Museum",
      "RBC Heritage golf Hilton Head",
      "kayaking Hilton Head Island",
    ],
    faqQuestions: [
      {
        q: "What are the best family activities on Hilton Head Island?",
        a: "Top experiences include Van Der Meer Tennis Academy (world-class instruction, junior programs), Lawton Stables trail rides through Sea Pines Forest Preserve (past ancient Indian shell rings), Coastal Discovery Museum marine ecology programs, dolphin watching tours (near-100% sighting rates May through October), 60+ miles of paved bike paths connecting the entire island, kayaking through tidal creeks, paddleboarding on Broad Creek, and 12 miles of wide, hard-packed beach. The Sandbox Children's Museum serves younger children. During Heritage Week (April), families can attend RBC Heritage PGA Tour events.",
      },
      {
        q: "Is Hilton Head Island good for a family vacation?",
        a: "Hilton Head is consistently rated one of America's top family beach destinations. The island's infrastructure is built for families: 60+ miles of separated bike paths (no cars), wide beaches safe for children, gated communities with pools and playgrounds, and a concentration of youth-focused activities (tennis academies, riding stables, marine ecology programs, water sports) unmatched on the East Coast. Resorts like Sea Pines, Palmetto Dunes, and Shelter Cove offer family packages. The island is safe, walkable, and designed so children can explore independently within the gated communities.",
      },
      {
        q: "Where can I play golf on Hilton Head Island?",
        a: "Hilton Head has over 30 golf courses. The most prestigious include Harbour Town Golf Links (home of the PGA Tour's RBC Heritage, Pete Dye design), Heron Point by Pete Dye and Atlantic Dunes by Davis Love III (both in Sea Pines), Colleton River Club (two Jack Nicklaus courses), Wexford's Pete Dye course, and Palmetto Dunes' three courses (Robert Trent Jones, Arthur Hills, George Fazio). Public/resort access is available at several courses; private club courses require member sponsorship or resort guest status.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // PILLAR 9 - DAY TRIPS & GUIDES (AFFILIATE + CONTENT ENGINE)
  // Revenue: Affiliate partnerships with tour operators
  // Traffic: "day trips from Hilton Head" = high volume, evergreen content
  // ────────────────────────────────────────────────────────────────
  {
    name: "Day Trips & Guides",
    slug: "day-trips",
    tagline: "Savannah, Charleston, Beaufort & Daufuskie, privately guided",
    strategy: "Affiliate revenue from tour operators and booking platforms. Broadens geographic keyword reach beyond just 'Hilton Head'. Madison travel guides = evergreen content + backlinks.",
    articleTopics: [
      "Savannah in a Day: A Curated Walking Tour from the Island",
      "Beaufort and the Sea Islands: History, Art, and Waterfront Dining",
      "Daufuskie Island: The Last Unpaved Barrier Island",
      "Charleston by Car: What to See, Where to Stay, and When to Go",
      "Bluffton's Old Town: Galleries, Restaurants, and the May River",
    ],
    description: "The Lowcountry is not Hilton Head Island alone. It is a constellation of extraordinary places, each within easy reach, each offering something the island does not.\n\nSavannah (45 minutes) is one of America's most beautiful cities. Its 22 historic squares, draped in live oaks and Spanish moss, create an urban landscape unlike anything else in the country. The SCAD-transformed art scene fills former industrial buildings with gallery-quality work. Restaurants like The Grey (James Beard Award, in a former Greyhound terminal), Husk (Sean Brock's Southern reinvention), and The Olde Pink House (1771, Savannah's oldest restaurant) make the drive worth the meal alone.\n\nBeaufort (40 minutes) is Pat Conroy's South Carolina. The most photogenic downtown in the Lowcountry, with antebellum mansions facing the Beaufort River and a waterfront that stops conversation. The Penn Center on St. Helena Island preserves one of the most important sites in African American history.\n\nDaufuskie Island, accessible only by boat from Hilton Head, preserves Gullah heritage and pristine beaches in a setting that feels decades removed from the mainland. No bridge. No traffic lights. Just live oaks, tabby ruins, and the sound of the water.\n\nCharleston (2 hours) needs no introduction, but it deserves one anyway. The Holy City's historic district, restaurant scene, and cultural calendar rank among America's finest.\n\nEvery experience can be pre-arranged and privately guided.",
    image: "/photos/harbour-town/salty-dog.jpg",
    heroImage: "/photos/harbour-town/aerial-dining.jpg",
    icon: "◇",
    order: 9,
    keywords: [
      "day trips from Hilton Head Island",
      "Savannah day trip from Hilton Head",
      "Charleston day trip from Hilton Head",
      "Daufuskie Island tour from Hilton Head",
      "Beaufort SC things to do",
      "Lowcountry travel guide",
      "private tour Savannah",
      "Gullah heritage tour South Carolina",
    ],
    faqQuestions: [
      {
        q: "What are the best day trips from Hilton Head Island?",
        a: "The essential day trips: (1) Savannah, GA (45 min): 22 historic squares, James Beard restaurants, SCAD art scene, River Street shopping. (2) Beaufort, SC (40 min): Pat Conroy's South Carolina, antebellum waterfront, Penn Center African American history. (3) Daufuskie Island (boat-access only from Hilton Head): Gullah heritage, pristine beaches, no cars, tabby ruins. (4) ACE Basin (30 min): one of the largest undeveloped estuaries on the East Coast, kayaking and wildlife. (5) Charleston, SC (2 hours): historic district, world-renowned dining, plantations, Fort Sumter.",
      },
      {
        q: "How do I get to Daufuskie Island from Hilton Head?",
        a: "Daufuskie Island is accessible only by boat. Public ferry service operates from Broad Creek Marina on Hilton Head (approximately 45-minute crossing). Private water taxis and charter boats offer flexible scheduling and can depart from multiple Hilton Head marinas. Once on Daufuskie, transportation is by golf cart since there are no paved roads and very few cars. Guided tours cover Gullah heritage sites, the historic Mary Fields School, tabby ruins, and pristine beaches. Half-day and full-day excursions are available.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // PILLAR 10 - ART & CULTURE (AUTHORITY BUILDER + DIFFERENTIATOR)
  // Revenue: Gallery listing fees, event promotion (Art Walk, openings)
  // Edge: Cultural content = backlinks from arts publications
  // ────────────────────────────────────────────────────────────────
  {
    name: "Art & Culture",
    slug: "art-culture",
    tagline: "Fine art, Gullah heritage & the Lowcountry's creative soul",
    strategy: "Cultural authority builder. Differentiates HHDirectory from generic travel/real estate sites. Gallery listing fees + event promotion. Cultural articles get picked up by arts publications = backlinks.",
    articleTopics: [
      "The Gullah Heritage Trail: Living History on Hilton Head",
      "Gallery Row: Collecting Art in the Lowcountry",
      "The Performing Arts Scene: From Jazz Clubs to Symphony",
      "Plein Air Painting and the Light of the Lowcountry",
      "Public Art and Sculpture: An Outdoor Gallery Across the Island",
    ],
    description: "The Lowcountry's extraordinary natural light has drawn artists for centuries. The way afternoon sun filters through live oak canopy onto marsh grass, the violet-gold sunsets over Calibogue Sound, the deep greens of maritime forest after rain. This is a palette that exists nowhere else on the East Coast, and artists have been trying to capture it since the colonial era.\n\nMorris & Whiteside Galleries in Harbour Town represent internationally recognized artists in one of the Southeast's premier gallery spaces. The work ranges from traditional Lowcountry landscapes to contemporary sculpture, with price points from accessible to investment-grade.\n\nRed Piano Too on St. Helena Island houses one of the most important Gullah art collections in the Southeast. Gullah culture, the distinct African American heritage of the Sea Islands, with its own language, cuisine, art traditions, and spiritual practices, is not a museum exhibit on Hilton Head. It is a living culture. The Gullah Heritage Trail, the Penn Center on St. Helena Island, and the annual Gullah Celebration in Beaufort offer immersive encounters with a tradition that has shaped the Lowcountry's identity for three centuries.\n\nOld Town Bluffton's artist studios and the Society of Bluffton Artists anchor the plein air painting tradition. Monthly Art Walks fill the streets with live painting, gallery openings, and the energy of a genuine creative community.\n\nThe SCAD galleries in Savannah, 45 minutes away, bring museum-quality exhibitions and the creative energy of one of America's premier art schools. For collectors, the corridor offers gallery-quality work at prices well below New York, Miami, or San Francisco.",
    image: "/photos/beach/dramatic-clouds.jpg",
    heroImage: "/photos/beach/lone-walker-sunset.jpg",
    icon: "◇",
    order: 10,
    keywords: [
      "art galleries Hilton Head Island",
      "Gullah art Hilton Head",
      "Gullah heritage Hilton Head Island",
      "Morris Whiteside Gallery Harbour Town",
      "Lowcountry art",
      "Old Town Bluffton artists",
      "SCAD galleries Savannah",
      "Gullah culture South Carolina",
      "art walk Bluffton",
    ],
    faqQuestions: [
      {
        q: "What are the best art galleries on Hilton Head Island?",
        a: "The premier galleries include Morris & Whiteside Galleries (Harbour Town, internationally recognized artists, investment-grade work), The Gallery at Wexford, Picture This Gallery, and Art League of Hilton Head (community exhibitions and classes). Beyond the island, Red Piano Too on St. Helena Island offers essential Gullah art, Old Town Bluffton hosts multiple artist studios with monthly Art Walks, and Savannah's SCAD galleries provide museum-quality exhibitions within 45 minutes. Prices range from accessible prints to five- and six-figure originals.",
      },
      {
        q: "What is Gullah culture and where can I experience it on Hilton Head?",
        a: "Gullah culture is the distinct African American heritage of the Sea Islands, including Hilton Head, with its own Creole language, cuisine (like Frogmore stew and red rice), sweetgrass basket weaving, ring shout spiritual traditions, and visual art. On Hilton Head, the Gullah Heritage Trail offers guided tours of historic sites. The Penn Center on nearby St. Helena Island is one of the first schools for freed slaves and a National Historic Landmark. Red Piano Too Gallery houses significant Gullah art. The annual Gullah Celebration in Beaufort (February) and Heritage Days on Hilton Head offer immersive cultural experiences. Gullah culture is not a historical footnote. It is a living tradition that shapes the Lowcountry's identity.",
      },
    ],
  },
];

// HERO - Iconic Harbour Town Lighthouse & Marina (verified HHI)
export const HERO_IMAGE = "/photos/hero-lowcountry-sunset.jpg";

// Secondary hero - Live oaks with Spanish moss (verified Lowcountry)
export const HERO_IMAGE_2 = "/photos/harbour-town-sunset.webp";

// Beach sunset (verified HHI)
export const BEACH_SUNSET = "/photos/marsh-sunset-panorama.jpg";

// Editorial/Margot feature - Lowcountry live oaks
export const EDITORIAL_IMAGE = "/photos/icw/marsh-creek-pastel.jpg";

// Charleston street scene for Day Trips (verified)
export const CHARLESTON_IMAGE = "/photos/harbour-town/lighthouse-blue.jpg";

// Savannah Forsyth Park (verified)
export const SAVANNAH_IMAGE = "/photos/icw/oak-silhouette-blue.jpg";
