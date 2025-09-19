// Base Permission Category interface
export interface PermissionCategory {
  id: number;
  name: string;
  description: string | null;
  color: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Permission Category with permissions relationship
export interface PermissionCategoryWithPermissions extends PermissionCategory {
  permissions?: {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
  }[];
}

// Create Permission Category data (for forms)
export interface CreatePermissionCategoryData {
  name: string; // Required, min 1 char, max 255 chars
  description?: string; // Optional, max 1000 chars
  color?: string; // Optional, must be valid hex color (#RRGGBB)
  sort_order?: number; // Optional, min 0
  is_active?: boolean; // Optional
}

// Update Permission Category data (for forms)
export interface UpdatePermissionCategoryData {
  name: string; // Required, min 1 char, max 255 chars
  description?: string; // Optional, max 1000 chars
  color?: string; // Optional, must be valid hex color (#RRGGBB)
  sort_order?: number; // Optional, min 0
  is_active?: boolean; // Optional
}

// Permission Category filters
export interface PermissionCategoryFilters {
  search?: string;
  is_active?: boolean;
  page?: number; // Min 1
  per_page?: number; // Min 1, max 100
}
