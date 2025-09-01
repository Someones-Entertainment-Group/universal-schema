import { z } from 'zod';
import { MediaSchema } from './media';

// File management Zod schemas
export const FileManageItemSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  file_id: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  media: MediaSchema,
});

// Infer types from schemas
export type FileManageItem = z.infer<typeof FileManageItemSchema>;
