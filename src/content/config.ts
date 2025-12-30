import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    excerpt: z.string(),
    source: z.string(),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
