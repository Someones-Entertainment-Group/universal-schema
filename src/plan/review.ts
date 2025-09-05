import { SomeonesPlanEvent } from "./event";
import { SomeonesPlanUser } from "./user";

// Base user review type without circular references
export interface SomeonesPlanUserReviewBase {
  id: number;
  reviewer_id: number;
  bidder_id: number;
  event_id: number;
  rating: number;
  review: string;
  status: string;
  created_at: string;
  updated_at: string;
  reviewer: SomeonesPlanUser;
  bidder: SomeonesPlanUser;
  event: SomeonesPlanEvent;
}
