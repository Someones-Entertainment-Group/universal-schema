import { z } from 'zod';

// Bid statuses enum and schema
export const BidStatusesSchema = z.enum([
  "pending",
  "dismissed",
  "accepted",
  "canceled",
]);

export enum BidStatuses {
  Pending = "pending",
  Dismissed = "dismissed",
  Accepted = "accepted",
  Canceled = "canceled",
}

// Bid schema with forward references
export const SomeonesPlanBidSchema = z.object({
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
  // These will be properly typed when the related schemas are available
  bidder: z.any(), // SomeonesPlanUserSchema
  event: z.any(),  // SomeonesPlanEventSchema
});

// Infer types
export type SomeonesPlanBid = z.infer<typeof SomeonesPlanBidSchema>;
export type SomeonesPlanBidStatuses = z.infer<typeof BidStatusesSchema>;
