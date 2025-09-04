import { z } from "zod";

import { MediaSchema } from "../media";
import { SomeonesPlanEventSchema } from "./event";

export const SomeonesPlanUserShortSchema = z.object({
  profile_image: MediaSchema.nullable(),
  id: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  business_name: z.string().nullable(),
  username: z.string(),
});

// Base user review schema without circular references
export const SomeonesPlanUserReviewBaseSchema = z.object({
  id: z.number(),
  reviewer_id: z.number(),
  bidder_id: z.number(),
  event_id: z.number(),
  rating: z.number(),
  review: z.string(),
  status: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  reviewer: SomeonesPlanUserShortSchema,
  bidder: SomeonesPlanUserShortSchema,
  event: SomeonesPlanEventSchema,
});
