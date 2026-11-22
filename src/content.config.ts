import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { number } from 'astro:schema';

const projectsCollection = defineCollection({

  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),

  schema: ({image}) => z.object({
    order: z.number().default(0),
    image: image(),
    title: z.string(),
    year: z.string(), 
    context: z.string(),
    collaborators: z.array(z.string()),
    tools: z.array(z.string()),
    type: z.array(z.string()),
    insights: z.string(),
    description: z.string(),

    //First block (always img with desc)

    firstBlock: z.object({
      image: image(),
      caption: z.string(),
    }),

    //Dynamic Blocks

    contentBlocks: z.array(z.object({
      type: z.enum(['imageText', 'imageRow', 'wideImage', 'divider', 'video', 'videoText']),
      //Image Text
      image: image().optional(),
      description: z.string().optional(),
      captionlabel: z.string().optional(),
      caption: z.string().optional(),
      //Image Image
      image1: image().optional(),
      desc1: z.string().optional(),
      image2: image().optional(),
      desc2: z.string().optional(),
      //Wide Image
      desc: z.string().optional(),
      //Video
      videoId: z.string().optional(),
      //Video Text
      video: z.string().optional(),
      poster: image().optional(),
    })).optional()
    
  }),
});

export const collections = {
  projects: projectsCollection,
};