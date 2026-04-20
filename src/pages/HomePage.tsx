import { useState } from "react";
import { Link } from "react-router-dom";
import { VERTICALS, HERO_IMAGE, HERO_IMAGE_2, BEACH_SUNSET } from "../data/verticals";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Gem, UtensilsCrossed, Home, Plane, Anchor, CalendarHeart, Users, Map, Palette, Building2 } from "lucide-react";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  "fashion-style": <Gem className="w-5 h-5" strokeWidth={1} />,
  "luxury-dining": <UtensilsCrossed className="w-5 h-5" strokeWidth={1} />,
  "luxury-real-estate": <Building2 className="w-5 h-5" strokeWidth={1} />,
  "home-lifestyle": <Home className="w-5 h-5" strokeWidth={1} />,
  "private-aviation": <Plane className="w-5 h-5" strokeWidth={1} />,
  "private-captains": <Anchor className="w-5 h-5" strokeWidth={1} />,
  "luxury-events": <CalendarHeart className="w-5 h-5" strokeWidth={1} />,
  "family-activities": <Users className="w-5 h-5" strokeWidth={1} />,
  "day-trips-guides": <Map className="w-5 h-5" strokeWidth={1} />,
  "art-culture": <Palette className="w-5 h-5" strokeWidth={1} />,
};

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal();
  return <div ref={ref} className={`scroll-reveal ${isVisible ? "visible" : ""} ${className}`}>{children}</div>;
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const sortedVerticals = [...VERTICALS].sort((a, b) => a.order - b.order);

  return (
    <main>
      {/* ===== HERO - Full-screen with real Lowcountry sunset ===== */}
      <section className="hero-section" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">THE DEFINITIVE GUIDE TO</p>
          <h1 className="hero-title">Hilton Head Island</h1>
          <p className="hero-subtitle">Where the live oaks meet the Atlantic.</p>
          <div className="hero-cta-group">
            <Link to="/vertical/fashion-style" className="btn-primary">Explore Fashion & Style</Link>
            <a href="#pillars" className="btn-secondary">Discover All Ten Pillars</a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ===== EDITORIAL PULLQUOTE with Harbour Town ===== */}
      <RevealSection>
        <section className="editorial-pull" style={{ backgroundImage: `url(${HERO_IMAGE_2})` }}>
          <div className="editorial-pull-overlay" />
          <blockquote className="editorial-quote">
            <p>"They come for the beach. They stay for the life beneath the oaks."</p>
            <cite>- The Migration Narrative</cite>
          </blockquote>
        </section>
      </RevealSection>

      {/* ===== WHY HILTON HEAD ===== */}
      <RevealSection>
        <section className="why-hhi-section">
          <div className="container">
            <h2 className="section-heading">Why Hilton Head Island</h2>
            <p className="section-subheading">The Lowcountry's premier address for accomplished families</p>
            <div className="why-grid">
              <div className="why-card">
                <h3>Tax Advantage</h3>
                <p>South Carolina charges no estate tax and no inheritance tax. The top income rate sits at 6.5% (2025) and is trending downward. For families leaving New York, Connecticut, or California, the savings over a decade run into the millions.</p>
              </div>
              <div className="why-card">
                <h3>Gated Communities</h3>
                <p>Round-the-clock manned security, controlled access, and four decades of cultivated discretion. Sea Pines, Wexford, Long Cove, and Palmetto Bluff in nearby Bluffton each carry a distinct personality, all backed by world-class amenities.</p>
              </div>
              <div className="why-card">
                <h3>Private Aviation</h3>
                <p>HXD airport sits adjacent to Sea Pines, putting private jet passengers on their driveway in single-digit minutes after landing. Signature Flight Support handles FBO services. NetJets, Flexjet, and charter operators fly the corridor daily.</p>
              </div>
              <div className="why-card">
                <h3>The Dining Corridor</h3>
                <p>A 45-minute culinary stretch from Hilton Head through Bluffton to Savannah. The Grey holds a James Beard Award. Charlie's L'Etoile Verte writes its menu on a chalkboard every morning. Private chefs serve estates at $150-$500 per person.</p>
              </div>
              <div className="why-card">
                <h3>12 Miles of Beach</h3>
                <p>Wide, hard-packed sand beaches from Sea Pines to Folly Field. No high-rises blocking the view. No boardwalks breaking the line. Just the Atlantic, sea oats, loggerhead turtle nests, and the kind of open space that's vanishing from the East Coast.</p>
              </div>
              <div className="why-card">
                <h3>The Lowcountry Itself</h3>
                <p>Live oaks hung with Spanish moss. Tidal creeks that turn gold at six o'clock. The Calibogue Sound. Gullah heritage woven into the culture. A pace built around depth, not display. Different from Palm Beach. Quieter. For many families, simply better.</p>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ===== ABOUT MARGOT DOREE ===== */}
      <RevealSection>
        <section className="margot-bio-section">
          <div className="container">
            <div className="margot-bio-grid">
              <div className="margot-bio-image">
                <img src="/photos/fashion/jpk-court-dress-lavender.jpg" alt="Luxury fashion styling on Hilton Head Island" loading="lazy" />
              </div>
              <div className="margot-bio-text">
                <p className="margot-eyebrow">YOUR GUIDE</p>
                <h2>Margot Dor&eacute;e</h2>
                <p className="margot-role">Fashion & Lifestyle Editor | Luxury Resort Retail Advisor, JPK Hilton Head</p>
                <p>Margot was born Malgorzata in Warsaw, where her mother taught her that elegance is an act of defiance. Dressing beautifully on almost nothing. Style that transcends scarcity.</p>
                <p>By her twenties she had claimed the stages of Europe, walking the runways of Milan and Paris, then moving to television on Canal+. Production followed naturally: fashion shows, brand presentations, galas. She became the invisible conductor behind the curtain.</p>
                <p>Today she serves as Luxury Resort Retail Advisor at Jean-Pierre Klifa (JPK Hilton Head), supporting clienteling, styling, and in-store brand experience rooted in Parisian heritage and resort elegance. What sets her apart is calm authority in live environments. She understands what happens on stage, backstage, and in the room.</p>
                <p>This season she has produced four fashion shows on Hilton Head Island, and continues to work as a personal style consultant by introduction only, guiding women through the moments that matter.</p>
                <p className="margot-book">Author of <em>Parisian Chic, Island Soul: A Guide to Effortless Style</em> (North Star Publishing Group, 2026)</p>
                <Link to="/vertical/fashion-style" className="btn-primary" style={{ marginTop: "1.5rem" }}>Explore with Margot</Link>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ===== THE TEN PILLARS GRID ===== */}
      <RevealSection>
        <section id="pillars" className="pillars-section">
          <div className="container">
            <h2 className="section-heading">The Ten Pillars of Luxury</h2>
            <p className="section-subheading">Every pillar built with purpose: discovery, connection, and extraordinary living on Hilton Head Island</p>
            <div className="pillars-grid">
              {sortedVerticals.map((v, i) => (
                <Link to={`/vertical/${v.slug}`} key={v.slug} className={`pillar-card ${i === 0 ? "pillar-featured" : ""}`}>
                  <div className="pillar-image" style={{ backgroundImage: `url(${v.image})` }}>
                    <div className="pillar-overlay" />
                    <div className="pillar-content">
                      <span className="pillar-icon">{PILLAR_ICONS[v.slug] || v.icon}</span>
                      <h3>{v.name}</h3>
                      <p>{v.tagline}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ===== MARSH SUNSET BREAK ===== */}
      <RevealSection>
        <section className="editorial-pull" style={{ backgroundImage: `url(${BEACH_SUNSET})` }}>
          <div className="editorial-pull-overlay" />
          <blockquote className="editorial-quote">
            <p>"The morning light on the marsh. Dolphins in the sound. The way live oaks hold the afternoon. You feel it the first week. By the second month, you stop comparing it to anywhere else."</p>
          </blockquote>
        </section>
      </RevealSection>

      {/* ===== PRIVATE INQUIRY FORM ===== */}
      <RevealSection>
        <section className="inquiry-section">
          <div className="container">
            <div className="inquiry-grid">
              <div className="inquiry-text">
                <h2 className="section-heading" style={{ textAlign: "left" }}>Private Inquiry</h2>
                <p>Whether you're exploring relocation, planning a property search, or looking for a personal introduction to the island's private communities, we can connect you with the right people.</p>
                <p className="inquiry-note">All inquiries are handled with complete discretion. Expect a personal response within 24 hours.</p>
              </div>
              <div className="inquiry-form-wrap">
                {inquirySubmitted ? (
                  <div className="inquiry-success">
                    <p>Thank you. We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form className="inquiry-form" onSubmit={(e) => { e.preventDefault(); setInquirySubmitted(true); }}>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="inquiry-input"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="inquiry-input"
                      required
                    />
                    <textarea
                      placeholder="Tell us what you're looking for..."
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="inquiry-textarea"
                      rows={4}
                    />
                    <button type="submit" className="btn-primary" style={{ width: "100%" }}>Request a Private Introduction</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ===== NEWSLETTER SIGNUP ===== */}
      <RevealSection>
        <section className="newsletter-section">
          <div className="container">
            <h2 className="section-heading">The Lowcountry Letter</h2>
            <p className="section-subheading">Curated intelligence on Hilton Head's luxury landscape. Weekly. Discreet.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); setEmail(""); }}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </section>
      </RevealSection>

      {/* ===== JSON-LD Structured Data ===== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "HHI Luxury Guide",
        "alternateName": "Hilton Head Island Luxury Guide",
        "url": "https://hiltonheaddirectory.com",
        "description": "The definitive luxury guide to Hilton Head Island, South Carolina. Curated recommendations for fine dining, luxury real estate, private aviation, fashion, events, and lifestyle for accomplished families and discerning visitors.",
        "publisher": {
          "@type": "Organization",
          "name": "HHI Luxury Guide",
          "logo": { "@type": "ImageObject", "url": "https://hiltonheaddirectory.com/logo.png" }
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://hiltonheaddirectory.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": VERTICALS.flatMap(v => (v.faqQuestions || []).map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        })))
      })}} />
    </main>
  );
}
