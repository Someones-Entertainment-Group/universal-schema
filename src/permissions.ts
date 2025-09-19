// Base Permission interface
export interface Permission {
  id: number;
  name: string;
  guard_name: string;
  category_id: number | null;
  created_at: string;
  updated_at: string;
  category?: {
    id: number;
    name: string;
    color: string;
  } | null;
}

// Permission with roles relationship
export interface PermissionWithRoles extends Permission {
  roles?: {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
  }[];
}

// Create Permission data (for forms)
export interface CreatePermissionData {
  name: string; // Required, min 1 char, max 255 chars
  category_id?: number | null;
}

// Update Permission data (for forms)
export interface UpdatePermissionData {
  name: string; // Required, min 1 char, max 255 chars
  category_id?: number | null;
}

// Permission filters
export interface PermissionFilters {
  search?: string;
  guard_name?: string;
  category_id?: number;
  page?: number; // Min 1
  per_page?: number; // Min 1, max 100
}

// Role Permission assignment data
export interface AssignPermissionsToRoleData {
  permission_ids: number[]; // At least one permission must be selected
}

// User Permission assignment data
export interface AssignPermissionsToUserData {
  permission_ids: number[]; // At least one permission must be selected
}
