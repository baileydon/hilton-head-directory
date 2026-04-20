import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  businesses: defineTable({
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
  })
    .index("by_category", ["category"])
    .index("by_slug", ["slug"])
    .index("by_featured", ["featured"])
    .searchIndex("search_businesses", {
      searchField: "name",
      filterFields: ["category"],
    }),
  articles: defineTable({
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
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_featured", ["featured"]),
  categories: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    tagline: v.optional(v.string()),
    icon: v.string(),
    order: v.number(),
    imageUrl: v.optional(v.string()),
    heroImage: v.optional(v.string()),
  }).index("by_slug", ["slug"]),
});

export default schema;
