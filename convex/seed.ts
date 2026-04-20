import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const seedCategories = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("categories").first();
    if (existing) return "already seeded";

    const categories = [
      { name: "Fine Dining", slug: "fine-dining", description: "Award-winning restaurants and culinary experiences on Hilton Head Island", icon: "🍽️", order: 1 },
      { name: "Real Estate", slug: "real-estate", description: "Luxury properties and premier real estate on Hilton Head Island", icon: "🏠", order: 2 },
      { name: "Luxury Living", slug: "luxury-living", description: "Upscale accommodations and resort living on Hilton Head Island", icon: "✨", order: 3 },
      { name: "Fashion & Beauty", slug: "fashion-beauty", description: "Designer boutiques and beauty services on Hilton Head Island", icon: "👗", order: 4 },
      { name: "Boating & Water", slug: "boating-water", description: "Charter boats, marinas, and water experiences on Hilton Head Island", icon: "⛵", order: 5 },
      { name: "Shopping & Galleries", slug: "shopping-galleries", description: "Art galleries, boutiques, and curated shopping on Hilton Head Island", icon: "🛍️", order: 6 },
      { name: "Legal Services", slug: "legal-services", description: "Premier legal professionals serving Hilton Head Island", icon: "⚖️", order: 7 },
      { name: "Vacation & Rentals", slug: "vacation-rentals", description: "Luxury vacation rentals and holiday accommodations on Hilton Head Island", icon: "🌴", order: 8 },
    ];

    for (const cat of categories) {
      await ctx.db.insert("categories", cat);
    }
    return `seeded ${categories.length} categories`;
  },
});

export const seedBusiness = mutation({
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
    // Check for duplicate by bdId
    if (args.bdId) {
      const existing = await ctx.db
        .query("businesses")
        .filter((q) => q.eq(q.field("bdId"), args.bdId))
        .first();
      if (existing) return existing._id;
    }
    return await ctx.db.insert("businesses", args);
  },
});

export const seedArticle = mutation({
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
    if (args.bdId) {
      const existing = await ctx.db
        .query("articles")
        .filter((q) => q.eq(q.field("bdId"), args.bdId))
        .first();
      if (existing) return existing._id;
    }
    return await ctx.db.insert("articles", args);
  },
});

export const deleteBusiness = mutation({
  args: { id: v.id("businesses") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return "deleted";
  },
});
