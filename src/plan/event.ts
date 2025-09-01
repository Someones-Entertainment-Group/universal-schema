import { User } from './user'

// Forward declaration to avoid circular dependency
export interface BidReference {
  id: number
  bidder_id: number
  bidder_name: string
  bidder_role: string
  event_name: string
  event_id: number
  user_id: number
  bid_amount: number
  note: string
  bidder: User
  owner_note: string
  status: 'pending' | 'dismissed' | 'accepted' | 'canceled'
  created_at: string
  updated_at: string
}

// Event-related types and enums
export enum EventStatus {
  Draft = 'draft',
  Published = 'published',
  Active = 'active',
  Ongoing = 'ongoing',
  Completed = 'completed',
  Cancelled = 'cancelled',
  Postponed = 'postponed',
  Pending = 'pending'
}

export enum EventType {
  Wedding = 'wedding',
  Birthday = 'birthday',
  Corporate = 'corporate',
  Festival = 'festival',
  Concert = 'concert',
  Conference = 'conference',
  Party = 'party',
  Exhibition = 'exhibition',
  Workshop = 'workshop',
  Other = 'other'
}

export enum BiddingStatus {
  Open = 'open',
  Closed = 'closed'
}

export type EventRegistrationSubType = {
  id: number
  event_id: number
  event_registration_type_id: number
  event_sub_type: string
  event_sub_type_options: string
  created_at: string
  updated_at: string
}

export interface Ticket {
  id: number
  user_id: number
  event_id: number
  ticket_type: string
  price: string
  quantity: number
  status: string
  created_at: string
  updated_at: string
}

export type Event = {
  id: number
  user_id: number
  event_name: string
  slug: string
  event_date: string // ISO format date
  event_time: string // 24-hour time format
  event_location: string
  event_category: string
  no_of_guests: number
  event_essentials: string // Comma-separated list
  event_description: string
  dress_code_required: boolean | null
  dress_code_description: string
  updated_at: string // ISO format timestamp
  created_at: string // ISO format timestamp
  status: EventStatus
  bidding_status: BiddingStatus
  event_profile: string
  total_bidders: number
  event_time_left: string // ISO format duration
  isSpecial: boolean
  owner: User
  bidders?: BidReference[]
  tickets: Ticket[]
  event_registration_sub_types: EventRegistrationSubType[]
}
