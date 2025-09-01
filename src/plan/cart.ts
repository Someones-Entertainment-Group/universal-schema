import { z } from 'zod';

// Cart-related Zod schemas
export const SomeonesPlanAddToCartPayloadSchema = z.object({
  user_id: z.number(),
  event_id: z.number(),
  bidding_users: z.array(z.number()),
});

export const SomeonesPlanRemoveCartItemPayloadSchema = z.object({
  user_id: z.number(),
  event_id: z.number(),
  bidding_users: z.array(z.number()),
});

export const SomeonesPlanBiddingUserSchema = z.object({
  id: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  business_name: z.string().nullable().optional(),
  username: z.string(),
  email: z.string(),
  country_code: z.string(),
  phone_number: z.string(),
  country: z.string(),
  city: z.string(),
  have_company: z.number(),
  company_name: z.string(),
  company_address: z.string(),
  uae_tax_registration_number: z.string(),
  role: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const SomeonesPlanCartItemsSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  event_id: z.number(),
  bidding_users: z.array(SomeonesPlanBiddingUserSchema),
  created_at: z.string(),
  updated_at: z.string(),
  user_name: z.string(),
  user_role: z.string(),
  event_name: z.string(),
  event_description: z.string(),
  event_date: z.string(),
  event_time: z.string(),
});

export const SomeonesPlanCartStateSchema = z.object({
  items: z.array(SomeonesPlanCartItemsSchema),
  isOpen: z.boolean(),
});

// Infer types from schemas
export type SomeonesPlanAddToCartPayload = z.infer<typeof SomeonesPlanAddToCartPayloadSchema>;
export type SomeonesPlanRemoveCartItemPayload = z.infer<typeof SomeonesPlanRemoveCartItemPayloadSchema>;
export type SomeonesPlanBiddingUser = z.infer<typeof SomeonesPlanBiddingUserSchema>;
export type SomeonesPlanCartItems = z.infer<typeof SomeonesPlanCartItemsSchema>;
export type SomeonesPlanCartState = z.infer<typeof SomeonesPlanCartStateSchema>;
