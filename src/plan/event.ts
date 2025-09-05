import { SomeonesPlanUser } from "./user";

// Event-related enums
export enum EventStatus {
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

// Event-related types
export interface SomeonesPlanEventRegistrationSubType {
  id: number;
  event_id: number;
  event_registration_type_id: number;
  event_sub_type: string;
  event_sub_type_options: string;
  created_at: string;
  updated_at: string;
}

export interface SomeonesPlanTicket {
  id: number;
  user_id: number;
  event_id: number;
  ticket_type: string;
  price: string;
  quantity: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface SomeonesPlanBidReference {
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
  status: string; // Will be BidStatuses enum
  created_at: string;
  updated_at: string;
  bidder: SomeonesPlanUser;
}

export interface SomeonesPlanEvent {
  id: number;
  user_id: number;
  event_name: string;
  slug: string;
  event_date: string;
  event_time: string;
  event_location: string;
  event_category: string;
  no_of_guests: number;
  event_essentials: string;
  event_description: string;
  dress_code_required: boolean | null;
  dress_code_description: string;
  updated_at: string;
  created_at: string;
  status: EventStatus;
  bidding_status: BiddingStatus;
  event_profile: string;
  total_bidders: number;
  event_time_left: string;
  isSpecial: boolean;
  tickets: SomeonesPlanTicket[];
  event_registration_sub_types: SomeonesPlanEventRegistrationSubType[];
  owner: SomeonesPlanUser;
  bidders?: SomeonesPlanBidReference[];
}