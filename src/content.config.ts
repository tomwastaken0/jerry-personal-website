import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts — write one .md / .mdx file per post in src/content/blog/.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(), // path under /public, e.g. "/images/post.jpg"
    draft: z.boolean().default(false),
  }),
});

// Projects — one .md file per project in src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0), // lower = shown first
  }),
});

// Books — one .md file per book in src/content/books/.
const books = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number().min(0).max(5).optional(),
    status: z.enum(['read', 'reading', 'want-to-read']).default('read'),
    dateFinished: z.coerce.date().optional(),
    cover: z.string().optional(),
    link: z.string().url().optional(), // e.g. Goodreads / publisher page
  }),
});

// Watching — films & shows, one .md file per entry in src/content/watching/.
const watching = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/watching' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['film', 'show']).default('film'),
    rating: z.number().min(0).max(5).optional(),
    dateWatched: z.coerce.date().optional(),
    poster: z.string().optional(),
    link: z.string().url().optional(), // e.g. IMDb / Letterboxd page
  }),
});

export const collections = { blog, projects, books, watching };
