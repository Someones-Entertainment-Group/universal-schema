import { z } from "zod";

import { MediaSchema } from "../media";
import { SomeonesPlanUserReviewBaseSchema } from "./review";

// User roles enum and schema
export const UserRolesSchema = z.enum([
  "event_owner",
  "planner_pro",
  "performer",
  "vendor",
  "venue_provider",
  "influencer",
  "party_seeker",
]);

export enum UserRoles {
  // Admin Users
  EventOwner = "event_owner",
  PlannerPro = "planner_pro",

  // Normal Users
  Performer = "performer",
  Vendor = "vendor",
  VenueProvider = "venue_provider",
  Influencer = "influencer",
  PartySeekers = "party_seeker",
}

// User review summary schema (no circular dependencies)
export const SomeonesPlanUserReviewSummarySchema = z.object({
  total_reviews: z.number(),
  average_rating: z.number(),
  rating_counts: z.record(z.number(), z.number()),
});

// Base user schema
export const SomeonesPlanUserSchema = z.object({
  id: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  business_name: z.string().nullable(),
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
  is_number_verified: z.string(),
  is_email_verified: z.number(),
  role: UserRolesSchema,
  created_at: z.string(),
  updated_at: z.string(),
  token: z.string(),
  reviews: z.array(SomeonesPlanUserReviewBaseSchema),
  summary: SomeonesPlanUserReviewSummarySchema.optional(),
  profile_image: MediaSchema.nullable(),
  banner_cover: MediaSchema.nullable(),
});

// Full user review schema with lazy references
export const SomeonesPlanUserReviewSchema =
  SomeonesPlanUserReviewBaseSchema.extend({
    event: z.any().optional(), // Will be SomeonesPlanEventSchema
    bidder: z.lazy(() => SomeonesPlanUserSchema).optional(),
    reviewer: z.lazy(() => SomeonesPlanUserSchema).optional(),
  });

// Extra schemas for different user types
export const SomeonesPlanPerformerExtraSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  date_of_birth: z.string(),
  gender: z.string(),
  performance_category: z.array(z.string()),
  musician_type: z.string(),
  musician_type_options: z.array(z.string()),
  dancer_type_options: z.array(z.any()),
  dj_type_options: z.array(z.any()),
  availability_in_kids_party: z.string(),
  bio: z.string(),
  languages: z.array(z.string()),
  created_at: z.string(),
  updated_at: z.string(),
});

export const SomeonesPlanVenderExtraSchema = z.object({
  vender_type: z.array(z.string()),
  catering_category: z.array(z.string()),
  service_provided: z.string(),
  availability_in_kids_party: z.string(),
  bio: z.string(),
  languages: z.array(z.string()),
  date_of_birth: z.string(),
  gender: z.string(),
});

export const SomeonesPlanInfluencerExtraSchema = z.object({
  date_of_birth: z.string(),
  gender: z.string(),
  bio: z.string(),
  total_followers_count: z.string(),
  last_minute_event_requests: z.string(),
  average_engagement_rate: z.string(),
  top_brands_worked_with: z.string(),
  availability_in_kids_party: z.string(),
  performance_category: z.array(z.string()),
  preferred_event_types: z.array(z.string()),
  languages: z.array(z.string()),
  created_at: z.string(),
  updated_at: z.string(),
});

