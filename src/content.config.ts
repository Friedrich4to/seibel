import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const team = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
	schema: z.object({
		name: z.string(),
		position: z.string(),
		phone: z.string().default(''),
		email: z.string().default(''),
		image: z.string(),
		imageAlt: z.string(),
		imageFb: z.string().optional(),
		role: z.enum(['socio', 'member', 'admin']).default('member'),
		hasProfile: z.boolean().default(true),
		carousel: z.boolean().default(false),
		order: z.number(),
		carouselOrder: z.number().optional(),
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
		continuingEducation: z
			.array(
				z.object({
					institution: z.string(),
					location: z.string().optional(),
					degree: z.string(),
				})
			)
			.optional(),
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
		certificate: z
			.object({
				src: z.string(),
				alt: z.string(),
				inner_src: z.string(),
				title: z.string(),
				subtitle: z.string(),
			})
			.optional(),
	}),
});

export const collections = { team, areas };
