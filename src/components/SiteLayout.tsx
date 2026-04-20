import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { VERTICALS } from "../data/verticals";

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      {/* ===== NAVIGATION ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-dark/95 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-serif text-[15px] md:text-[17px] font-light tracking-[0.28em] text-white/90">
              HILTON HEAD ISLAND
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/vertical/luxury-dining"
              className="text-[11px] tracking-[0.22em] uppercase text-white/40 hover:text-gold transition-colors duration-300 font-light"
            >
              Dining
            </Link>
            <Link
              to="/vertical/home-lifestyle"
              className="text-[11px] tracking-[0.22em] uppercase text-white/40 hover:text-gold transition-colors duration-300 font-light"
            >
              Living
            </Link>
            <Link
              to="/vertical/luxury-real-estate"
              className="text-[11px] tracking-[0.22em] uppercase text-white/40 hover:text-gold transition-colors duration-300 font-light"
            >
              Real Estate
            </Link>
            <Link
              to="/articles"
              className="text-[11px] tracking-[0.22em] uppercase text-white/40 hover:text-gold transition-colors duration-300 font-light"
            >
              Editorial
            </Link>
            <Link
              to="/search"
              className="text-white/30 hover:text-gold transition-colors duration-300"
            >
              <Search className="w-[15px] h-[15px]" strokeWidth={1.5} />
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white/40 hover:text-gold transition-colors duration-300 ml-1"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white/50 hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* ===== FULL-SCREEN MENU OVERLAY ===== */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-dark/[0.97] backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col">
          {/* Menu header */}
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
            <Link to="/" className="flex flex-col leading-none" onClick={() => setMenuOpen(false)}>
              <span className="font-serif text-[15px] md:text-[17px] font-light tracking-[0.28em] text-white/90">
                HILTON HEAD ISLAND
              </span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/40 hover:text-gold transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 flex items-center justify-center px-6 md:px-10">
            <div className="max-w-5xl w-full">
              <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-10 font-sans">
                Ten Pillars of Luxury
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-5">
                {VERTICALS.map((v, i) => (
                  <Link
                    key={v.slug}
                    to={`/vertical/${v.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="group py-1.5 border-b border-white/[0.04] hover:border-gold/20 transition-all duration-300"
                    style={{
                      animation: menuOpen
                        ? `slide-up-item 0.5s ease-out ${i * 50}ms both`
                        : "none",
                    }}
                  >
                    <span className="font-serif text-[20px] md:text-[22px] font-light text-white/70 group-hover:text-gold transition-colors duration-300">
                      {v.name}
                    </span>
                    <p className="text-white/20 text-[11px] mt-0.5 font-sans font-light">
                      {v.tagline}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-wrap gap-10">
                <Link
                  to="/articles"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/30 hover:text-gold text-[12px] tracking-[0.15em] uppercase transition-colors duration-300 font-light"
                >
                  Editorial
                </Link>
                <Link
                  to="/search"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/30 hover:text-gold text-[12px] tracking-[0.15em] uppercase transition-colors duration-300 font-light"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main>
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/[0.06] bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-5">
              <h3 className="font-serif text-[17px] font-light tracking-[0.28em] mb-4">
                HILTON HEAD ISLAND
              </h3>
              <p className="text-white/25 text-sm font-light leading-relaxed max-w-sm">
                The Lowcountry&rsquo;s definitive luxury guide. Ten pillars of
                excellence for those who expect nothing less than extraordinary.
              </p>
            </div>

            {/* Verticals Col 1 */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5 font-sans">
                Live
              </h4>
              <div className="space-y-2.5">
                <Link to="/vertical/home-lifestyle" className="block text-[13px] text-white/30 hover:text-gold transition-colors font-light">Home & Lifestyle</Link>
                <Link to="/vertical/luxury-real-estate" className="block text-[13px] text-white/30 hover:text-gold transition-colors font-light">Real Estate</Link>
                <Link to="/vertical/private-aviation" className="block text-[13px] text-white/30 hover:text-gold transition-colors font-light">Private Aviation</Link>
              </div>
            </div>

            {/* Verticals Col 2 */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5 font-sans">
                Experience
              </h4>
              <div className="space-y-2.5">
                <Link to="/vertical/luxury-dining" className="block text-[13px] text-white/30 hover:text-gold transition-colors font-light">Dining</Link>
                <Link to="/vertical/private-captains" className="block text-[13px] text-white/30 hover:text-gold transition-colors font-light">Private Captains</Link>
                <Link to="/vertical/luxury-events" className="block text-[13px] text-white/30 hover:text-gold transition-colors font-light">Events</Link>
                <Link to="/vertical/day-trips" className="block text-[13px] text-white/30 hover:text-gold transition-colors font-light">Day Trips</Link>
              </div>
            </div>

            {/* Verticals Col 3 */}
            <div className="md:col-span-3">
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5 font-sans">
                Discover
              </h4>
              <div className="space-y-2.5">
                <Link to="/vertical/fashion-style" className="block text-[13px] text-white/30 hover:text-gold transition-colors font-light">Fashion & Style</Link>
                <Link to="/vertical/art-culture" className="block text-[13px] text-white/30 hover:text-gold transition-colors font-light">Art & Culture</Link>
                <Link to="/vertical/family-activities" className="block text-[13px] text-white/30 hover:text-gold transition-colors font-light">Family & Activities</Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-white/15 font-light">
              &copy; 2026 HHI Luxury Guide. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link to="/articles" className="text-[11px] text-white/15 hover:text-gold/50 transition-colors font-light">Editorial</Link>
              <Link to="/list-your-business" className="text-[11px] text-white/15 hover:text-gold/50 transition-colors font-light">List Your Business</Link>
              <Link to="/search" className="text-[11px] text-white/15 hover:text-gold/50 transition-colors font-light">Search</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
