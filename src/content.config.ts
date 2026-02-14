import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const team = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
	schema: z.object({
		name: z.string(),
		position: z.string(),
		phone: z.string(),
		email: z.string(),
		image: z.string(),
		imageAlt: z.string(),
		role: z.enum(['socio', 'member']).default('member'),
		order: z.number(),
		languages: z.array(z.string()).default([]),
		education: z
			.array(
				z.object({
					institution: z.string(),
					location: z.string().optional(),
					degree: z.string(),
				})
			)
			.default([]),
	}),
});

const areas = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number(),
		image: z.string(),
		imageAlt: z.string(),
		servicios: z.array(
			z.object({
				titulo: z.string(),
				descripcion: z.string(),
			})
		),
		logos: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string(),
				})
			)
			.optional(),
	}),
});

export const collections = { team, areas };
