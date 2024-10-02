import { defineCollection, z } from 'astro:content';

/** Define Blog content collection */
const blogCollection = defineCollection({
    /** Markdown content */
    type: 'content',
    /** Schema */
    schema: z.object({
        date: z.date(),
        title: z.string(),
        
        author: z.string().optional(),
        authors: z.array(z.string()).optional(),
        
        summary: z.string().optional(),
        
        tag: z.string().optional(),
        tags: z.array(z.string()).optional(),
        
        forum: z.string().optional()
    })
});

/** Export our collections */
export const collections = {
  'blog': blogCollection
};
