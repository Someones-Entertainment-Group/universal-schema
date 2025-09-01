import { SomeonesPlanEvent } from "./event";
import { SomeonesPlanUser } from "./user";

enum BidStatuses {
  Pending = "pending",
  Dismissed = "dismissed",
  Accepted = "accepted",
  Canceled = "canceled",
}

// Bid-related types
interface Bid {
  id: number;
  bidder_id: number;
  bidder_name: string;
  bidder_role: string;
  event_name: string;
  event_id: number;
  user_id: number;
  bid_amount: number;
  note: string;
  bidder: SomeonesPlanUser;
  event: SomeonesPlanEvent;
  owner_note: string;
  status: BidStatuses;
  created_at: string;
  updated_at: string;
}

export type { Bid as SomeonesPlanBid, BidStatuses as SomeonesPlanBidStatuses };
