import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, ExternalLink, ArrowLeft } from "lucide-react";

export function BusinessPage() {
  const { slug } = useParams<{ slug: string }>();
  const business = useQuery(api.businesses.getBySlug, { slug: slug ?? "" });

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-pulse text-amber-400/40 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to={`/category/${business.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/30 hover:text-amber-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-3 h-3" /> {business.category}
        </Link>

        <span className="text-xs tracking-[0.3em] uppercase text-amber-400/60 block mb-2">
          {business.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">
          {business.name}
        </h1>

        {business.description && (
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-white/50 leading-relaxed font-light text-lg">
              {business.description}
            </p>
          </div>
        )}

        {/* Contact Info */}
        <div className="border border-white/10 divide-y divide-white/5">
          {business.address && (
            <div className="flex items-center gap-4 p-6">
              <MapPin className="w-5 h-5 text-amber-400/50 shrink-0" />
              <div>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Address</p>
                <p className="text-white/70">
                  {business.address}
                  {business.city && `, ${business.city}`}
                  {business.state && `, ${business.state}`}
                  {business.zip && ` ${business.zip}`}
                </p>
              </div>
            </div>
          )}
          {business.phone && (
            <div className="flex items-center gap-4 p-6">
              <Phone className="w-5 h-5 text-amber-400/50 shrink-0" />
              <div>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Phone</p>
                <a href={`tel:${business.phone}`} className="text-white/70 hover:text-amber-400 transition-colors">
                  {business.phone}
                </a>
              </div>
            </div>
          )}
          {business.website && (
            <div className="flex items-center gap-4 p-6">
              <ExternalLink className="w-5 h-5 text-amber-400/50 shrink-0" />
              <div>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Website</p>
                <a
                  href={business.website.startsWith("http") ? business.website : `https://${business.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400/70 hover:text-amber-400 transition-colors"
                >
                  {business.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
