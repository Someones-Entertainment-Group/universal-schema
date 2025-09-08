import { SomeonesPlanUser } from "./user";
import { SomeonesPlanEvent } from "./event";

// Bid statuses enum
export enum SomeonesPlanBidStatus {
  Pending = "pending",
  Dismissed = "dismissed",
  Accepted = "accepted",
  Canceled = "canceled",
}

// Base bid type without circular references
export interface SomeonesPlanBidBase {
  id: number;
  bidder_id: number;
  bidder_name: string;
  bidder_role: string;
  event_name: string;
  event_id: number;
  user_id: number;
  bid_amount: number;
  note: string;
  owner_note: string;
  status: SomeonesPlanBidStatus;
  created_at: string;
  updated_at: string;
}

// Full bid type with circular references
export interface SomeonesPlanBid extends SomeonesPlanBidBase {
  bidder: SomeonesPlanUser;
  event: SomeonesPlanEvent;
}