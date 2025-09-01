// Field and form-related types
export interface ISelectMenuList {
  value: string;
  label: string;
  isGroup?: boolean;
}

export type ISortingType = "ascending" | "descending" | "";

export interface DeviceTypeUtils {
  web: boolean;
  mobile: boolean;
  email: boolean;
}

export interface IAxisType {
  x: number;
  y: number;
  z: number;
}

export interface Location {
  longitude: string;
  latitude: string;
  name: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
}

export type PaginationMetaData = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
};

export type PaginatedData<T> = {
  items: T[];
  meta: PaginationMetaData;
};
