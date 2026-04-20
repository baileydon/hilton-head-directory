import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = useQuery(api.articles.getBySlug, { slug: slug ?? "" });

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-pulse text-amber-400/40 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/30 hover:text-amber-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-3 h-3" /> All Articles
        </Link>

        {article.tags && (
          <span className="text-xs tracking-[0.3em] uppercase text-amber-400/60 block mb-3">
            {article.tags.split(",")[0]}
          </span>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight leading-[1.1] mb-6">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/5">
          {article.author && (
            <span className="text-sm text-white/30">{article.author}</span>
          )}
          {article.publishedAt && (
            <span className="text-sm text-white/20">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
        </div>

        {article.imageUrl && (
          <div className="mb-10 -mx-6 md:-mx-12">
            <img
              src={article.imageUrl.startsWith("http") ? article.imageUrl : `https://www.hiltonheaddirectory.com${article.imageUrl}`}
              alt={article.title}
              className="w-full aspect-[21/9] object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        )}

        <div
          className="prose prose-invert prose-lg max-w-none
            [&>p]:text-white/60 [&>p]:leading-relaxed [&>p]:font-light [&>p]:mb-6
            [&>h2]:text-2xl [&>h2]:font-light [&>h2]:text-white/80 [&>h2]:mt-12 [&>h2]:mb-4
            [&>h3]:text-xl [&>h3]:font-light [&>h3]:text-white/70 [&>h3]:mt-8 [&>h3]:mb-3
            [&>ul]:text-white/50 [&>ol]:text-white/50
            [&>blockquote]:border-l-amber-400/50 [&>blockquote]:text-white/40 [&>blockquote]:italic
            [&_a]:text-amber-400/70 [&_a]:no-underline hover:[&_a]:text-amber-400
            [&_strong]:text-white/70
            [&_table]:border-white/10 [&_th]:text-white/50 [&_td]:text-white/40 [&_th]:border-white/10 [&_td]:border-white/10
          "
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
}
