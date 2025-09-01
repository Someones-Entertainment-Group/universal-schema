import { z } from 'zod';

// Media-related Zod schemas
export const MediaSchema = z.object({
  id: z.string(),
  bucket: z.string(),
  file_name: z.string(),
  file_type: z.string(),
  file_size: z.string(),
  c_img: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

// Infer types from schemas
export type Media = z.infer<typeof MediaSchema>;
