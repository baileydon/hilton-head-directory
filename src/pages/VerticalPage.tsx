import { useParams, Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { VERTICALS } from "../data/verticals";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ArrowRight, MapPin, Phone, Globe, ArrowLeft, BookOpen } from "lucide-react";

function Reveal({ children, className = "", stagger = false }: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const { ref, isVisible } = useScrollReveal(0.08);
  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger-children" : "reveal"} ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function VerticalPage() {
  const { slug } = useParams<{ slug: string }>();
  const vertical = VERTICALS.find((v) => v.slug === slug);
  const businesses = useQuery(api.businesses.list, { category: slug || "" });
  const articles = useQuery(api.articles.list, { category: slug || "" });

  if (!vertical) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-light mb-4">Not Found</h1>
          <Link to="/" className="text-gold text-sm hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover scale-[1.05]"
          style={{ backgroundImage: `url(${vertical.heroImage})`, backgroundPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-black/20" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pb-12 md:pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/25 text-[11px] tracking-[0.2em] uppercase hover:text-gold transition-colors mb-8 font-sans font-light"
          >
            <ArrowLeft className="w-3 h-3" strokeWidth={1.5} />
            Back
          </Link>
          <p className="animate-hero-text text-gold/60 text-[10px] tracking-[0.5em] uppercase mb-4 font-sans font-light">
            {vertical.tagline}
          </p>
          <h1 className="animate-hero-text-delayed font-serif font-light text-[40px] sm:text-[52px] md:text-[68px] lg:text-[80px] tracking-[-0.02em] leading-[0.92]">
            {vertical.name}
          </h1>
        </div>
      </section>

      {/* ── DESCRIPTION ───────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-serif font-light text-[20px] md:text-[24px] text-white/50 leading-[1.6]">
              {vertical.description}
            </p>
            <div className="mt-8">
              <div className="w-12 h-px bg-gold/40" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROVIDERS / BUSINESSES ─────────────────────────── */}
      {businesses && businesses.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-10 bg-dark-alt">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="mb-12 md:mb-16">
                <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-4 font-sans font-light">
                  Verified Providers
                </p>
                <h2 className="font-serif font-light text-2xl md:text-[34px] tracking-[-0.01em]">
                  The Best of {vertical.name}
                </h2>
              </div>
            </Reveal>

            <Reveal stagger>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {businesses.map((biz) => (
                  <Link
                    key={biz._id}
                    to={`/business/${biz.slug}`}
                    className="group border border-white/[0.06] hover:border-gold/20 transition-all duration-500 p-7 md:p-8"
                  >
                    <h3 className="font-serif text-[18px] font-light group-hover:text-gold transition-colors duration-300 mb-3">
                      {biz.name}
                    </h3>
                    <p className="text-white/25 text-[13px] font-sans font-light line-clamp-3 leading-relaxed mb-4">
                      {biz.description}
                    </p>
                    <div className="space-y-1.5">
                      {biz.address && (
                        <div className="flex items-center gap-2 text-white/15 text-[12px] font-sans font-light">
                          <MapPin className="w-3 h-3 flex-shrink-0" strokeWidth={1.5} />
                          <span>{biz.address}{biz.city ? `, ${biz.city}` : ""}</span>
                        </div>
                      )}
                      {biz.phone && (
                        <a href={`tel:${biz.phone.replace(/[^\d+]/g, "")}`} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-white/15 hover:text-gold/60 text-[12px] font-sans font-light transition-colors">
                          <Phone className="w-3 h-3 flex-shrink-0" strokeWidth={1.5} />
                          <span>{biz.phone}</span>
                        </a>
                      )}
                      {biz.website && (
                        <a href={biz.website.startsWith("http") ? biz.website : `https://${biz.website}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-white/15 hover:text-gold/60 text-[12px] font-sans font-light transition-colors">
                          <Globe className="w-3 h-3 flex-shrink-0" strokeWidth={1.5} />
                          <span className="truncate">{biz.website.replace(/^https?:\/\//, "")}</span>
                        </a>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── RELATED ARTICLES ──────────────────────────────── */}
      {articles && articles.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="mb-12">
                <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-4 font-sans font-light">
                  Editorial
                </p>
                <h2 className="font-serif font-light text-2xl md:text-[34px] tracking-[-0.01em]">
                  Related Stories
                </h2>
              </div>
            </Reveal>

            <Reveal stagger>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.slice(0, 3).map((article) => (
                  <Link
                    key={article._id}
                    to={`/article/${article.slug}`}
                    className="group"
                  >
                    {article.imageUrl && (
                      <div className="aspect-[16/10] overflow-hidden mb-5">
                        <img
                          src={
                            article.imageUrl.startsWith("http")
                              ? article.imageUrl
                              : `https://www.hiltonheaddirectory.com${article.imageUrl}`
                          }
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.04]"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>
                    )}
                    <h3 className="font-serif text-lg font-light group-hover:text-gold transition-colors duration-300 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-white/25 text-[13px] font-sans font-light line-clamp-2 leading-relaxed mt-2">
                      {article.excerpt || ""}
                    </p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── EDITORIAL QUEUE (ARTICLE TOPICS) ─────────────── */}
      {vertical.articleTopics && vertical.articleTopics.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-10 bg-dark-alt border-t border-white/[0.04]">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="mb-12 md:mb-16">
                <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-4 font-sans font-light">
                  Coming This Season
                </p>
                <h2 className="font-serif font-light text-2xl md:text-[34px] tracking-[-0.01em]">
                  On the Editorial Calendar
                </h2>
              </div>
            </Reveal>

            <Reveal stagger>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {vertical.articleTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="border border-white/[0.06] p-7 md:p-8 flex items-start gap-4"
                  >
                    <BookOpen className="w-5 h-5 text-gold/40 flex-shrink-0 mt-0.5" strokeWidth={1} />
                    <div>
                      <h3 className="font-serif text-[16px] font-light leading-snug text-white/70">
                        {topic}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── CTA: EXPLORE MORE ─────────────────────────────── */}
      <section className="py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.04]">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif font-light text-2xl md:text-3xl mb-6">
              Explore All Ten Pillars
            </h2>
            <p className="text-white/25 text-[13px] font-sans font-light leading-relaxed mb-8">
              Every pillar of luxury on Hilton Head Island,
              from fashion to fine dining, from real estate to art and culture.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-gold border border-gold/25 px-10 py-4 hover:bg-gold/[0.08] hover:border-gold/40 transition-all duration-500 font-sans font-light"
            >
              Return Home
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
