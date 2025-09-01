import { z } from 'zod';

// Field and form-related Zod schemas
export const ISelectMenuListSchema = z.object({
  value: z.string(),
  label: z.string(),
  isGroup: z.boolean().optional(),
});

export const ISortingTypeSchema = z.union([
  z.literal("ascending"),
  z.literal("descending"),
  z.literal("")
]);

export const DeviceTypeUtilsSchema = z.object({
  web: z.boolean(),
  mobile: z.boolean(),
  email: z.boolean(),
});

export const IAxisTypeSchema = z.object({
  x: z.number(),
  y: z.number(),
  z: z.number(),
});

export const LocationSchema = z.object({
  longitude: z.string(),
  latitude: z.string(),
  name: z.string(),
});

export const ApiResponseSchema = <T>(dataSchema: z.ZodType<T>) => z.object({
  success: z.boolean(),
  message: z.string(),
  data: dataSchema,
});

export const PaginationMetaDataSchema = z.object({
  currentPage: z.number(),
  totalPages: z.number(),
  pageSize: z.number(),
  totalItems: z.number(),
});

export const PaginatedDataSchema = <T>(itemsSchema: z.ZodType<T>) => z.object({
  items: z.array(itemsSchema),
  meta: PaginationMetaDataSchema,
});

// Infer types from schemas
export type ISelectMenuList = z.infer<typeof ISelectMenuListSchema>;
export type ISortingType = z.infer<typeof ISortingTypeSchema>;
export type DeviceTypeUtils = z.infer<typeof DeviceTypeUtilsSchema>;
export type IAxisType = z.infer<typeof IAxisTypeSchema>;
export type Location = z.infer<typeof LocationSchema>;
export type ApiResponse<T = any> = {
  success: boolean;
  message: string;
  data: T;
};
export type PaginationMetaData = z.infer<typeof PaginationMetaDataSchema>;
export type PaginatedData<T> = {
  items: T[];
  meta: PaginationMetaData;
};
