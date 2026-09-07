import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('AgentJetson Team'),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'es', 'fr', 'de', 'nl']).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
