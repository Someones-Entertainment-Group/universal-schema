import { Media } from "./media";

// File management types
export interface FileManageItem {
  id: number;
  user_id: number;
  file_id: number;
  created_at: string;
  updated_at: string;
  media: Media;
}