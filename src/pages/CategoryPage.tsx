import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, ExternalLink, ArrowLeft } from "lucide-react";

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = useQuery(api.categories.getBySlug, { slug: slug ?? "" });
  const businesses = useQuery(api.businesses.list, { category: category?.name });

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-pulse text-amber-400/40 text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Category Header */}
      <div className="px-6 py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/30 hover:text-amber-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" /> Back
          </Link>
          <span className="text-4xl block mb-4">{category.icon}</span>
          <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-3">
            {category.name}
          </h1>
          <p className="text-white/40 text-lg font-light max-w-2xl">
            {category.description}
          </p>
          {businesses && (
            <p className="text-xs text-amber-400/50 tracking-[0.2em] uppercase mt-4">
              {businesses.length} {businesses.length === 1 ? "listing" : "listings"}
            </p>
          )}
        </div>
      </div>

      {/* Business Grid */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {businesses && businesses.length === 0 && (
            <p className="text-white/30 text-center py-12">No listings in this category yet.</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(businesses ?? []).map((biz) => (
              <Link
                key={biz._id}
                to={`/business/${biz.slug}`}
                className="group border border-white/5 hover:border-amber-400/20 transition-all duration-300 bg-[#0d0d0d]"
              >
                <div className="p-8">
                  <h3 className="text-xl font-light mb-3 group-hover:text-amber-400 transition-colors">
                    {biz.name}
                  </h3>
                  <p className="text-sm text-white/30 line-clamp-3 leading-relaxed mb-4">
                    {biz.description || "Premier Hilton Head establishment."}
                  </p>
                  <div className="space-y-2">
                    {biz.address && (
                      <div className="flex items-center gap-2 text-xs text-white/20">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{biz.address}{biz.city ? `, ${biz.city}` : ""}</span>
                      </div>
                    )}
                    {biz.phone && (
                      <div className="flex items-center gap-2 text-xs text-white/20">
                        <Phone className="w-3 h-3 shrink-0" />
                        {biz.phone}
                      </div>
                    )}
                    {biz.website && (
                      <div className="flex items-center gap-2 text-xs text-amber-400/40">
                        <ExternalLink className="w-3 h-3 shrink-0" />
                        <span className="truncate">Visit Website</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
