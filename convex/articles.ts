import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: { limit: v.optional(v.number()), category: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (args.category) {
      const q = ctx.db
        .query("articles")
        .withIndex("by_category", (q) => q.eq("category", args.category!));
      return args.limit ? await q.take(args.limit) : await q.collect();
    }
    const q = ctx.db.query("articles").order("desc");
    return args.limit ? await q.take(args.limit) : await q.collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const featured = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .take(4);
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    excerpt: v.optional(v.string()),
    category: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    author: v.optional(v.string()),
    tags: v.optional(v.string()),
    publishedAt: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    bdId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("articles", args);
  },
});
