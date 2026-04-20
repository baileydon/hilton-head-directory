import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, MapPin } from "lucide-react";

export function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useQuery(
    api.businesses.search,
    query.length >= 2 ? { query } : "skip"
  );

  return (
    <div className="pt-20 min-h-screen">
      <div className="px-6 py-16 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/30 hover:text-amber-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" /> Home
          </Link>
          <h1 className="text-3xl font-extralight tracking-tight mb-8">Search</h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search businesses..."
              className="w-full bg-white/5 border border-white/10 rounded-none pl-12 pr-4 py-4 text-lg font-light focus:outline-none focus:border-amber-400/30 placeholder:text-white/20"
              autoFocus
            />
          </div>
        </div>
      </div>

      <div className="px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-4">
          {query.length >= 2 && results && results.length === 0 && (
            <p className="text-white/30 text-center py-8">No results found.</p>
          )}
          {(results ?? []).map((biz) => (
            <Link
              key={biz._id}
              to={`/business/${biz.slug}`}
              className="block border border-white/5 hover:border-amber-400/20 p-6 transition-all"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-amber-400/50">
                {biz.category}
              </span>
              <h3 className="text-lg font-light mt-1 mb-1">{biz.name}</h3>
              {biz.address && (
                <div className="flex items-center gap-2 text-xs text-white/20">
                  <MapPin className="w-3 h-3" />
                  {biz.address}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
