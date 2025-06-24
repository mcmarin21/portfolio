import {defineCollection, reference, z} from "astro:content";
import {glob, file} from "astro/loaders";

const projects = defineCollection({
    loader: glob({base:"./src/content/projects", pattern: ["**/*.md", "**/*.mdx"]}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        startDate: z.date(),
        endDate: z.date().optional(),
        technologies: reference("technologies"),
        role: z.array(z.string()),
        company: z.string().optional(),
    })
})

const technologies = defineCollection({
    loader: glob({base:"./src/content/technologies", pattern: ["**/*.md", "**/*.mdx"]}),
    schema: z.object({
        name: z.string(),
        description: z.string().optional(),
        icon: z.string().optional(),
    })
})

export const collections = {
    projects,
    technologies,
}