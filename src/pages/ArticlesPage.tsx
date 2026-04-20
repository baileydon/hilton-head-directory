import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function ArticlesPage() {
  const articles = useQuery(api.articles.list, {});

  return (
    <div className="pt-20 min-h-screen">
      <div className="px-6 py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/30 hover:text-amber-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" /> Home
          </Link>
          <p className="text-amber-400/60 text-xs tracking-[0.5em] uppercase mb-3">Editorial</p>
          <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-3">
            Island Stories
          </h1>
          <p className="text-white/40 text-lg font-light max-w-2xl">
            Insider guides, local favorites, and the stories that make Hilton Head special.
          </p>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(articles ?? []).map((article) => (
              <Link
                key={article._id}
                to={`/article/${article.slug}`}
                className="group"
              >
                {article.imageUrl && (
                  <div className="aspect-[16/10] overflow-hidden mb-4 bg-white/5">
                    <img
                      src={article.imageUrl.startsWith("http") ? article.imageUrl : `https://www.hiltonheaddirectory.com${article.imageUrl}`}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                )}
                {article.tags && (
                  <span className="text-[10px] tracking-[0.3em] uppercase text-amber-400/50">
                    {article.tags.split(",")[0]}
                  </span>
                )}
                <h3 className="text-lg font-light mt-1 mb-2 group-hover:text-amber-400 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-white/30 line-clamp-2">
                  {article.excerpt || ""}
                </p>
                {article.publishedAt && (
                  <p className="text-xs text-white/15 mt-2">
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
