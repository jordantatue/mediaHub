import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    excerpt: z.string(),
    author: z.string(),
    readingTime: z.string(),
    source: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imageCaption: z.string(),
    keywords: z.array(z.string()),
    metaDescription: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
