import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: { category: v.optional(v.string()), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    if (args.category) {
      const q = ctx.db
        .query("businesses")
        .withIndex("by_category", (q) => q.eq("category", args.category!));
      return args.limit ? await q.take(args.limit) : await q.collect();
    }
    const q = ctx.db.query("businesses");
    return args.limit ? await q.take(args.limit) : await q.collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("businesses")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const featured = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("businesses")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .take(6);
  },
});

export const search = query({
  args: { query: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("businesses")
      .withSearchIndex("search_businesses", (q) => q.search("name", args.query))
      .take(20);
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    description: v.string(),
    phone: v.optional(v.string()),
    website: v.optional(v.string()),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    state: v.optional(v.string()),
    zip: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    bdId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("businesses", args);
  },
});
