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
        
        forum: z.string().optional(),
        
        image: z.string().optional()
    })
});

export function sortByPopularity(arr: string[]) {
    const countMap = {};
    arr.forEach(tag => {
        countMap[tag] = (countMap[tag] || 0) + 1;
    });
    const uniqueItems = Object.keys(countMap);
    uniqueItems.sort((a, b) => countMap[b] - countMap[a]);
    return uniqueItems;
}

/** Export our collections */
export const collections = {
  'blog': blogCollection
};