export const SomeonesPlanVenueProviderExtraSchema = z.object({
  date_of_birth: z.string(),
  gender: z.string(),
  venue_type: z.string(),
  max_visitors: z.string(),
  area_size: z.string(),
  facilities: z.string(),
  google_map_location: z.string(),
  preferred_events: z.string(),
  license_number: z.string(),
  vat_number: z.string(),
  business_address: z.string(),
  about_venue: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const SomeonesPlanPlannerProExtraSchema = z.object({
  license_number: z.string(),
  vat_number: z.string(),
  company_website: z.string(),
  company_invoice_address: z.string(),
  position: z.string(),
  event_type: z.string(),
  no_of_events_manages_annualy: z.string(),
  preferences: z.string(),
  how_did_you_hear_about_us: z.string().nullable(),
  date_of_birth: z.string(),
  gender: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const SomeonesPlanPartySeekerExtraSchema = z.object({
  date_of_birth: z.string(),
  gender: z.string(),
});

// Event owner extra schema
const EventOwnerExtraSchema = z.object({
  date_of_birth: z.string(),
  gender: z.string(),
});

// User with role schemas
export const SomeonesPlanEventOwnerUserSchema = SomeonesPlanUserSchema.extend({
  event_owner_extra: EventOwnerExtraSchema,
});

export const SomeonesPlanPerformerUserSchema = SomeonesPlanUserSchema.extend({
  performer_extra: SomeonesPlanPerformerExtraSchema,
});

export const SomeonesPlanVenderUserSchema = SomeonesPlanUserSchema.extend({
  vender_extra: SomeonesPlanVenderExtraSchema,
});

export const SomeonesPlanInfluencerUserSchema = SomeonesPlanUserSchema.extend({
  influencer_extra: SomeonesPlanInfluencerExtraSchema,
});

export const SomeonesPlanVenueProviderUserSchema =
  SomeonesPlanUserSchema.extend({
    venue_provider_extra: SomeonesPlanVenueProviderExtraSchema,
  });

export const SomeonesPlanPlannerProUserSchema = SomeonesPlanUserSchema.extend({
  planner_pro_extra: SomeonesPlanPlannerProExtraSchema,
});

export const SomeonesPlanPartySeekerUserSchema = SomeonesPlanUserSchema.extend({
  party_seeker_extra: SomeonesPlanPartySeekerExtraSchema,
});

// Union schema for user with role
export const SomeonesPlanUserWithRoleSchema: z.ZodType<
  | z.infer<typeof SomeonesPlanEventOwnerUserSchema>
  | z.infer<typeof SomeonesPlanPerformerUserSchema>
  | z.infer<typeof SomeonesPlanVenderUserSchema>
  | z.infer<typeof SomeonesPlanInfluencerUserSchema>
  | z.infer<typeof SomeonesPlanVenueProviderUserSchema>
  | z.infer<typeof SomeonesPlanPlannerProUserSchema>
  | z.infer<typeof SomeonesPlanPartySeekerUserSchema>
> = z.union([
  SomeonesPlanEventOwnerUserSchema,
  SomeonesPlanPerformerUserSchema,
  SomeonesPlanVenderUserSchema,
  SomeonesPlanInfluencerUserSchema,
  SomeonesPlanVenueProviderUserSchema,
  SomeonesPlanPlannerProUserSchema,
  SomeonesPlanPartySeekerUserSchema,
]);

export const SomeonesPlanUserWithTokenSchema = SomeonesPlanUserSchema.extend({
  token: z.string(),
});

export const SomeonesPlanGalleryItemSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  source_id: z.number(),
  source_type: z.string(),
  hashtags: z.string(),
  media: MediaSchema,
});

export const SomeonesPlanBankAccountSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  account_holder_name: z.string(),
  account_number: z.string(),
  bank_name: z.string(),
  iban_number: z.string(),
  swift_code: z.string(),
  status: z.string(),
});

// Infer types from schemas
export type SomeonesPlanUser = z.infer<typeof SomeonesPlanUserSchema>;
export type SomeonesPlanUserReview = z.infer<
  typeof SomeonesPlanUserReviewSchema
>;
export type SomeonesPlanUserReviewSummary = z.infer<
  typeof SomeonesPlanUserReviewSummarySchema
>;
export type SomeonesPlanPerformerExtra = z.infer<
  typeof SomeonesPlanPerformerExtraSchema
>;
export type SomeonesPlanVenderExtra = z.infer<
  typeof SomeonesPlanVenderExtraSchema
>;
export type SomeonesPlanInfluencerExtra = z.infer<
  typeof SomeonesPlanInfluencerExtraSchema
>;
export type SomeonesPlanVenueProviderExtra = z.infer<
  typeof SomeonesPlanVenueProviderExtraSchema
>;
export type SomeonesPlanPlannerProExtra = z.infer<
  typeof SomeonesPlanPlannerProExtraSchema
>;
export type SomeonesPlanPartySeekerExtra = z.infer<
  typeof SomeonesPlanPartySeekerExtraSchema
>;
export type SomeonesPlanEventOwnerUser = z.infer<
  typeof SomeonesPlanEventOwnerUserSchema
>;
export type SomeonesPlanPerformerUser = z.infer<
  typeof SomeonesPlanPerformerUserSchema
>;
export type SomeonesPlanVenderUser = z.infer<
  typeof SomeonesPlanVenderUserSchema
>;
export type SomeonesPlanInfluencerUser = z.infer<
  typeof SomeonesPlanInfluencerUserSchema
>;
export type SomeonesPlanVenueProviderUser = z.infer<
  typeof SomeonesPlanVenueProviderUserSchema
>;
export type SomeonesPlanPlannerProUser = z.infer<
  typeof SomeonesPlanPlannerProUserSchema
>;
export type SomeonesPlanPartySeekerUser = z.infer<
  typeof SomeonesPlanPartySeekerUserSchema
>;
export type SomeonesPlanUserWithRole = z.infer<
  typeof SomeonesPlanUserWithRoleSchema
>;
export type SomeonesPlanUserWithToken = z.infer<
  typeof SomeonesPlanUserWithTokenSchema
>;
export type SomeonesPlanGalleryItem = z.infer<
  typeof SomeonesPlanGalleryItemSchema
>;
export type SomeonesPlanBankAccount = z.infer<
  typeof SomeonesPlanBankAccountSchema
>;
