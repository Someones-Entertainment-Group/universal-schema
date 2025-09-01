// User-related types and enums
export enum UserRoles {
  // Admin Users
  EventOwner = 'event_owner',
  PlannerPro = 'planner_pro',

  // Normal Users
  Performer = 'performer',
  Vendor = 'vendor',
  VenueProvider = 'venue_provider',
  Influencer = 'influencer',
  PartySeekers = 'party_seeker'
}

export type User = {
  id: number
  firstname: string
  lastname: string
  business_name?: string | null
  username: string
  email: string
  email_verified_at?: string | null
  country_code: string
  phone_number: string
  country: string
  city: string
  date_of_birth?: string
  gender?: string
  role: string
  have_company?: number
  company_name?: string
  company_address?: string
  uae_tax_registration_number?: string
  profile?: string
  created_at: string
  updated_at: string
}

// Forward declaration to avoid circular dependency
export interface EventReference {
  id: number
  user_id: number
  event_name: string
  slug: string
  event_date: string
  event_time: string
  event_location: string
  event_category: string
  no_of_guests: number
  event_essentials: string
  event_description: string
  status: string
  bidding_status: string
  created_at: string
  updated_at: string
}

export type UserReview = {
  id: number
  reviewer_id: number
  bidder_id: number
  event_id: number
  rating: number
  review: string
  status: string
  created_at: string
  updated_at: string
  event?: EventReference
  bidder?: User
  reviewer?: User
}

export type UserReviewSummary = {
  total_reviews: number
  average_rating: number
  rating_counts: {
    [key: number]: number // Key is the rating (1-5), value is the count
  }
}
