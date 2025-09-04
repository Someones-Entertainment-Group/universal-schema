import { z } from 'zod';

import { BidStatusesSchema } from "./bid";

// Event-related enums and schemas
export const SomeonesPlanEventStatusSchema = z.enum([
  "draft",
  "published", 
  "active",
  "ongoing",
  "completed",
  "cancelled",
  "postponed",
  "pending",
]);

export const SomeonesPlanEventTypeSchema = z.enum([
  "wedding",
  "birthday",
  "corporate",
  "festival",
  "concert",
  "conference",
  "party",
  "exhibition",
  "workshop",
  "other",
]);

export const SomeonesPlanBiddingStatusSchema = z.enum([
  "open",
  "closed",
]);

// Keep the original enums for backward compatibility
enum EventStatus {
  Draft = "draft",
  Published = "published",
  Active = "active",
  Ongoing = "ongoing",
  Completed = "completed",
  Cancelled = "cancelled",
  Postponed = "postponed",
  Pending = "pending",
}

export enum EventType {
  Wedding = "wedding",
  Birthday = "birthday",
  Corporate = "corporate",
  Festival = "festival",
  Concert = "concert",
  Conference = "conference",
  Party = "party",
  Exhibition = "exhibition",
  Workshop = "workshop",
  Other = "other",
}

export enum BiddingStatus {
  Open = "open",
  Closed = "closed",
}

// Schemas
export const SomeonesPlanEventRegistrationSubTypeSchema = z.object({
  id: z.number(),
  event_id: z.number(),
  event_registration_type_id: z.number(),
  event_sub_type: z.string(),
  event_sub_type_options: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const SomeonesPlanTicketSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  event_id: z.number(),
  ticket_type: z.string(),
  price: z.string(),
  quantity: z.number(),
  status: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const SomeonesPlanBidReferenceSchema = z.object({
  id: z.number(),
  bidder_id: z.number(),
  bidder_name: z.string(),
  bidder_role: z.string(),
  event_name: z.string(),
  event_id: z.number(),
  user_id: z.number(),
  bid_amount: z.number(),
  note: z.string(),
  owner_note: z.string(),
  status: BidStatusesSchema,
  created_at: z.string(),
  updated_at: z.string(),
}).extend({
  // Forward reference to user schema
  bidder: z.any(), // Will be SomeonesPlanUserSchema
});

export const SomeonesPlanEventSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  event_name: z.string(),
  slug: z.string(),
  event_date: z.string(),
  event_time: z.string(),
  event_location: z.string(),
  event_category: z.string(),
  no_of_guests: z.number(),
  event_essentials: z.string(),
  event_description: z.string(),
  dress_code_required: z.boolean().nullable(),
  dress_code_description: z.string(),
  updated_at: z.string(),
  created_at: z.string(),
  status: SomeonesPlanEventStatusSchema,
  bidding_status: SomeonesPlanBiddingStatusSchema,
  event_profile: z.string(),
  total_bidders: z.number(),
  event_time_left: z.string(),
  isSpecial: z.boolean(),
  tickets: z.array(SomeonesPlanTicketSchema),
  event_registration_sub_types: z.array(SomeonesPlanEventRegistrationSubTypeSchema),
}).extend({
  // Forward references
  owner: z.any(), // Will be SomeonesPlanUserSchema
  bidders: z.array(SomeonesPlanBidReferenceSchema).optional(),
});

// Infer types from schemas
export type SomeonesPlanBidReference = z.infer<typeof SomeonesPlanBidReferenceSchema>;
export type SomeonesPlanEventStatus = z.infer<typeof SomeonesPlanEventStatusSchema>;
export type SomeonesPlanEventType = z.infer<typeof SomeonesPlanEventTypeSchema>;
export type SomeonesPlanBiddingStatus = z.infer<typeof SomeonesPlanBiddingStatusSchema>;
export type SomeonesPlanEventRegistrationSubType = z.infer<typeof SomeonesPlanEventRegistrationSubTypeSchema>;
export type SomeonesPlanTicket = z.infer<typeof SomeonesPlanTicketSchema>;
export type SomeonesPlanEvent = z.infer<typeof SomeonesPlanEventSchema>;
