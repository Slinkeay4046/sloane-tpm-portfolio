import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			organization: z.string(),
			role: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			accent: z.enum(['violet', 'blue', 'orange']),
		}),
	}),
};
